'use client';

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import RatingInfo from "./RatingInfo";

const DocumentationCheckout = ({ searchParams }) => {
  const id = searchParams?.category;
  const { data: session } = useSession(); // Mengambil data session dari NextAuth
  // console.log(session.user.id);
  const [price, setPrice] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    pax: '',
    location: '',
    locationDetail: '',
  });
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/harga-dokumentasi/${id}`);
        if (!response.ok) {
          console.error(`HTTP error! Status: ${response.status}`);
          return;
        }
        const data = await response.json();
        setPrice(data);
        // console.log("Hasilnya : ", data ?? 'kosong');
      } catch (error) {
        console.log("error ", error);
      }
    };
    if (id) {
      fetchData();
    }
  }, [id]);

  const formatRupiah = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const handleSelection = (option) => {
    setSelectedOption(option.id);
    setCurrentStep(1); // Pindah ke langkah berikutnya secara otomatis
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Fungsi untuk generate kode unik 8 karakter
  const generateUniqueCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 8; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  const handleCheckout = async () => {
    if (!session) {
      alert('Please log in to place an order.');
      return;
    }

    if (!session.user.id) {
      alert('Please log in to place an order.');
      return;
    }
  
    const user_id = session.user.id; // Mendapatkan user ID dari session NextAuth
    console.log("data : ", user_id);
    const kode = generateUniqueCode(); // Generate kode unik 8 karakter
    const product_id = selectedOption; // Mengambil product_id dari item.id yang dipilih
  
    // Cari item yang dipilih dan ambil documentation_services_id dari documentation.id
    const selectedItem = price.find(item => item.id === selectedOption);
  
    if (!selectedItem) {
      alert('Selected item not found!');
      return;
    }
  
    // Data untuk dikirim ke backend
    const dataToStore = {
      documentation_services_id: selectedItem.documentation?.id, // Mengakses documentation.id dari item yang dipilih
      documentation_prices_id: selectedItem.id, // Menggunakan ID harga layanan dokumentasi yang dipilih
      selectedOption,
      price: selectedItem.price, // Menggunakan harga dari item yang dipilih
      date: formData.date,
      time: formData.time,
      pax: formData.pax,
      location: formData.location,
      locationDetail: formData.locationDetail,
      user_id: user_id, // Menggunakan user_id dari session
      kode: kode, // Menggunakan kode unik yang digenerate
      product_id: product_id, // Menggunakan product_id dari item.id
    };
  
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout-documentation`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToStore),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error:', errorData);
        alert('Failed to place the order. Please try again.');
        return;
      }
  
      const result = await response.json();
      console.log('Order placed successfully:', result);
      alert(`Order placed successfully! Your order ID is ${result.data.order_id}`);
  
      // Beralih ke langkah berikutnya (Final Step)
      setCurrentStep(2);
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while placing the order. Please try again.');
    }
  };

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order-documentation`);
        if (!response.ok) {
          console.error(`HTTP error! Status: ${response.status}`);
          return;
        }
        const data = await response.json();
        setOrderDetails(data.data); // Simpan data order terakhir ke state
      } catch (error) {
        console.error('Error fetching order details:', error);
      }
    };
  
    if (currentStep === 2) { // Step 3 diindeks sebagai 2 karena array 0-based
      fetchOrderDetails(); // Panggil fungsi fetch ketika step ke-3 dipilih
    }
  }, [currentStep]);

  // handle midtrans 
  const handleMidtransCheckout = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order-documentation-checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          order_id: orderDetails.order_id, // Kirimkan order_id ke backend
        }),
      });
  
      const result = await response.json();
      if (result.success) {
        // Gunakan URL pengalihan yang diberikan oleh Midtrans secara langsung
        window.location.href = result.snap_token; // Jangan tambahkan apa pun, cukup gunakan URL lengkap
      } else {
        alert('Failed to initiate payment. Please try again.');
      }
    } catch (error) {
      console.error('Error during Midtrans checkout:', error);
      alert('An error occurred during the checkout process. Please try again.');
    }
  };
  
  
  
  
  
  

  const steps = [
    {
      title: "Choose Package",
      stepNo: "1",
      stepBar: (
        <div className="col d-none d-sm-block">
          <div className="w-full h-1 bg-border"></div>
        </div>
      ),
      content: (
        <div className="col-12 mt-30">
          <div className="row">
            {price?.map((item) => (
              <div className="col-md-4 my-2 col-6 px-1" key={item.id}>
                <div className="card">
                  <div className="card-header bg-blue-2 border-0">
                    <h4 className="card-title">{item.name}</h4>
                  </div>
                  <div className="card-body">
                    <i className="text-blue-1 fw-bold me-2 bi bi-clock"></i> {item.duration} Hour Duration <br />
                    <i className="text-blue-1 fw-bold me-2 bi bi-images"></i> {item.edited}+ Edited Photos <br />
                    <i className="text-blue-1 fw-bold me-2 bi bi-cloud-download"></i> {item.downloadable} Downloadable Photos
                    <hr />
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <p><s>{formatRupiah(item.start_price)}</s></p>
                        <h5 className="fw-bold">{formatRupiah(item.price)}</h5>
                      </div>
                      <div>
                        <div
                          className={`btn d-flex ${selectedOption === item.id ? 'btn-primary' : 'btn-outline-primary'}`}
                          onClick={() => handleSelection(item)}
                        >
                          <input
                            type="radio"
                            name="price"
                            id={`price-${item.id}`}
                            checked={selectedOption === item.id}
                            onChange={() => handleSelection(item)}
                            style={{ opacity: 0, position: 'absolute' }}
                          />
                          <label htmlFor={`price-${item.id}`}>Pilih</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Payment Details",
      stepNo: "2",
      stepBar: (
        <div className="col d-none d-sm-block">
          <div className="w-full h-1 bg-border"></div>
        </div>
      ),
      content: 
      <>
      <div className="col-xl-7 col-lg-8">
        <RatingInfo />
        <div className="mt-40">
          <label htmlFor="" className="fw-bold">Date<span className="text-danger">*</span></label>
          <input type="date" name="date" value={formData.date} onChange={handleInputChange} className="form-control border-1" />
        </div>
        <div className="mt-20">
          <label htmlFor="" className="fw-bold">Time<span className="text-danger">*</span></label>
          <input type="time" name="time" value={formData.time} onChange={handleInputChange} className="form-control border-1" />
        </div>
        <div className="mt-20">
          <label htmlFor="" className="fw-bold">PAX</label>
          <input type="text" name="pax" value={formData.pax} onChange={handleInputChange} className="form-control border-1" />
        </div>
    
        <div className="w-full h-1 bg-border mt-40 mb-40" />
    
        <h3 className="fw-bold">
          More Details of Your Photo Shoot {session?.user.id}
        </h3>
        <div className="mt-20">
          <label htmlFor="" className="fw-bold">Meeting Location<span className="text-danger">*</span></label>
          <select name="location" value={formData.location} onChange={handleInputChange} className="form-control">
            <option value="">- Select -</option>
            <option value="Airport">Airport</option>
            <option value="Hotel">Hotel</option>
            <option value="Landmark">Landmark</option>
            <option value="Attraction">Attraction</option>
            <option value="Don't know yet">Don't know yet</option>
            <option value="Other">Other</option>
          </select>
        </div>
    
        <div className="mt-20 mb-20">
          <label htmlFor="" className="fw-bold">Location Detail<span className="text-danger">*</span></label>
          <input type="text" placeholder="eg. Lobby, park etc" name="locationDetail" value={formData.locationDetail} onChange={handleInputChange} className="form-control border-1" />
        </div>
      </div>
    
      <div className="col-xl-5 col-lg-4">
        <div className="sticky-div">
          <div className="booking-sidebar">
            <div className="px-30 py-30 border-light rounded-4 mt-30">
              <div className="text-20 fw-500 mb-20">Your price summary</div>
              <hr />
              <i className="bi bi-pin-angle-fill text-blue-1"></i> {searchParams.location} <br />
              {selectedOption && (
                <>
                  <i className="bi bi-clock-fill text-blue-1"></i> {price.find(item => item.id === selectedOption)?.name}
                  <div className="px-20 py-20 bg-blue-2 rounded-4 mt-20">
                    <div className="row y-gap-5 justify-between">
                      <div className="col-auto d-flex align-items-center">
                        <div className="text-18 lh-13 fw-bold">Price</div>
                      </div>
                      <div className="col-auto">
                        <div className="text-12">
                          <s>{formatRupiah(price.find(item => item.id === selectedOption)?.start_price)}</s>
                        </div>
                        <div className="text-18 lh-13 fw-bold">
                          {formatRupiah(price.find(item => item.id === selectedOption)?.price)}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
    
              <button type="button" className="btn btn-primary mt-20 bg-blue-1 w-100" onClick={handleCheckout}>Checkout</button>
            </div>
          </div>
        </div>
      </div>
      </>
    },
    {
      title: "Final Step",
      stepNo: "3",
      stepBar: "",
      content: orderDetails ? (
        <div className="col-xl-8 col-lg-8 mx-auto">
          <div className="order-completed-wrapper">
            <div className="d-flex flex-column items-center mt-40 lg:md-40 sm:mt-24">
              <div className="size-80 flex-center rounded-full bg-dark-3">
                <i className="icon-check text-30 text-white" />
              </div>
              <div className="text-30 lh-1 fw-600 mt-20">
                Your order was submitted successfully!
              </div>
              <div className="text-15 text-light-1 mt-10">
                This last step to process checkout
              </div>
            </div>
    
            <div className="border-type-1 rounded-8 px-50 py-35 mt-40">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="text-15 lh-12">Order Number</div>
                  <div className="text-15 lh-12 fw-500 text-blue-1 mt-10">
                    {orderDetails.order_id}
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="text-15 lh-12">Date</div>
                  <div className="text-15 lh-12 fw-500 text-blue-1 mt-10">
                    {orderDetails.date}
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="text-15 lh-12">Total</div>
                  <div className="text-15 lh-12 fw-500 text-blue-1 mt-10">
                    {formatRupiah(orderDetails.price)}
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="text-15 lh-12">Payment Method</div>
                  <div className="text-15 lh-12 fw-500 text-blue-1 mt-10">
                    {orderDetails.payment_method || "Not selected"}
                  </div>
                </div>
              </div>
            </div>
            {/* <h4 className="text-20 fw-500 mb-30">Proceed to Payment</h4> */}
            {/* Tombol Checkout via Midtrans */}
            <div className="border-light rounded-8 px-50 py-40 mt-40">
              <h4 className="text-20 fw-500 mb-30">Detail Order</h4>
              <table>
                <tr>
                  <td>Name</td>
                  <td> : {session.user.name}</td>
                </tr>
                <tr>
                  <td>Date</td>
                  <td> : {orderDetails.date}</td>
                </tr>
                <tr>
                  <td>Time</td>
                  <td> : {orderDetails.time}</td>
                </tr>
                <tr>
                  <td>PAX</td>
                  <td> : {orderDetails.pax}</td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td> : {orderDetails.location}</td>
                </tr>
                <tr>
                  <td>Location Detail</td>
                  <td> : {orderDetails.location_detail}</td>
                </tr>
              </table>
              {/* <h4 className="text-20 fw-500 mb-30">Proceed to Payment</h4> */}
              <button
                className="btn btn-primary w-100 mt-50"
                onClick={handleMidtransCheckout}
              >
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )
    }
    
    
  ];

  const renderStep = () => {
    const { content } = steps[currentStep];
    return <>{content}</>;
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      <div className="row x-gap-40 y-gap-30 items-center">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="col-auto">
              <div
                className="d-flex items-center cursor-pointer transition"
                onClick={() => setCurrentStep(index)}
              >
                <div
                  className={
                    currentStep === index
                      ? "active size-40 rounded-full flex-center bg-blue-1"
                      : "size-40 rounded-full flex-center bg-blue-1-05 text-blue-1 fw-500"
                  }
                >
                  {currentStep === index ? (
                    <>
                      <i className="icon-check text-16 text-white"></i>
                    </>
                  ) : (
                    <>
                      <span>{step.stepNo}</span>
                    </>
                  )}
                </div>
                <div className="text-18 fw-500 ml-10"> {step.title}</div>
              </div>
            </div>
            {step.stepBar}
          </React.Fragment>
        ))}
      </div>
      <div className="row">{renderStep()}</div>
      <div className="row x-gap-20 y-gap-20 pt-20">
        <div className="col-auto">
          <button
            className="button h-60 px-24 -blue-1 bg-light-2"
            disabled={currentStep === 0}
            onClick={previousStep}
          >
            Previous
          </button>
        </div>
      </div>
    </>
  );
};

export default DocumentationCheckout;
