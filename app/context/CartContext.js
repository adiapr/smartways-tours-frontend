"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

// Buat context untuk cart
const CartContext = createContext();

// Provider untuk mengelola state cart
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Ambil data awal dari Local Storage
    if (typeof window !== "undefined") {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      return storedCart;
    }
    return [];
  });

  // Tambahkan item ke cart
  const addToCart = (item) => {
    const updatedCart = [...cartItems, item];
    setCartItems(updatedCart);

    // Simpan ke Local Storage
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  // Hapus item dari cart
  const removeFromCart = (itemIndex) => {
    const updatedCart = cartItems.filter((_, index) => index !== itemIndex);
    setCartItems(updatedCart);

    // Perbarui Local Storage
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook untuk menggunakan context
export const useCart = () => useContext(CartContext);
