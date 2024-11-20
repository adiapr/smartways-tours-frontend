"use client";
import React, { useEffect, useState } from "react";
import Header1 from "@/components/header/default-header";
import DefaultFooter from "@/components/footer/default";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Checkout({ params }) {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Ambil data dari Local Storage berdasarkan slug
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);

    // Filter data berdasarkan slug (misal slug adalah ID order tertentu)
    const selected = storedCart.find((item) => item.uuid === params.slug);
    setSelectedItem(selected);

    // Inisialisasi data form
    setFormData({
      keberangkatan: "",
      jml_peserta: selected ? 1 : 0,
      name: "",
      pasport: "",
      birthday: "",
      phone: "",
      instagram: "",
      tiktok: "",
      email: "",
    });
  }, [params.slug]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleCheckout = async () => {
    if (!selectedItem) {
      alert("Tidak ada item yang dipilih!");
      return;
    }

    try {
      const requestBody = {
        user_id: 1, // Ubah dengan ID user dari session (jika ada)
        metode: 2, // Misalnya metode pembayaran
        total: selectedItem.price * formData.jml_peserta, // Total harga berdasarkan jumlah peserta
        harga_jual: selectedItem.price,
        product_type: "App\\Models\\Tour",
        product_id: selectedItem.tourId,
        order_tour_data: [
          {
            jml_peserta: formData.jml_peserta,
            keberangkatan: formData.keberangkatan,
            name: formData.name,
            pasport: formData.pasport,
            birthday: formData.birthday,
            phone: formData.phone,
            instagram: formData.instagram,
            tiktok: formData.tiktok,
            email: formData.email,
          },
        ],
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Checkout berhasil! Anda akan diarahkan ke pembayaran.");
        router.push(`/payment/${data.order_id}`); // Arahkan ke halaman pembayaran
      } else {
        alert("Checkout gagal: " + data.message);
      }
    } catch (error) {
      console.error("Checkout Error:", error);
      alert("Terjadi kesalahan saat checkout.");
    }
  };

  return (
    <div>
      <Header1 />
      <div className="container my-50">
        <h3 className="text-22 fw-bold mb-20">Checkout</h3>
        {selectedItem ? (
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
                      <Image
                        src={selectedItem.image}
                        className="img-thumbnail w-100 aspect-video"
                        width={400}
                        height={200}
                        alt="Tour Image"
                        unoptimized
                      />
                    </div>
                    <div className="col-md-8">
                      <h5 className="fw-bold">{selectedItem.name}</h5>
                      <p>Harga: Rp. {selectedItem.price.toLocaleString()}</p>
                      <hr />
                      <h6>Lengkapi Data Pemesanan</h6>
                      <div className="form-group mt-20">
                        <label>Jumlah Peserta</label>
                        <input
                          type="number"
                          name="jml_peserta"
                          value={formData.jml_peserta}
                          onChange={handleInputChange}
                          className="form-control"
                        />
                      </div>
                      <div className="form-group mt-20">
                        <label>Tanggal Keberangkatan</label>
                        <input
                          type="date"
                          name="keberangkatan"
                          value={formData.keberangkatan}
                          onChange={handleInputChange}
                          className="form-control"
                        />
                      </div>
                      <div className="form-group mt-20">
                        <label>Nama Lengkap</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="form-control"
                        />
                      </div>
                      {/* Tambahkan input untuk paspor, telepon, dll. */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">
                    <i className="bi bi-credit-card-2-back"></i> Ringkasan
                  </h5>
                </div>
                <div className="card-body">
                  <p>Item: {selectedItem.name}</p>
                  <p>
                    Total: Rp.{" "}
                    {(
                      selectedItem.price * formData.jml_peserta
                    ).toLocaleString()}
                  </p>
                  <button
                    className="btn btn-primary mt-20 w-100"
                    onClick={handleCheckout}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Data tidak ditemukan.</p>
        )}
      </div>
      <DefaultFooter />
    </div>
  );
}

export default Checkout;
