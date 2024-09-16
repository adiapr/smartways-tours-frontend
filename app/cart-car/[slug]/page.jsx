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
    // console.log(params);
    const [selectedCarPrice, setSelectedCarPrice] = useState(0);
    const [snapToken, setSnapToken] = useState(null);
    const [snapInitialized, setSnapInitialized] = useState(false);
    const { data: session } = useSession();
    const [tour, setTour] = useState(null);
    const [days, setDays] = useState(1); // defailt 1 hari

    useEffect(() => {
        const fetchTour = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart-car/${params.slug}`);
                const data = await response.json();
                setTour(data);
            } catch (error) {
                console.log('error ', error);
            }
        }

        if (params) {
            fetchTour();
        }
    }, [params]);


    const handleOrder = async () => {
        try {
            // Pastikan tour sudah terisi sebelum menghitung total
            if (!tour) {
                console.error('Data is not available');
                return;
            }

            // const total = (Number(tour?.price) || 0) + (Number(selectedCarPrice) || 0);
            const total = (Number(tour?.price) * days);

            // console.log(session?.user.id)

            const requestBody = {
                order_id: tour.id,
                user_id: session?.user.id,
                metode: 2,
                harga_jual: tour.start_price,
                total: total,
                product_type: 'App\\Models\\Car',
                product_id: tour?.id,
                // snap_token: data.token
            };

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/transaction`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            const data = await response.json();

            // console.log(data)

            // window.location.href = `https://app.midtrans.com/snap/v2/vtweb/${data.token}`;
            // window.location.href = `${process.env.NEXT_PUBLIC_MIDTRANS_URL}/${data.token}`;
            if (data.token) {
                // Jika token ada, redirect ke halaman pembayaran Midtrans
                window.location.href = `${process.env.NEXT_PUBLIC_MIDTRANS_URL}/${data.token}`;
            } else {
                console.error('Failed to retrieve snap token:', data);
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

    // tambah jumlah hari 
    const handleAddDay = () => {
        setDays(days + 1);
    }

    // kurangi hari 
    const handleRemoveDay = () => {
        setDays(days - 1);
    }

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
                                            <Image src={tour?.media[0]?.original_url} unoptimized className='img-thumbnail w-100' width={400} height={200} />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="badge bg-primary">Rental kendaraan</div>
                                            <h5 className="fw-bold">
                                                {tour?.name}
                                                <hr />
                                                <span className="text-primary">
                                                    Rp.{tour?.price.toLocaleString('id-ID')},-
                                                </span>
                                            </h5>
                                        </div>
                                        <div className="col-12 mt-40">
                                            <h5 className="fw-bold">
                                                Ingin rental berapa hari?
                                            </h5>
                                            <div className="row mt-10">
                                                {/* buatkan form ada plus di kanan dan minus dikiri dan hasil harinyanya ada muncul bagian total pesanan dengan format tour.price * hari disini */}
                                                <div className="col-8 d-flex align-items-center">
                                                    <button 
                                                        className="btn btn-danger" 
                                                        onClick={handleRemoveDay} 
                                                        disabled={days === 1} // Tidak bisa kurang dari 1 hari
                                                    >
                                                        <i className="bi bi-dash"></i>
                                                    </button>
                                                    <input 
                                                        type="text" 
                                                        className="form-control mx-2 text-center" 
                                                        value={days} 
                                                        readOnly 
                                                    />
                                                    <button 
                                                        className="btn btn-success" 
                                                        onClick={handleAddDay}
                                                    >
                                                        <i className="bi bi-plus"></i>
                                                    </button>
                                                </div>
                                                <div className="col-12 mt-3">
                                                    <h6>Total Pesanan: Rp.{(tour?.price * days).toLocaleString('id-ID')},-</h6>
                                                </div>
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
                                                <p>Total Harga</p>
                                            </div>
                                            <div>
                                                Rp.{(Number(tour?.price) || 0).toLocaleString('id-ID')},00
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <p>Jumlah</p>
                                            </div>
                                            <div>
                                                {days} Hari
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="d-flex justify-content-between fw-bold">
                                            <div>
                                                <p>Total</p>
                                            </div>
                                            <div>
                                            Rp.{(Number(tour?.price * days) || 0).toLocaleString('id-ID')},00
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
