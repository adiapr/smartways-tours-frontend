"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import MainFilterSearchBox from "./MainFilterSearchBox";
import styled from "styled-components";

const IframeWrapper = styled.div`
  .slide-container {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;


    @media (max-width: 768px) {
      left: 0;
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
  }
  .swiper-button-next,
  .swiper-button-prev {
      display: none !important;
    }
  }
  .swiper-pagination-bullet{
    background-color: white;
  }
`;

const CustomSlider = () => {
    const slides = [
        {
          image: "/img/slider/s1.jpg",
          title: "Welcome and thanks for visiting our beloved homeland",
          description: "Smartway adalah travel agen profesional yang berdiri sejak 2016 dibawah naungan PT. Bagus Bahagia Bersama (BBB Group). Saat ini kami melayani tur dalam negeri: Jawa Timur, Bali, Lombok, Belitung dan baru saja melakukan ekspansi tur ke luar negeri dengan menjadikan Jepang sebagai destinasi awal.",
        },
        {
          image: "/img/slider/s2.jpg",
          title: "Enhance Your Travel Experience with Us",
          description: "Nikmati pengalaman perjalanan yang luar biasa bersama kami, dengan berbagai destinasi menarik dan pelayanan terbaik yang kami tawarkan.",
        },
        {
          image: "/img/slider/s3.jpg",
          title: "Explore New Destinations",
          description: "Jelajahi destinasi baru dan menarik dengan paket wisata yang kami sediakan, dirancang khusus untuk memberikan pengalaman tak terlupakan.",
        },
        {
          image: "/img/slider/s4.jpg",
          title: "Discover Hidden Gems",
          description: "Temukan permata tersembunyi di berbagai destinasi yang jarang dikunjungi dan nikmati pengalaman eksklusif yang tidak akan kamu temukan di tempat lain.",
        },
        {
          image: "/img/slider/s5.jpg",
          title: "Adventure Awaits",
          description: "Petualangan menanti kamu dengan berbagai aktivitas seru dan menarik yang kami tawarkan di setiap paket wisata kami.",
        },
    ]

    const [item, setItem] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/slider`);
          const result = await response.json();
          if (Array.isArray(result)) {
            setItem(result);
          } else {
            console.log('Unexpected data format:', result);
          }
        } catch (error) {
          console.log('Gagal ambil data', error);
        }
      };
      fetchData();
    }, []);
    // console.log(item);

  return (
    <section className="masthead z-5">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // navigation
        pagination={{ clickable: true }}
        dynamicBullets={ true }
        // autoplay={{ delay: 3000 }}
        loop
      >
        {item.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="masthead__slide" style={{ position: "relative" }}>
              <img alt="image" src={slide.media[0].original_url} className="js-lazy" style={{ width: "100%", height: "100vh", objectFit: "cover" }} />
              <IframeWrapper>
                <div className="bg-primary"></div>
                <div className="w-full slide-container">
                  <div className="row justify-center align-items-center h-100">
                    <div className="col-auto  mx-auto">
                      <div className="text-center text-white container">
                        <h1 className="text-60 lg:text-40 md:text-30" data-aos="fade-up">{slide.name}</h1>
                        <p className="mt-6 md:mt-10 text-white" data-aos="fade-up" data-aos-delay="100">{slide.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </IframeWrapper>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-50"></div>
    </section>
  );
};

export default CustomSlider;
