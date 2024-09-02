'use client'
// import React from 'react'
import Image from "next/image";
import React, { useState } from 'react';
import { Gallery, Item } from "react-photoswipe-gallery";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";


function TopSlider({tour}) {
  return (
    <div>
        <section className="pt-40 mx-auto" style={{ width:'97%' }}>
            <div className="">
            <div className="row y-gap-30">
                <div className="col-xl-12 px-0">
                <div className="relative d-flex justify-center overflow-hidden js-section-slider">
                    <Swiper
                    modules={[Navigation, Autoplay]}
                    loop={true}
                    autoplay={{ 
                        delay: 2000,
                        disableOnInteraction: false
                     }}
                    navigation={{
                        nextEl: ".js-img-next",
                        prevEl: ".js-img-prev",
                    }}
                    >
                    {tour?.slideImg?.map((slide, i) => (
                        <SwiperSlide key={i}>
                            <div style={{ position:"relative" }}>
                                <Image
                                    width={451}
                                    height={450}
                                    priority
                                    src={slide}
                                    alt="image"
                                    style={{ height: "501px" }}
                                    className="rounded-4 col-12 cover object-cover w-100"
                                />
                                <div className="px-50" style={{ position:'absolute', bottom: "0", borderRadius: '0px 10px', backgroundColor: 'rgb(0,0,0, 0.5)', margin: 'auto' }}>
                                    <h1 className="text-white">Judul Foto</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    </Swiper>

                    <Gallery>
                    {tour?.slideImg?.map((slide, i) => (
                        <div
                        className="absolute py-10 col-12 h-full d-flex justify-end items-end z-2 bottom-0 end-0"
                        key={i}
                        >
                        </div>
                    ))}
                    </Gallery>

                    <div className="absolute h-full col-11">
                    <button className="section-slider-nav -prev flex-center button -blue-1 bg-white shadow-1 size-40 rounded-full sm:d-none js-img-prev">
                        <i className="icon icon-chevron-left text-12" />
                    </button>
                    <button className="section-slider-nav -next flex-center button -blue-1 bg-white shadow-1 size-40 rounded-full sm:d-none js-img-next">
                        <i className="icon icon-chevron-right text-12" />
                    </button>
                    </div>
                </div>
                </div>
                <div className="col-xl-4">
                </div>
            </div>
            </div>
        </section>
    </div>
  )
}

export default TopSlider