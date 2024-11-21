"use client";

import React, { useEffect, useState } from "react";
import Header1 from "@/components/header/default-header";
import DefaultFooter from "@/components/footer/default";
import JoinGroup from "@/components/home/home-1/JoinGroup";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

function Cart() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);

  // Format angka ke Rupiah
  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  // Ambil data dari Local Storage hanya di sisi klien
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(storedCart);
    }
  }, []);

  // Fungsi untuk menghitung total harga
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + Number(item.price || 0), 0);
  };

  // Fungsi hapus item
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
        const updatedCart = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
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
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nama Paket</th>
                  <th>Berangkat Dari</th>
                  <th>Paket Harga</th>
                  <th>Harga</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.tourName || "-"}</td>
                    <td>{item.startCity || "-"}</td>
                    <td>{item.name || "-"}</td>
                    <td>{formatRupiah(item.price || 0)}</td>
                    <td>
                      <button
                        className="btn btn-danger"
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
                <h6>Total Harga ({cartItems.length} Produk):</h6>
                <h5>{formatRupiah(calculateTotalPrice())}</h5>
                <button
                  className="btn btn-primary mt-20"
                  onClick={() => {
                    localStorage.setItem(
                      "checkoutCart",
                      JSON.stringify(cartItems)
                    );
                    router.push("/checkout");
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
