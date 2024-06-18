'use client'
import React, { useEffect, useState } from 'react'
import FilterBox from '../dashboard/vendor-dashboard/booking/components/filter-box';
import PropertyHighlights from './PropertyHighlights';
import Overview from './Overview';
import MapPropertyFinder from './MapPropertyFinder';

const locationMapping = {
    "1": "Jawa Timur",
    "2": "Bali",
    "3": "Lombok"
};

const CarIndex = ({ slug }) => {
    const [car, setCar] = useState(null);

    useEffect(() => {
        const fetchCar = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rent-car/${slug}`);
                const data = await response.json();
                setCar(data);
                console.log(data); // Log data yang diterima dari API
            } catch (error) {
                console.log('Data gagal diambil', error);
            }
        }
        
        if (slug) {
            fetchCar();
        }
    }, [slug])

    if (!car) {
        return <div>Loading...</div>
    }

    let locationNames = '';
    try {
        const locationArray = JSON.parse(car.location_id);
        locationNames = locationArray.map(id => locationMapping[id]).join(', ');
    } catch (error) {
        console.error('Error parsing location_id', error);
    }

    return (
        <div>
            <section className="pt-40">
                <div className="container">
                    <div className="row y-gap-30">
                        <div className="col-lg-8">
                            <div className="row y-gap-20 justify-between items-end">
                                <div className="col-auto">
                                    <h1 className="text-30 sm:text-24 fw-600">{car?.title}</h1>
                                    <div className="row x-gap-10 items-center pt-10">
                                        <div className="col-auto">
                                            <div className="d-flex x-gap-5 items-center">
                                                <i className="icon-location text-16 text-light-1" />
                                                <div className="text-15 text-light-1">
                                                    {/* {car?.location_id} */}
                                                    {locationNames}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-auto">
                                    <div className="row x-gap-10 y-gap-10">
                                        <div className="col-auto">
                                            <button className="button px-15 py-10 -blue-1">
                                                <i className="icon-share mr-10" />
                                                Share
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-40">
                                <div className="slider__image">
                                    <img src={car?.media[0]?.original_url} alt={car?.title} style={{ aspectRatio:'16/9' }} />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div style={{ position:'sticky', top: '0' }}>
                                <div className="d-flex justify-end">
                                    <div className="px-30 py-30 rounded-4 border-light shadow-4 bg-white w-360 lg:w-full">
                                        <div className="row y-gap-15 items-center justify-between">
                                            <div className="col-auto">
                                                <div className="text-14 text-light-1">
                                                    Harga
                                                    <span className="text-20 fw-500 text-dark-1 ml-5">
                                                        Rp.{car?.price},-
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="col-auto">
                                                <div className="d-flex items-center">
                                                    <div className="text-14 text-right mr-10">
                                                        <div className="lh-15 fw-500">Rating</div>
                                                        <div className="lh-15 text-light-1">
                                                            {car?.numberOfReviews} reviews
                                                        </div>
                                                    </div>

                                                    <div className="size-40 flex-center bg-yellow-1 rounded-4">
                                                        <div className="text-14 fw-600 text-dark-1">
                                                            {car?.ratings}
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div>
                                                <PropertyHighlights />
                                            </div>

                                            <a href="" className="btn btn-success">
                                                    Rental Sekarang
                                            </a>
                                        </div>

                                        <div className="row y-gap-20 pt-20">
                                            {/* <FilterBox /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div>
                                {/* <h3 className="text-22 fw-500">Property highlights</h3> */}
                                
                                {/* <Overview /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-40 pt-40">
                <div className="container">
                    <h3 className="text-22 fw-500 mb-20 fw-bold">Lokasi</h3>
                    <div className="rounded-4 overflow-hidden map-500">
                        <MapPropertyFinder />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CarIndex
