import React from 'react'

export default async function handler(req, res) {
    if(req.method === 'POST'){
        try {
            // const { order_id } = req.body;

            // endpoint laravel 
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/transaction`, {
                method: 'POST',
                headers: {
                    'Content-TYpe': 'application/json',
                },
                body: JSON.stringify({
                    order_id: tour.id,  // Misalkan tour.id adalah ID dari produk yang dipesan
                    user_id: 5,  // ID pengguna yang melakukan pesanan, pastikan nilai ini sesuai dengan yang dibutuhkan
                    metode: 1,  // ID atau jenis metode pembayaran yang dipilih (harus sesuai dengan yang diharapkan di Laravel)
                    harga_jual: 60000,  // Harga jual produk
                    total: 10000,  // Total yang harus dibayar (setelah diskon jika ada)
                    product_type: 'App\\Models\\Tours',  // Tipe produk yang dipesan (misalnya, Tours)
                    product_id: 1,  // ID spesifik dari produk yang dipesan
                }),
            });

            const data = await response.json();

            // send token 
            res.status(200).json({ token: data.token });
        } catch (error) {
            console.error('Error creating transaction:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
  return (
    <div>create-transaction</div>
  )
}
