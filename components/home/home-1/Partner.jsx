'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';

const IframeWrapper = styled.div`
    .slide-img{
        height: 100px;
        object-fit: contain; 
        margin: auto
    }
`

function Partner() {
  return (
    <div className="container my-5 text-center">
        <h5 className='mb-0'>Didukung Oleh</h5>
        <div className="d-block w-100">        
            <Link href="https://disbudpar.jatimprov.go.id/" target='_blank'>
                <Image src={'/img/partnership/didukung/Disbudpar_Jatim.png'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" />            
            </Link>
            <Link href="https://www.kemenparekraf.go.id/" target='_blank'>
                <Image src={'/img/partnership/didukung/kemenparekraf.png'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" />            
            </Link>
            <Link href="https://bromotenggersemeru.org/" target='_blank'>
                <Image src={'/img/partnership/didukung/TNBTS Logo.jpeg'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" />            
            </Link>
            <Link href="https://www.indonesia.travel/gb/en/home.html" target='_blank'>
                <Image src={'/img/partnership/didukung/Wonderful Indonesia.png'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" />        
            </Link>
        </div>
        <h5 className='mt-50 mb-0'>Telah diulas oleh banyak media masa</h5>
        <div className="d-block">
            <Link href="https://www.medcom.id/nasional/daerah/aNr9wEzK-cerita- pebisnis-agen-travel-terhantam-pandemi-covid-19" target='_blank'>
                <Image src={'/img/partnership/diulas/medcom.png'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" />
            </Link>
            <Link href="https://republika.co.id/berita/qvlk93349/cerita-alumnus- umm-bangun-bisnis-travel-terbaik-di-malang" target='_blank'>
                <Image src={'/img/partnership/diulas/republika.png'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" />
            </Link>
        </div>
        <h5 className='mt-50 mb-0'> Kerjasama perusahaan dan institusi</h5>
        <div className="d-block mt-0">
            <Link href="https://www.ciputra.ac.id/" target='_blank'>
                <Image src={'/img/partnership/kerjasama/1.png'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" />
            </Link>
            <Link href="https://www.umm.ac.id/" target='_blank'>
                <Image src={'/img/partnership/kerjasama/2.png'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" />
            </Link>
            <Link href="https://www.ui.ac.id/" target='_blank'>
                <Image src={'/img/partnership/kerjasama/3.png'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" />
            </Link>
            <Link href="https://binus.ac.id/" target='_blank'>
                <Image src={'/img/partnership/kerjasama/4.png'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" />
            </Link>
            <Link href="ttps://www.ciputra.com/id/portfolio/sekolah- citra-berkat-2/" target='_blank'>
                <Image src={'/img/partnership/kerjasama/ciputra.png'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" />
            </Link>
            <Link href="https://www.telkomsel.com/" target='_blank'>
                <Image src={'/img/partnership/kerjasama/11.png'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" />
            </Link>
            <Link href=" https://www.jasamarga.com/" target='_blank'>
                <Image src={'/img/partnership/kerjasama/jasamarga.webp'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" />
            </Link>
            <Link href="https://www.astra.co.id/" target='_blank'>
                <Image src={'/img/partnership/kerjasama/13.png'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" />
            </Link>
            <Link href="https://www.adaro.com/" target='_blank'>
                <Image src={'/img/partnership/kerjasama/adaro.png'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" />
            </Link>
            <Link href="https://www.bca.co.id/" target='_blank'>
                <Image src={'/img/partnership/kerjasama/15.png'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" />
            </Link>
            <Link href="https://www.antam.com/en" target='_blank'>
                <Image src={'/img/partnership/kerjasama/16.png'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" />
            </Link>
            <Link href="https://bmw.astra.co.id/" target='_blank'>
                <Image src={'/img/partnership/kerjasama/bmw_astra.png'} width={50} height={50} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" />
            </Link>
            <Link href="https://reliancesekuritas.com/" target='_blank'>
                <Image src={'/img/partnership/kerjasama/reliance.jpg'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" />
            </Link>
            <Link href="https://www.issworld.com/en" target='_blank'>
                <Image src={'/img/partnership/kerjasama/iss.jpg'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" />
            </Link>
            {/* <Image src={'/img/partnership/kerjasama/20.png'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" /> */}
            {/* <Image src={'/img/partnership/kerjasama/1.png'} width={200} height={100} className='slide-img me-4 mt-20' style={{ height:'25px', width:'auto' }} unoptimized loading="lazy" /> */}
        </div>
    </div>
  )
}

export default Partner;
