import { useCart } from '@/app/context/CartContext';
import Link from 'next/link';
import React, { useState } from 'react';
import Swal from "sweetalert2";

function TourPrices({ prices, tour }) {
    const { addToCart } = useCart();

    const formatRupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(number);
    };

    const [currentIndexes, setCurrentIndexes] = useState(
        prices?.reduce((acc, price) => {
            acc[price.start_city] = {}; // Untuk setiap start_city, inisialisasi kategori
            Object.keys(price.categories || {}).forEach((categoryKey) => {
                acc[price.start_city][categoryKey] = 0; // Set default index ke 0
            });
            return acc;
        }, {}) || {}
    );

    // Fungsi navigasi
    const handleNavigation = (startCity, categoryKey, direction) => {
        const categoryData = prices.find((price) => price.start_city === startCity)?.categories[categoryKey];
        if (!categoryData || categoryData.length === 0) return; // Jika kategori tidak ada atau kosong, hentikan eksekusi

        setCurrentIndexes((prevIndexes) => {
            const maxIndex = categoryData.length;
            const newIndex =
                direction === "left"
                    ? (prevIndexes[startCity][categoryKey] - 1 + maxIndex) % maxIndex
                    : (prevIndexes[startCity][categoryKey] + 1) % maxIndex;

            return {
                ...prevIndexes,
                [startCity]: {
                    ...prevIndexes[startCity],
                    [categoryKey]: newIndex,
                },
            };
        });
    };

    return (
        <div>
            <h3 className="text-22 fw-bold mb-20">Penawaran menarik bulan ini!</h3>
            <div className="table-responsive">
                <div>
                    {prices.map((price) => (
                        <div key={price.start_city} className="mb-50">
                            <h5 className="fw-bold mb-10">Start From: {price.start_city}</h5>
                            {Object.keys(price.categories || {}).length > 0 ? (
                                Object.keys(price.categories).map((categoryKey) => (
                                    <div key={categoryKey} className="mb-3">
                                        <h6>{categoryKey}</h6>
                                        <div className="row">
                                            <div className="col-md-10">
                                                <div className="d-flex align-items-center">
                                                    {/* Tombol Navigasi Kiri */}
                                                    <button
                                                        className="btn btn-primary"
                                                        style={{ height: '100px', borderRadius: '10px 0px 0px 10px' }}
                                                        onClick={() =>
                                                            handleNavigation(price.start_city, categoryKey, "left")
                                                        }
                                                        disabled={
                                                            !price.categories[categoryKey] || // Cek jika kategori tidak ada
                                                            price.categories[categoryKey].length === 0 // Cek jika array kosong
                                                        }
                                                    >
                                                        &laquo;
                                                    </button>

                                                    {/* Data Kategori */}
                                                    <div
                                                        className="px-4 py-2 d-flex w-100 justify-content-center text-center align-items-center"
                                                        style={{ height: '100px', backgroundColor: 'rgb(0,0,0,0.1)' }}
                                                    >
                                                        <div>
                                                            {price?.categories[categoryKey]?.[
                                                                currentIndexes[price.start_city]?.[categoryKey]
                                                            ] ? (
                                                                <div>
                                                                    <h6>
                                                                        {
                                                                            price?.categories[categoryKey][
                                                                                currentIndexes[price.start_city][categoryKey]
                                                                            ].name
                                                                        }
                                                                    </h6>
                                                                    <p
                                                                        className="mb-1 mt-15"
                                                                        style={{
                                                                            fontSize: "10px",
                                                                            lineHeight: "2px",
                                                                            textDecoration: "line-through",
                                                                        }}
                                                                    >
                                                                        {formatRupiah(
                                                                            price?.categories[categoryKey][
                                                                                currentIndexes[price.start_city][categoryKey]
                                                                            ].start_price
                                                                        )}
                                                                    </p>
                                                                    <h4 className="fw-bold">
                                                                        {formatRupiah(
                                                                            price?.categories[categoryKey][
                                                                                currentIndexes[price.start_city][categoryKey]
                                                                            ].price
                                                                        )}
                                                                    </h4>
                                                                </div>
                                                            ) : (
                                                                <p>Data tidak tersedia.</p>
                                                            )}
                                                        </div>
                                                    </div>

                                                    {/* Tombol Navigasi Kanan */}
                                                    <button
                                                        className="btn btn-primary"
                                                        style={{ height: '100px', borderRadius: '0px 10px 10px 0px' }}
                                                        onClick={() =>
                                                            handleNavigation(price.start_city, categoryKey, "right")
                                                        }
                                                        disabled={
                                                            !price.categories[categoryKey] || // Cek jika kategori tidak ada
                                                            price.categories[categoryKey].length === 0 // Cek jika array kosong
                                                        }
                                                    >
                                                        &raquo;
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="mt-20 row">
                                                    <div className="col-4 pe-0">
                                                        <button
                                                            className="w-100 mb-30 btn btn-warning me-2"
                                                            onClick={() => {
                                                                const selectedItem = {
                                                                    tourId: tour.id,
                                                                    tourName: tour.name,
                                                                    startCity:price?.categories[categoryKey][
                                                                        currentIndexes[price.start_city][categoryKey]
                                                                    ]?.start_city,
                                                                    priceId: price?.categories[categoryKey][
                                                                        currentIndexes[price.start_city][categoryKey]
                                                                    ]?.uuid,
                                                                    name: price?.categories[categoryKey][
                                                                        currentIndexes[price.start_city][categoryKey]
                                                                    ]?.name,
                                                                    price: price?.categories[categoryKey][
                                                                        currentIndexes[price.start_city][categoryKey]
                                                                    ]?.price,
                                                                };

                                                                if (!selectedItem.priceId) return; // Cek jika data tidak valid

                                                                const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
                                                                existingCart.push(selectedItem);
                                                                localStorage.setItem("cart", JSON.stringify(existingCart));
                                                                addToCart(selectedItem);

                                                                Swal.fire({
                                                                    icon: "success",
                                                                    title: "Berhasil!",
                                                                    text: "Item berhasil ditambahkan ke cart.",
                                                                    showConfirmButton: false,
                                                                    timer: 1500,
                                                                });
                                                            }}
                                                            disabled={
                                                                !price.categories[categoryKey] || // Cek jika kategori tidak ada
                                                                price.categories[categoryKey].length === 0 // Cek jika array kosong
                                                            }
                                                        >
                                                            <i className="bi bi-cart4"></i>
                                                        </button>
                                                    </div>
                                                    <div className="col-8 ps-1">
                                                        {price?.categories[categoryKey]?.[currentIndexes[price.start_city]?.[categoryKey]] ? (
                                                            <Link
                                                                href={`/cart/${
                                                                    price?.categories[categoryKey]?.[currentIndexes[price.start_city][categoryKey]]?.uuid
                                                                }`}
                                                                className="w-100 mb-30 btn btn-primary"
                                                            >
                                                                Pilih
                                                            </Link>
                                                        ) : (
                                                            <button
                                                                className="w-100 mb-30 btn btn-primary"
                                                                disabled
                                                                style={{ cursor: "not-allowed", opacity: 0.5 }}
                                                            >
                                                                Pilih
                                                            </button>
                                                        )}

                                                    </div>
                                                </div>
                                            </div>
                                            <br />
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>Kategori tidak tersedia.</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TourPrices;
