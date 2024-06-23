"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header11 from "@/components/header/header-11";
import TopBreadCrumb from "@/components/tour-single/TopBreadCrumb";
import CallToActions from "@/components/common/CallToActions";
import DefaultFooter from "@/components/footer/default";
import Tours from "@/components/tours/Tours";
import Link from "next/link";
import Itinerary from "@/components/tour-single/itinerary";
import ImportantInfo from "@/components/tour-single/ImportantInfo";
import TourGallery from "@/components/tour-single/TourGallery";
import TourPrices from './TourPrices';
import JoinGroup from '../home/home-1/JoinGroup';

const TourIndex = ({ slug }) => {
  const [tour, setTour] = useState(null);

//   console.log('Slug:', slug); // Logging slug

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/menu-wisata/${slug}`);
        // console.log('API Response:', response); // Log full response object
        const data = await response.json();
        // console.log('API Response Data:', data); // Log the data received
        setTour(data);
      } catch (error) {
        console.log('Error fetching data on client-side:', error);
      }
    };

    if (slug) {
      fetchTour();
    }
  }, [slug]);

//   console.log(tour.documentations);

  if (!tour) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="header-margin"></div>

      <Header11 />

      {/* <TopBreadCrumb /> */}

      <section className="pt-40">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <h1 className="text-30 fw-600">{tour?.name}</h1>
              <div className="row x-gap-20 y-gap-20 items-center pt-10">
                <div className="col-auto">
                  <div className="d-flex items-center">
                    <div className="d-flex x-gap-5 items-center">
                      <i className="icon-star text-10 text-yellow-1"></i>
                      <i className="icon-star text-10 text-yellow-1"></i>
                      <i className="icon-star text-10 text-yellow-1"></i>
                      <i className="icon-star text-10 text-yellow-1"></i>
                      <i className="icon-star text-10 text-yellow-1"></i>
                    </div>
                    <div className="text-14 text-light-1 ml-10">
                      {/* {tour?.numberOfReviews} */}
                       1.240
                       reviews
                    </div>
                  </div>
                </div>

                <div className="col-auto">
                  <div className="row x-gap-10 items-center">
                    <div className="col-auto">
                      <div className="d-flex x-gap-5 items-center">
                        <i className="icon-placeholder text-16 text-light-1"></i>
                        <div className="text-15 text-light-1">
                          {tour?.location.location}
                        </div>
                      </div>
                    </div>

                    <div className="col-auto">
                      {/* <button
                        data-x-click="mapFilter"
                        className="text-blue-1 text-15 underline"
                      >
                        Show on map
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-auto">
              <div className="row x-gap-10 y-gap-10">
                {/* <div className="col-auto">
                  <button className="button px-15 py-10 -blue-1 bg-light-2">
                    <i className="icon-share mr-10"></i>
                    Bagikan
                  </button>
                </div> */}

                <div className="col-auto">
                  {/* <button className="button px-15 py-10 -blue-1 bg-light-2">
                    <i className="icon-heart mr-10"></i>
                    SaSimpanve
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TourGallery tour={tour} />

      {/* <section className="pt-40">
        <div className="container">
          <div className="pt-40 border-top-light">
            <div className="row x-gap-40 y-gap-40">
              <div className="col-auto">
                <h3 className="text-22 fw-500">Important information</h3>
              </div>
            </div>
            <ImportantInfo />
          </div>
        </div>
      </section> */}

      <section className="border-top-light  mt-40 pt-40">
        <div className="container">
          <h3 className="text-22 fw-bold mb-20">Rute Perjalanan</h3>
          <Itinerary tour={tour} />
        </div>
      </section>

      <section className="border-top-light  mt-40 pt-40">
        <div className="container">
          <h3 className="text-22 fw-bold mb-20">Pilihan Paket Harga</h3>
          <TourPrices prices={tour.prices} />
        </div>
      </section>

      {/* <section className="layout-pt-lg layout-pb-lg mt-50 border-top-light">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Pilihan Wisata Lainnya</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Jelajahi tempat wisata lebih banyak lagi
                </p>
              </div>
            </div>

            <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
          </div>

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Tours />
          </div>
        </div>
      </section> */}

      {/* <CallToActions /> */}
      <JoinGroup />

      <DefaultFooter />
    </>
  );
};

export default TourIndex;
