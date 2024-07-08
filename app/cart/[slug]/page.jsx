"use client";
import TopBreadCrumb from '@/components/activity-single/TopBreadCrumb'
import Header1 from '@/components/header/default-header'
import JoinGroup from '@/components/home/home-1/JoinGroup';
import Image from 'next/image'
import DefaultFooter from "@/components/footer/default";
import React, { useEffect, useState } from 'react'
import Snap from 'midtrans-client';

function Cart({ params }) { 
    const [carData, setCarData] = useState([]);
    const [selectedCarPrice, setSelectedCarPrice] = useState(0);
    const [snapToken, setSnapToken] = useState(null);
    const [snapInitialized, setSnapInitialized] = useState(false);

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

    const [tour, setTour] = useState(null);
    useEffect(() => {
        const fetchTour = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart/${params.slug}`);
                const data = await response.json();
                setTour(data);
            } catch (error) {
                console.log('error ', error);
            }
        }

        if (params) {
            fetchTour();
        }
    }, [params])

    const handleSelectCar = (price) => {
        setSelectedCarPrice(price);
    };

    const handleOrder = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/create-transaction`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    order_id: tour.id,
                }),
            });
    
            const data = await response.json();
            setSnapToken(data.token);
    
            if (snapInitialized && window.snap && window.snap.pay) {
                Snap.snap.pay(data.token, {
                    onSuccess: function(result){
                        alert("Pembayaran berhasil!"); 
                        console.log(result);
                    },
                    onPending: function (result) {
                        alert("Menunggu pembayaran Anda!"); 
                        console.log(result);
                    },
                    onError: function (result) {
                        alert("Pembayaran gagal!"); 
                        console.log(result);
                    },
                    onClose: function () {
                        alert("Anda menutup popup tanpa menyelesaikan pembayaran");
                    }
                });
            } else {
                console.error('Snap SDK belum diinisialisasi.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const formatCurrency = (value) => {
        return value.toLocaleString('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        });
    }

    const total = (Number(tour?.price) || 0) + (Number(selectedCarPrice) || 0);
    
    return (
        <div>
            <div className="header-margin"></div>
            <Header1 />
            <section className="pt-40">
                <div className="container">
                    <div className="alert alert-primary">
                        <b><i className='bi bi-info-circle-fill'></i> Silahkan periksa kembali pesanan Anda</b>
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
                                                    Rp.{tour?.price.toLocaleString('id-ID')},-
                                                </span>
                                            </h5>
                                        </div>
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
                                        <hr />
                                        <div className="d-flex justify-content-between fw-bold">
                                            <div>
                                                <p>Total</p>
                                            </div>
                                            <div>
                                                Rp.{total.toLocaleString('id-ID')},00
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary mt-10 w-100" onClick={handleOrder}>
                                            Pesan Sekarang <i className="bi bi-arrow-right"></i>
                                        </button>
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
