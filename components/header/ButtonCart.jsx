"use client";
import Link from "next/link";
import React from "react";
import { useCart } from "@/app/context/CartContext";

function ButtonCart() {
  const { cartItems } = useCart(); // Ambil data cart dari context

  return (
    <div className="me-2">
      <Link href="/cart">
        <h5 className="position-relative">
          <i className="bi bi-cart4"></i>
          {cartItems.length > 0 && (
            <div
              className="position-absolute top-0 bg-danger text-white d-flex align-items-center justify-content-center"
              style={{
                fontSize: "10px",
                borderRadius: "50%",
                width: "16px",
                height: "16px",
                right: "-10px",
              }}
            >
              {cartItems.length}
            </div>
          )}
        </h5>
      </Link>
    </div>
  );
}

export default ButtonCart;
