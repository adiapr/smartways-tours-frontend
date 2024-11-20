"use client";
import React, { useEffect, useState } from "react";
import Header1 from "@/components/header/default-header";
import DefaultFooter from "@/components/footer/default";
import JoinGroup from "@/components/home/home-1/JoinGroup";
import Swal from "sweetalert2";
import Link from "next/link";

function Cart() {
  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  const [cartItems, setCartItems] = useState([]);

  // Ambil data cart dari Local Storage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // Fungsi untuk menghitung total harga
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  // Fungsi untuk menghapus item dari cart
  const handleDelete = (index) => {
    Swal.fire({
      title: "Anda yakin?",
      text: "Data ini akan dihapus dari keranjang!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        // Hapus item dari state
        const updatedCart = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCart);

        // Perbarui Local Storage
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        // Alert sukses
        Swal.fire({
          title: "Terhapus!",
          text: "Item berhasil dihapus dari keranjang.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  return (
    <div>
      <div className="header-margin"></div>
      <Header1 />
      <div className="container my-50">
        <h3 className="text-22 fw-bold mb-20">Cart</h3>
        {cartItems.length === 0 ? (
          <div className="w-100 d-flex justify-content-center mb-50">
            <div className="text-center">
              <h1>
                <i className="bi bi-cart4 text-primary"></i>
              </h1>
              <h4>- Cart Anda masih kosong -</h4>
            </div>
          </div>
        ) : (
          <div>
            <table className="table table-bordered">
              <thead className="fw-bold">
                <tr className="fw-bold">
                  <th className="fw-bold">#</th>
                  <th className="fw-bold">Nama Paket</th>
                  <th className="fw-bold">Berangkat Dari</th>
                  <th className="fw-bold">Paket Harga</th>
                  <th className="fw-bold">Harga</th>
                  <th className="fw-bold">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.tourName}</td>
                    <td>{item.startCity}</td>
                    <td>{item.name}</td>
                    <td>{formatRupiah(item.price)}</td>
                    <td>
                      <button
                        className="btn btn-danger d-flex"
                        onClick={() => handleDelete(index)}
                      >
                        <i className="bi bi-trash"></i> Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-50 d-flex justify-content-end">
              <div>
                <h6>
                  Total Harga ({cartItems.length} Produk): {/* Jumlah produk */}
                </h6>
                <h5>{formatRupiah(calculateTotalPrice())}</h5> {/* Total harga */}

                <button
                  className="btn btn-primary mt-20"
                  onClick={() => {
                    // Simpan data keranjang ke Local Storage
                    localStorage.setItem("checkoutCart", JSON.stringify(cartItems));

                    // Arahkan ke halaman checkout
                    window.location.href = "/checkout";
                  }}
                >
                  Beli Sekarang
                </button>

              </div>
            </div>
          </div>
        )}
      </div>
      <JoinGroup />
      <DefaultFooter />
    </div>
  );
}

export default Cart;
