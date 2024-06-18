'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import styled from 'styled-components';

const IframeWrapper = styled.div`
    .slide-img{
        height: 100px;
        object-fit: contain; 
        margin: auto
    }
`

function Partner() {
  return (
    <div className="container my-5">
        <div className="my-2">
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                modules={[Navigation, Pagination, Autoplay]}
                autoplay={{ delay: 3000 }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <IframeWrapper>
                        <Image src={'/img/partner/1.png'} width={200} height={100} className='slide-img' unoptimized loading="lazy" />
                    </IframeWrapper>
                </SwiperSlide>
                <SwiperSlide>
                    <IframeWrapper>
                        <Image src={'/img/partner/2.png'} width={200} height={100} className='slide-img' unoptimized loading="lazy" />
                    </IframeWrapper>
                </SwiperSlide>
                <SwiperSlide>
                    <IframeWrapper>
                        <Image src={'/img/partner/3.png'} width={200} height={100} className='slide-img' unoptimized loading="lazy" />
                    </IframeWrapper>
                </SwiperSlide>
                <SwiperSlide>
                    <IframeWrapper>
                        <Image src={'/img/partner/4.png'} width={200} height={100} className='slide-img' unoptimized loading="lazy" />
                    </IframeWrapper>
                </SwiperSlide>
                <SwiperSlide>
                    <IframeWrapper>
                        <Image src={'/img/partner/8.png'} width={200} height={100} className='slide-img' unoptimized loading="lazy" />
                    </IframeWrapper>
                </SwiperSlide>
                <SwiperSlide>
                    <IframeWrapper>
                        <Image src={'/img/partner/6.png'} width={200} height={100} className='slide-img' unoptimized loading="lazy" />
                    </IframeWrapper>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <IframeWrapper>
                        <Image src={'/img/partner/7.png'} width={200} height={100} className='slide-img' unoptimized loading="lazy" />
                    </IframeWrapper>
                </SwiperSlide> */}
                
            </Swiper>
        </div>
        <div className="my-2">
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                modules={[Navigation, Pagination, Autoplay]}
                autoplay={{ delay: 3000 }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <IframeWrapper>
                        <Image src={'/img/partner/9.png'} width={200} height={100} className='slide-img' unoptimized loading="lazy" />
                    </IframeWrapper>
                </SwiperSlide>
                <SwiperSlide>
                    <IframeWrapper>
                        <Image src={'/img/partner/10.png'} width={200} height={100} className='slide-img' unoptimized loading="lazy" />
                    </IframeWrapper>
                </SwiperSlide>
                <SwiperSlide>
                    <IframeWrapper>
                        <Image src={'/img/partner/11.png'} width={200} height={100} className='slide-img' unoptimized loading="lazy" />
                    </IframeWrapper>
                </SwiperSlide>
                <SwiperSlide>
                    <IframeWrapper>
                        <Image src={'/img/partner/12.png'} width={200} height={100} className='slide-img' unoptimized loading="lazy" />
                    </IframeWrapper>
                </SwiperSlide>
                <SwiperSlide>
                    <IframeWrapper>
                        <Image src={'/img/partner/13.png'} width={200} height={100} className='slide-img' unoptimized loading="lazy" />
                    </IframeWrapper>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <IframeWrapper>
                        <Image src={'/img/partner/14.png'} width={200} height={100} className='slide-img' unoptimized loading="lazy" />
                    </IframeWrapper>
                </SwiperSlide> */}
                <SwiperSlide>
                    <IframeWrapper>
                        <Image src={'/img/partner/15.png'} width={200} height={100} className='slide-img' unoptimized loading="lazy" />
                    </IframeWrapper>
                </SwiperSlide>
                
            </Swiper>
        </div>
        <div className="my-2">
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                modules={[Navigation, Pagination, Autoplay]}
                autoplay={{ delay: 3000 }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <IframeWrapper>
                        <Image src={'/img/partner/16.png'} width={200} height={100} className='slide-img' unoptimized loading="lazy" />
                    </IframeWrapper>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <IframeWrapper>
                        <Image src={'/img/partner/17.png'} width={200} height={100} className='slide-img' unoptimized loading="lazy" />
                    </IframeWrapper>
                </SwiperSlide> */}
                {/* <SwiperSlide>
                    <IframeWrapper>
                        <Image src={'/img/partner/18.png'} width={200} height={100} className='slide-img' unoptimized loading="lazy" />
                    </IframeWrapper>
                </SwiperSlide> */}
                {/* <SwiperSlide>
                    <IframeWrapper>
                        <Image src={'/img/partner/19.png'} width={200} height={100} className='slide-img' unoptimized loading="lazy" />
                    </IframeWrapper>
                </SwiperSlide> */}
                <SwiperSlide>
                    <IframeWrapper>
                        <Image src={'/img/partner/20.png'} width={200} height={100} className='slide-img' unoptimized loading="lazy" />
                    </IframeWrapper>
                </SwiperSlide>
                <SwiperSlide>
                    <IframeWrapper>
                        <Image src={'/img/partner/21.png'} width={200} height={100} className='slide-img' unoptimized loading="lazy" />
                    </IframeWrapper>
                </SwiperSlide>
                <SwiperSlide>
                    <IframeWrapper>
                        <Image src={'/img/partner/7.png'} width={200} height={100} className='slide-img' unoptimized loading="lazy" />
                    </IframeWrapper>
                </SwiperSlide>
                
            </Swiper>
        </div>
    </div>
  )
}

export default Partner;
