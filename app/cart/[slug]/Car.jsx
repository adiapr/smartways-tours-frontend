"use client";
import TopBreadCrumb from '@/components/activity-single/TopBreadCrumb'
import Header1 from '@/components/header/default-header'
import JoinGroup from '@/components/home/home-1/JoinGroup';
import Image from 'next/image'
import DefaultFooter from "@/components/footer/default";
import React, { useCallback, useEffect, useState } from 'react'
import { Snap } from 'midtrans-client';
import LoginForm from '@/components/common/LoginForm';
import { useSession } from 'next-auth/react';



function Cart({ params }) {
    const [carData, setCarData] = useState([]);
    const [selectedCarPrice, setSelectedCarPrice] = useState(0);
    const [snapToken, setSnapToken] = useState(null);
    const [snapInitialized, setSnapInitialized] = useState(false);
    const { data: session } = useSession();
    const [tour, setTour] = useState(null);
    const [peserta, setPeserta] = useState(0);
    const [dp, setDp] = useState();

    const [availability, setAvailability] = useState(null); // Menyimpan status ketersediaan
    const [availabilityMessage, setAvailabilityMessage] = useState(''); // Menyimpan pesan ketersediaan


    const [orderTourData, setOrderTourData] = useState({
        jml_peserta: peserta,
        keberangkatan: '',
        name: '',
        pasport: '',
        birthday: '',
        phone: '',
        instagram: '',
        tiktok: '',
        email: ''
    });

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

    // get DP
    useEffect(() => {
        const fetchDp = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tour-price/${params.slug}`);
                const data = await response.json();
                setDp(data);
            } catch (error) {
                console.log('error : ', error)
            }
        };
        fetchDp();
    }, []);
    console.log(dp);

    useEffect(() => {
        const fetchTour = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart/${params.slug}`)
                const data = await response.json()
                // console.log(data)
                setTour(data)
                setPeserta(data.pax)
                setOrderTourData(prevData => ({ ...prevData, jml_peserta: data.pax }))
            } catch (error) {
                console.error('Error fetching tour data:', error)
            }
        }
    
        if (params) {
            fetchTour()
        }
    }, [params]);

    const handleSelectCar = (price) => {
        setSelectedCarPrice(price);
    };

    const handleOrder = async () => {
        try {
            if (!tour) {
                console.error('Tour data is not available');
                return;
            }
    
            const total = (Number(tour?.price) || 0) * peserta + (Number(selectedCarPrice) || 0);
    
            const requestBody = {
                order_id: tour.id,
                user_id: session?.user.id,
                metode: 2,
                harga_jual: tour.start_price,
                total: total,
                product_type: 'App\\Models\\Tour',
                product_id: tour?.tour.id,
                order_tour_data: [orderTourData], // Mengirim data tambahan ke backend
            };
    
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/transaction-tour`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });
    
            const data = await response.json();
    
            if (data.token) {
                window.location.href = `${process.env.NEXT_PUBLIC_MIDTRANS_URL}/${data.token}`;
            } else {
                console.error('Failed to retrieve snap token:', data);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    


    const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        setOrderTourData({
            ...orderTourData,
            [name]: value
        });
    
        // Jika tanggal keberangkatan diubah, periksa ketersediaan
        if (name === 'keberangkatan') {
            checkAvailability(value);
        }
    };
    

    useEffect(() => {
        setOrderTourData((prevData) => ({
            ...prevData,
            jml_peserta: peserta
        }));
    }, [peserta]);

    const checkAvailability = async (date) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/check-availability`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    keberangkatan: date,
                    tour_id: tour?.tour.id  // Mengirim tour_id untuk pengecekan di backend
                }),
            });
    
            const data = await response.json();
    
            if (data.available) {
                setAvailability(true);
                setAvailabilityMessage(data.message);
            } else {
                setAvailability(false);
                setAvailabilityMessage(data.message);
            }
        } catch (error) {
            console.error('Error checking availability:', error);
        }
    };
    
    

    const total = ((Number(tour?.price) || 0) * peserta) + (Number(selectedCarPrice) || 0);

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
                                            <Image src={tour?.tour?.media[0].original_url} className='img-thumbnail w-100 aspect-video' width={400} height={200} unoptimized />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="badge bg-primary">{tour?.name}</div>
                                            <h5 className="fw-bold">
                                                {tour?.tour.name}
                                                <hr />
                                                <span className="text-primary">
                                                    Rp.{(Number(tour?.price) || 0).toLocaleString('id-ID')},-
                                                </span>
                                            </h5>
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
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <p>Jumlah Peserta</p>
                                            </div>
                                            <div>
                                                {peserta} Orang
                                            </div>
                                        </div>
                                        <hr />
                                        <span className='mb-30'>
                                            <input type="checkbox" name="" id="dp" className='d-inline-block' style={{ width:'auto' }} /> &nbsp;
                                            <label htmlFor="dp" className='d-inline-block fw-normal'>Bayar dengan DP mulai dari <b>Rp.150.000,-/Orang</b></label>
                                            <p>{dp?.tour?.location}</p>
                                        </span>
                                        <br />
                                        <br />
                                        <div className="d-flex justify-content-between fw-bold">
                                            <div>
                                                <p>Total</p>
                                            </div>
                                            <div>
                                                Rp.{total.toLocaleString('id-ID')},00
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
