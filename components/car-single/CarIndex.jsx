'use client'
import React, { useEffect, useState } from 'react'
import FilterBox from '../dashboard/vendor-dashboard/booking/components/filter-box';
import PropertyHighlights from './PropertyHighlights';
import Overview from './Overview';
import MapPropertyFinder from './MapPropertyFinder';
import styled from 'styled-components';

const locationMapping = {
    "1": "Jawa Timur",
    "2": "Bali",
    "3": "Lombok"
};

const IframeWrapper = styled.div`
position: relative;
width: 100%;
padding-top: 56.25%; /* 16:9 Aspect Ratio */
iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
}
`;

const CarIndex = ({ slug }) => {
    const [car, setCar] = useState(null);

    useEffect(() => {
        const fetchCar = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rent-car/${slug}`);
                const data = await response.json();
                setCar(data);
                // console.log(response); // Log data yang diterima dari API
            } catch (error) {
                console.log('Data gagal diambil', error);
            }
        }
        
        if (slug) {
            fetchCar();
        }
    }, [slug])

    // console.log(car)

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
                        <div className="col-md-12">
                            <div className="row y-gap-20 justify-between items-end">
                                <div className="col-auto">
                                    <h1 className="text-30 sm:text-24 fw-600">{car?.name}</h1>
                                    <div className="row x-gap-10 items-center pt-10">
                                        <div className="col-auto">
                                            <div className="d-flex x-gap-5 items-center">
                                                <i className="icon-location text-16 text-light-1" />
                                                <div className="text-15 text-light-1">
                                                    {car?.location?.location}
                                                    {/* {locationNames} */}
                                                </div>
                                            </div>
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

                        
                    </div>
                </div>
            </section>

            <section className="pt-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div>
                                <div className="border-top-light mt-40 pt-40 mb-40">
                                    <h3 className="text-22 fw-bold">Detail</h3>
                                    <p className="text-dark-1 text-15 mt-20">
                                        <div dangerouslySetInnerHTML={{ __html: car?.description }}></div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
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

                                            <a href={`https://api.whatsapp.com/send?phone=6282155144449&text=Halo%2C%20saya%20ingin%20rental%20mobil%20*${car?.name}*%20di%20smartway.%0A%0ALink%20dokumentasi%0A${window.location.href}`} className="btn btn-success">
                                                    Rental Sekarang
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <IframeWrapper>
                            <div dangerouslySetInnerHTML={{ __html: car?.youtube }}></div>
                        </IframeWrapper>
                    </div>
                </div>
            </section>

            <section className="mt-40 pt-40">
                <div className="container">
                    <h3 className="text-22 fw-500 mb-20 fw-bold">Lokasi</h3>
                    <div className="rounded-4 overflow-hidden map-500">
                        {/* <MapPropertyFinder /> */}
                        <IframeWrapper>
                            <div dangerouslySetInnerHTML={{ __html: car?.map }}></div>
                        </IframeWrapper>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CarIndex
