import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from 'swiper';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import Image from 'next/image';

function Slide2({bawah}) {
    const slider = [
        {
            id: 1,
            img: '/img/backgrounds/bg-lombok.jpg'
        },
        {
            id: 2,
            img: '/img/backgrounds/bg-lombok.jpg'
        },
        {
            id: 3,
            img: '/img/backgrounds/bg-lombok.jpg'
        },
        {
            id: 4,
            img: '/img/backgrounds/bg-lombok.jpg'
        },
    ];

    return (
        <>
            <div className=" w-100 mt-2 position-relative">
                {/* Tambahkan tombol navigasi */}
                <div className="js-img-prev swiper-button-prev"></div>
                <div className="js-img-next swiper-button-next"></div>

                <Swiper
                    slidesPerView={2.2}  // Default slidesPerView
                    spaceBetween={10}   // Gap antar slide
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: ".js-img-next",
                        prevEl: ".js-img-prev",
                    }}
                    breakpoints={{
                        // Jika layar kurang dari 768px, slidesPerView menjadi 1.2
                        0: {
                            slidesPerView: 1.2,
                            spaceBetween: 10,
                        },
                        // Jika layar lebih dari 768px, slidesPerView menjadi 2.2
                        768: {
                            slidesPerView: 2.2,
                            spaceBetween: 10,
                        }
                    }}
                    modules={[Pagination, FreeMode, Navigation]}
                    className="mySwiper"
                >
                    {bawah.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Image
                                width={500}  // Tetapkan lebar tetap untuk gambar
                                height={500} // Sesuaikan tinggi gambar
                                priority
                                src={item.media[0].original_url}
                                alt={`image-${item.id}`}
                                unoptimized
                                className="rounded-4 col-12 cover object-cover"
                                style={{ objectFit: "cover", borderRadius: "8px", height: "250px" }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}

export default Slide2;
