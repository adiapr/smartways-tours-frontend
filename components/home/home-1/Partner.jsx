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
        <h3 className='mb-10'>Dikukung Oleh</h3>
        <div className="d-block w-100">        
            <Image src={'/img/partnership/didukung/Disbudpar_Jatim.png'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" />            
            <Image src={'/img/partnership/didukung/kemenparekraf.png'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" />            
            <Image src={'/img/partnership/didukung/TNBTS Logo.jpeg'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" />            
            <Image src={'/img/partnership/didukung/Wonderful Indonesia.png'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" />        
        </div>
        <h3 className='mt-30'>Telah diulas oleh banyak media nasional</h3>
        <div className="d-block">
            <Image src={'/img/partnership/diulas/medcom.png'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" />
            <Image src={'/img/partnership/diulas/republika.png'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" />
        </div>
        <h3 className='mt-30'> Kerjasama perusahaan dan institusi</h3>
        <div className="d-block">
            <Image src={'/img/partnership/kerjasama/1.png'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" />
            <Image src={'/img/partnership/kerjasama/2.png'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" />
            <Image src={'/img/partnership/kerjasama/3.png'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" />
            <Image src={'/img/partnership/kerjasama/4.png'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" />
            <Image src={'/img/partnership/kerjasama/ciputra.png'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" />
            <Image src={'/img/partnership/kerjasama/11.png'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" />
            <Image src={'/img/partnership/kerjasama/jasamarga.webp'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" />
            <Image src={'/img/partnership/kerjasama/13.png'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" />
            <Image src={'/img/partnership/kerjasama/adaro.png'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" />
            <Image src={'/img/partnership/kerjasama/15.png'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" />
            <Image src={'/img/partnership/kerjasama/16.png'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" />
            <Image src={'/img/partnership/kerjasama/bmw.jpg'} width={50} height={50} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" />
            <Image src={'/img/partnership/kerjasama/reliance.jpg'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" />
            <Image src={'/img/partnership/kerjasama/iss.jpg'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" />
            <Image src={'/img/partnership/kerjasama/20.png'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" />
            {/* <Image src={'/img/partnership/kerjasama/1.png'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" /> */}
        </div>
    </div>
  )
}

export default Partner;
