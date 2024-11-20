"use client";
import React, { useEffect, useState } from "react";
import Header1 from "@/components/header/default-header";
import DefaultFooter from "@/components/footer/default";
import { useSession } from "next-auth/react";
import LoginForm from "@/components/common/LoginForm";

function Checkout() {
  const { data: session } = useSession();
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    keberangkatan: "",
    jml_peserta: 1,
    name: session?.user?.name || "",
    pasport: "",
    birthday: "",
    phone: "",
    instagram: "",
    tiktok: "",
    email: session?.user?.email || "",
  });
  const [formErrors, setFormErrors] = useState({}); // Untuk menyimpan pesan error

  // Ambil data dari Local Storage saat pertama kali render
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("checkoutCart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    // Reset error saat user mulai mengisi input
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  // Validasi Form
  const validateForm = () => {
    let errors = {};
    if (!formData.keberangkatan) errors.keberangkatan = "Tanggal keberangkatan wajib diisi";
    if (!formData.name) errors.name = "Nama lengkap wajib diisi";
    if (!formData.email) errors.email = "Email wajib diisi";
    if (!formData.phone) errors.phone = "Nomor telepon wajib diisi";
    if (!formData.birthday) errors.birthday = "Tanggal lahir wajib diisi";

    // Periksa masing-masing anggota di cartItems
    cartItems.forEach((item, index) => {
      if (!item.anggota || item.anggota.trim() === "") {
        errors[`anggota_${index}`] = `Nama anggota di item ${index + 1} wajib diisi`;
      }
    });

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // True jika tidak ada error
  };

  const handleCheckout = async () => {
    if (!validateForm()) return; // Jika validasi gagal, hentikan proses

    try {
      const requestBody = {
        user_id: session?.user?.id,
        metode: 2,
        total: calculateTotalPrice(),
        user_email: session?.user?.email,
        user_name: session?.user?.name,
        order_tour_data: cartItems.map((item) => ({
          tour_id: item.tourId,
          keberangkatan: formData.keberangkatan,
          jml_peserta: formData.jml_peserta,
          name: formData.name,
          pasport: formData.pasport,
          birthday: formData.birthday,
          phone: formData.phone,
          instagram: formData.instagram,
          tiktok: formData.tiktok,
          email: formData.email,
          anggota: item.anggota || "",
        })),
      };

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout-cart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (data.success && data.snap_token) {
        // Hapus semua item dari keranjang
        localStorage.removeItem("checkoutCart"); // Hapus dari Local Storage
        setCartItems([]); // Hapus dari state
        // Redirect ke Midtrans Snap
        window.location.href = `${process.env.NEXT_PUBLIC_MIDTRANS_URL}/${data.snap_token}`;
        alert("Checkout berhasil. Redirect ke Midtrans Snap...");
      } else {
        alert("Checkout gagal: " + (data.message || "Snap token tidak ditemukan"));
      }
    } catch (error) {
      alert("Terjadi kesalahan saat checkout.");
    }
  };

  return (
    <div>
      <div className="header-margin"></div>
      <Header1 />
      <div className="container my-50">
        <h3 className="text-22 fw-bold mb-20">Checkout</h3>
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Detail Pesanan</h5>
              </div>
              <div className="card-body">
                {cartItems.length > 0 ? (
                  cartItems.map((item, index) => (
                    <div className="mb-50" key={index}>
                      <b>
                        {index + 1}. {item.tourName} ({item.tourId})
                      </b>
                      <div className="ms-3">
                        {item.name} (Rp. {item.price.toLocaleString("id-ID")})
                        <div className="form-group mt-2">
                          <label className="mb-1">Tanggal Keberangkatan</label>
                          <input
                            type="date"
                            name="keberangkatan"
                            required
                            className="form-control"
                            value={formData.keberangkatan}
                            onChange={handleInputChange}
                          />
                          {formErrors.keberangkatan && (
                            <small className="text-danger">{formErrors.keberangkatan}</small>
                          )}
                        </div>
                        <div className="form-group mt-2">
                          <label className="mb-1">Nama Anggota (Pisahkan dengan koma)</label>
                          <input
                            type="text"
                            name={`anggota_${index}`}
                            className="form-control"
                            placeholder="Contoh: Budi, Andi, Joko"
                            value={item.anggota || ""}
                            onChange={(e) =>
                              setCartItems((prev) =>
                                prev.map((cartItem, i) =>
                                  i === index ? { ...cartItem, anggota: e.target.value } : cartItem
                                )
                              )
                            }
                          />
                          {formErrors[`anggota_${index}`] && (
                            <small className="text-danger">{formErrors[`anggota_${index}`]}</small>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Tidak ada item di keranjang.</p>
                )}
              </div>
            </div>

            <div className="card mt-50">
              <div className="card-header my-10">
                <h5>Informasi Pemesan</h5>
              </div>
              <div className="card-body">
                <div className="form-group mt-20">
                  <label>Nama Lengkap</label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                  {formErrors.name && <small className="text-danger">{formErrors.name}</small>}
                </div>
                <div className="form-group mt-20">
                  <label>Paspor</label>
                  <input
                    type="text"
                    name="pasport"
                    value={formData.pasport}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group mt-20">
                  <label>Tanggal Lahir</label>
                  <input
                    required
                    type="date"
                    name="birthday"
                    value={formData.birthday}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                  {formErrors.birthday && (
                    <small className="text-danger">{formErrors.birthday}</small>
                  )}
                </div>
                <div className="form-group mt-20">
                  <label>No. Telp</label>
                  <input
                    required
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                  {formErrors.phone && <small className="text-danger">{formErrors.phone}</small>}
                </div>
                <div className="form-group mt-20">
                  <label>Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                  {formErrors.email && <small className="text-danger">{formErrors.email}</small>}
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card" style={{ position: "sticky", top: "100px" }}>
              <div className="card-header">
                <h5>Ringkasan Pesanan</h5>
              </div>
              <div className="card-body">
                <p className="text-black fw-bold">
                  Total Harga: Rp. {calculateTotalPrice().toLocaleString("id-ID")}
                </p>
                {session ? (
                  <button
                    className="btn btn-success w-100 mt-10"
                    onClick={handleCheckout}
                  >
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
      <DefaultFooter />
    </div>
  );
}

export default Checkout;
