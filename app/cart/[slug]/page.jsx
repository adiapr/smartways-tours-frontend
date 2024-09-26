"use client";
import TopBreadCrumb from '@/components/activity-single/TopBreadCrumb'
import Header1 from '@/components/header/default-header'
import JoinGroup from '@/components/home/home-1/JoinGroup';
import Image from 'next/image'
import DefaultFooter from "@/components/footer/default";
import React, { useEffect, useState } from 'react'
import { Snap } from 'midtrans-client';
import LoginForm from '@/components/common/LoginForm';
import { useSession } from 'next-auth/react';



function Cart({ params }) {
    const [carData, setCarData] = useState([]);
    const [selectedCarPrice, setSelectedCarPrice] = useState(0);
    const [snapToken, setSnapToken] = useState(null);
    const [snapInitialized, setSnapInitialized] = useState(false);
    const { data: session } = useSession();
    const [tour, setTour] = useState(null);
    const [peserta, setPeserta] = useState(0);

    const [availability, setAvailability] = useState(null); // Menyimpan status ketersediaan
    const [availabilityMessage, setAvailabilityMessage] = useState(''); // Menyimpan pesan ketersediaan


    const [orderTourData, setOrderTourData] = useState({
        jml_peserta: peserta,
        keberangkatan: '',
        name: '',
        pasport: '',
        birthday: '',
        phone: '',
        instagram: '',
        tiktok: '',
        email: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rent-car`);
                const data = await response.json();
                setCarData(data.data); 
            } catch (error) {
                console.log('Error saat ambil data', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchTour = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart/${params.slug}`);
                const data = await response.json();
                setTour(data);
                setPeserta(data.pax);
            } catch (error) {
                console.log('error ', error);
            }
        }

        if (params) {
            fetchTour();
        }
    }, [params]);

    const handleSelectCar = (price) => {
        setSelectedCarPrice(price);
    };

    const handleOrder = async () => {
        try {
            if (!tour) {
                console.error('Tour data is not available');
                return;
            }
    
            const total = (Number(tour?.price) || 0) * peserta + (Number(selectedCarPrice) || 0);
    
            const requestBody = {
                order_id: tour.id,
                user_id: session?.user.id,
                metode: 2,
                harga_jual: tour.start_price,
                total: total,
                product_type: 'App\\Models\\Tour',
                product_id: tour?.tour.id,
                order_tour_data: [orderTourData], // Mengirim data tambahan ke backend
            };
    
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/transaction-tour`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });
    
            const data = await response.json();
    
            if (data.token) {
                window.location.href = `${process.env.NEXT_PUBLIC_MIDTRANS_URL}/${data.token}`;
            } else {
                console.error('Failed to retrieve snap token:', data);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

    const formatCurrency = (value) => {
        return value.toLocaleString('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        });
    }

    // Tambah jumlah peserta
    const handleAddPeserta = () => {
        setPeserta((prevPeserta) => prevPeserta + tour.pax); // Menambahkan pax awal ke jumlah peserta saat ini
    }

    // Kurangi jumlah peserta
    const handleRemovePeserta = () => {
        if (peserta > tour.pax) { // Pastikan jumlah peserta tidak turun di bawah pax awal
            setPeserta((prevPeserta) => prevPeserta - tour.pax);
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        setOrderTourData({
            ...orderTourData,
            [name]: value
        });
    
        // Jika tanggal keberangkatan diubah, periksa ketersediaan
        if (name === 'keberangkatan') {
            checkAvailability(value);
        }
    };
    

    useEffect(() => {
        setOrderTourData((prevData) => ({
            ...prevData,
            jml_peserta: peserta
        }));
    }, [peserta]);

    const checkAvailability = async (date) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/check-availability`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    keberangkatan: date,
                    tour_id: tour?.tour.id  // Mengirim tour_id untuk pengecekan di backend
                }),
            });
    
            const data = await response.json();
    
            if (data.available) {
                setAvailability(true);
                setAvailabilityMessage(data.message);
            } else {
                setAvailability(false);
                setAvailabilityMessage(data.message);
            }
        } catch (error) {
            console.error('Error checking availability:', error);
        }
    };
    
    

    const total = ((Number(tour?.price) || 0) * peserta) + (Number(selectedCarPrice) || 0);

    return (
        <div>
            <div className="header-margin"></div>
            <Header1 />
            <section className="pt-40">
                <div className="container">
                    <div className="alert alert-primary">
                        <b><i className='bi bi-info-circle-fill'></i> Silahkan periksa kembali pesanan kamu</b>
                    </div>

                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">
                                        <i className="bi bi-cart4"></i> Detail Pesanan
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <Image src={'/img/slider/s1.jpg'} className='img-thumbnail w-100' width={400} height={200} />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="badge bg-primary">{tour?.name}</div>
                                            <h5 className="fw-bold">
                                                {tour?.tour.name}
                                                <hr />
                                                <span className="text-primary">
                                                    Rp.{(Number(tour?.price) || 0).toLocaleString('id-ID')},-
                                                </span>
                                            </h5>
                                        </div>
                                        {/* data tambahan  */}
                                        <div className="col-md-12 mt-40">
                                            <h5 className="fw-bold">Lengkapi data pemesanan</h5>

                                            {/* Jumlah Peserta */}
                                            <div className="mt-20">
                                                <label className='fw-bold'>Jumlah Peserta</label>
                                                <div className="col-8 d-flex align-items-center">
                                                    <button 
                                                        className="btn btn-danger" 
                                                        onClick={handleRemovePeserta} 
                                                        disabled={peserta === 1} // Tidak bisa kurang dari 1 hari
                                                    >
                                                        <i className="bi bi-dash"></i>
                                                    </button>
                                                    <input 
                                                        type="text" 
                                                        className="form-control mx-2 text-center" 
                                                        value={peserta} 
                                                        // value={days} 
                                                        readOnly 
                                                    />
                                                    <button 
                                                        className="btn btn-success" 
                                                        onClick={handleAddPeserta}
                                                    >
                                                        <i className="bi bi-plus"></i>
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Tanggal Keberangkatan */}
                                            <div className="form-group mt-20">
                                                <label>Tanggal Keberangkatan</label>
                                                <input 
                                                    required 
                                                    type="date" 
                                                    name="keberangkatan" 
                                                    value={orderTourData.keberangkatan}
                                                    onChange={handleInputChange}
                                                    className="form-control" 
                                                />
                                                {availability !== null && (
                                                    <span className={availability ? 'text-success fw-bold' : 'text-danger fw-bold'}>
                                                        {availabilityMessage}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Data Pemesan */}
                                            <h5 className="fw-bold mt-80">Data Pemesan</h5>
                                            <p className='my-0'>* Pisahkan dengan koma jika ada lebih dari 1 pemesan</p>

                                            {/* Nama Lengkap */}
                                            <div className="form-group mt-20">
                                                <label>Nama Lengkap</label>
                                                <input 
                                                    required 
                                                    type="text" 
                                                    name="name" 
                                                    value={orderTourData.name}
                                                    onChange={handleInputChange}
                                                    className="form-control" 
                                                />
                                            </div>

                                            {/* Paspor */}
                                            <div className="form-group mt-20">
                                                <label>Paspor</label>
                                                <input 
                                                    required 
                                                    type="text" 
                                                    name="pasport" 
                                                    value={orderTourData.pasport}
                                                    onChange={handleInputChange}
                                                    className="form-control" 
                                                />
                                            </div>

                                            {/* Tanggal Lahir */}
                                            <div className="form-group mt-20">
                                                <label>Tanggal Lahir</label>
                                                <input 
                                                    required 
                                                    type="date" 
                                                    name="birthday" 
                                                    value={orderTourData.birthday}
                                                    onChange={handleInputChange}
                                                    className="form-control" 
                                                />
                                            </div>

                                            {/* No. Telp */}
                                            <div className="form-group mt-20">
                                                <label>No. Telp</label>
                                                <input 
                                                    required 
                                                    type="text" 
                                                    name="phone" 
                                                    value={orderTourData.phone}
                                                    onChange={handleInputChange}
                                                    className="form-control" 
                                                />
                                            </div>

                                            {/* Instagram */}
                                            <div className="form-group mt-20">
                                                <label>Instagram</label>
                                                <input 
                                                    required 
                                                    type="text" 
                                                    name="instagram" 
                                                    value={orderTourData.instagram}
                                                    onChange={handleInputChange}
                                                    className="form-control" 
                                                />
                                            </div>

                                            {/* Tiktok */}
                                            <div className="form-group mt-20">
                                                <label>Tiktok</label>
                                                <input 
                                                    required 
                                                    type="text" 
                                                    name="tiktok" 
                                                    value={orderTourData.tiktok}
                                                    onChange={handleInputChange}
                                                    className="form-control" 
                                                />
                                            </div>

                                            {/* Email */}
                                            <div className="form-group mt-20">
                                                <label>Email</label>
                                                <input 
                                                    required 
                                                    type="email" 
                                                    name="email" 
                                                    value={orderTourData.email}
                                                    onChange={handleInputChange}
                                                    className="form-control" 
                                                />
                                            </div>
                                        </div>

                                        {/* end data tambahan */}
                                        <div className="col-12 mt-40">
                                            <h5 className="fw-bold">
                                                Ingin sekalian sewa mobil dan sopir? <br />
                                                Pilih sekarang
                                            </h5>
                                            <div className="row mt-10">
                                                {carData.map((item) => (
                                                    <div className="col-md-3 col-6 px-1" key={item.id}>
                                                        <div className="card">
                                                            <div className="card-body p-1">
                                                                <Image
                                                                    width={250}
                                                                    height={250}
                                                                    className="rounded-4 col-12 js-lazy"
                                                                    style={{ aspectRatio: '16/9', objectFit: 'cover' }}
                                                                    src={item.media[0]?.original_url}
                                                                    priority
                                                                    alt="image"
                                                                    unoptimized
                                                                />
                                                                <p className="fw-bold text-black">
                                                                    {item.name}
                                                                </p>
                                                                <p className="mt-0">
                                                                    Rp.{item.price.toLocaleString('id-ID')},00
                                                                    <span style={{ fontSize: "12px" }}> (Include Driver)</span>
                                                                </p>
                                                                <button 
                                                                    type="button" 
                                                                    className="btn btn-primary w-100"
                                                                    onClick={() => handleSelectCar(item.price)}
                                                                >
                                                                    Pilih <i className="bi bi-arrow-up-right"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div style={{ position: 'sticky', top: '20px' }} className='is-sticky'>
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            <i className="bi bi-credit-card-2-back"></i> Total Pesanan
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <p>Paket Wisata</p>
                                            </div>
                                            <div>
                                                Rp.{(Number(tour?.price) || 0).toLocaleString('id-ID')},00
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <p>Mobil</p>
                                            </div>
                                            <div>
                                                Rp.{(Number(selectedCarPrice) || 0).toLocaleString('id-ID')},00
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <p>Jumlah Peserta</p>
                                            </div>
                                            <div>
                                                {peserta} Peserta
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="d-flex justify-content-between fw-bold">
                                            <div>
                                                <p>Total</p>
                                            </div>
                                            <div>
                                                Rp.{total.toLocaleString('id-ID')},00
                                            </div>
                                        </div>
                                        <hr />
                                        {session ? (
                                            <button type="submit" className="btn btn-primary mt-10 w-100" onClick={handleOrder}>
                                                Pesan Sekarang <i className="bi bi-arrow-right"></i>
                                            </button>
                                        ) : (
                                            <LoginForm />
                                        )}
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <JoinGroup />
            <DefaultFooter />
        </div>
    )
}

export default Cart;
