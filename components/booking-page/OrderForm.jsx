"use client"
import React, { useState } from 'react';

// Komponen utama yang menggabungkan CustomerInfo, PaymentInfo, dan OrderSubmittedInfo
const OrderForm = () => {
  // State untuk setiap bagian informasi
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [orderSubmitted, setOrderSubmitted] = useState(false);

  // Fungsi untuk menangani perubahan input pada bagian informasi pelanggan
  const handleCustomerInfoChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  // Fungsi untuk menangani perubahan input pada bagian informasi pembayaran
  const handlePaymentInfoChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  // Fungsi untuk menangani submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logika untuk mengirimkan informasi pesanan
    console.log('Customer Info:', customerInfo);
    console.log('Payment Info:', paymentInfo);
    setOrderSubmitted(true);
  };

  return (
    <div>
      {!orderSubmitted ? (
        <form onSubmit={handleSubmit}>
          {/* Bagian Customer Info */}
          <div className="customer-info">
            <h2>Customer Information</h2>
            <label>
              Name:
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={customerInfo.name}
                onChange={handleCustomerInfoChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={customerInfo.email}
                onChange={handleCustomerInfoChange}
                required
              />
            </label>
            <label>
              Phone:
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={customerInfo.phone}
                onChange={handleCustomerInfoChange}
                required
              />
            </label>
          </div>

          {/* Bagian Payment Info */}
          <div className="payment-info">
            <h2>Payment Information</h2>
            <label>
              Card Number:
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={paymentInfo.cardNumber}
                onChange={handlePaymentInfoChange}
                required
              />
            </label>
            <label>
              Expiry Date (MM/YY):
              <input
                type="text"
                name="expiryDate"
                placeholder="Expiry Date"
                value={paymentInfo.expiryDate}
                onChange={handlePaymentInfoChange}
                required
              />
            </label>
            <label>
              CVV:
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                value={paymentInfo.cvv}
                onChange={handlePaymentInfoChange}
                required
              />
            </label>
          </div>

          <button type="submit">Submit Order</button>
        </form>
      ) : (
        // Bagian Order Submitted Info
        <div className="order-submitted-info">
          <h2>Order Submitted!</h2>
          <p>Thank you for your order, {customerInfo.name}.</p>
          <p>We have sent a confirmation to {customerInfo.email}.</p>
        </div>
      )}
    </div>
  );
};

export default OrderForm;
