
'use client'

import ModalVideo from "react-modal-video";
import { Gallery, Item } from "react-photoswipe-gallery";
import Link from "next/link";
import React, { useState } from 'react'
import Image from "next/image";

export default function Documentation({hotel}) {
    const [isOpen, setOpen] = useState(false);
  return (
    <>
     <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="oqNZOOWF8qM"
        onClose={() => setOpen(false)}
      />
    <section className="pt-40">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="row x-gap-20  items-center">
                <div className="col-auto">
                  <h1 className="text-30 sm:text-25 fw-600">Dokumentasi Perjalanan Kami</h1>
                </div>
              </div>
              <div className="row x-gap-20 y-gap-20 items-center">
                <div className="col-auto">
                  <div className="d-flex items-center text-15 text-light-1">
                    <i className="icon-location-2 text-16 mr-5" />
                    Dokumentasi perjalanan kami
                  </div>
                </div>
                <div className="col-auto">
                  
                </div>
              </div>
            </div>

            <div className="col-auto">
              <div className="row x-gap-15 y-gap-15 items-center">
                <div className="col-auto">
                  <div className="text-14">
                  </div>
                </div>
                <div className="col-auto">
                  <Link
                    href="/booking-page"
                    className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                  >
                    Lihat Tempat <div className="icon-arrow-top-right ml-15" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Gallery>
            <div className="galleryGrid -type-1 pt-30">
              <div className="galleryGrid__item relative d-flex">
                <Item
                  original="/img/slider/s5.jpg"
                  thumbnail="/img/slider/s5.jpg"
                  width={660}
                  height={660}
                >
                  {({ ref, open }) => (
                    <img
                      src="/img/slider/s5.jpg"
                      ref={ref}
                      onClick={open}
                      alt="image"
                      role="button"
                      className="rounded-4"
                    />
                  )}
                </Item>
                <div className="absolute px-20 py-20 col-12 d-flex justify-end">
                  <button className="button -blue-1 size-40 rounded-full flex-center bg-white text-dark-1">
                    <i className="icon-heart text-16" />
                  </button>
                </div>
              </div>

              <div className="galleryGrid__item">
                <Item
                  original="/img/slider/s1.jpg"
                  thumbnail="/img/slider/s1.jpg"
                  width={450}
                  height={375}
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src="/img/slider/s1.jpg"
                      alt="image"
                      className="rounded-4"
                      role="button"
                    />
                  )}
                </Item>
              </div>

              <div className="galleryGrid__item relative d-flex">
                <img
                  src="/img/slider/s2.jpg"
                  alt="image"
                  className="rounded-4"
                  role="button"
                />
                <div className="absolute h-full col-12 flex-center">
                  <div
                    className="button -blue-1 size-40 rounded-full flex-center bg-white text-dark-1 js-gallery"
                    role="button"
                    onClick={() => setOpen(true)}
                  >
                    <i className="icon-play text-16" />
                  </div>
                </div>
              </div>

              <div className="galleryGrid__item">
                <Item
                  original="/img/slider/s3.jpg"
                  thumbnail="/img/slider/s3.jpg"
                  width={450}
                  height={375}
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src="/img/slider/s3.jpg"
                      alt="image"
                      className="rounded-4"
                      role="button"
                    />
                  )}
                </Item>
              </div>

              <div className="galleryGrid__item relative d-flex">
                <img
                  src="/img/slider/s4.jpg"
                  alt="image"
                  className="rounded-4"
                />
                <div className="absolute px-10 py-10 col-12 h-full d-flex justify-end items-end">
                </div>
              </div>
            </div>
          </Gallery>

          <div className="row mt-5">
            <div className="col-md-3 col-6 mt-2 px-2">
              <Image src={'/img/influencer/influencer (1).jpg'} width={400} height={600} style={{ width:'100%', aspectRatio:'9/16',objectFit:'cover' }} className="rounded" />
            </div>
            <div className="col-md-3 col-6 mt-2 px-2">
              <Image src={'/img/influencer/influencer (2).jpg'} width={400} height={600} style={{ width:'100%', aspectRatio:'9/16',objectFit:'cover' }} className="rounded" />
            </div>
            <div className="col-md-3 col-6 mt-2 px-2">
              <Image src={'/img/influencer/influencer (3).jpg'} width={400} height={600} style={{ width:'100%', aspectRatio:'9/16',objectFit:'cover' }} className="rounded" />
            </div>
            <div className="col-md-3 col-6 mt-2 px-2">
              <Image src={'/img/influencer/influencer (4).jpg'} width={400} height={600} style={{ width:'100%', aspectRatio:'9/16',objectFit:'cover' }} className="rounded" />
            </div>
            <div className="col-md-3 col-6 mt-2 px-2">
              <Image src={'/img/influencer/influencer (5).jpg'} width={400} height={600} style={{ width:'100%', aspectRatio:'9/16',objectFit:'cover' }} className="rounded" />
            </div>
            <div className="col-md-3 col-6 mt-2 px-2">
              <Image src={'/img/influencer/influencer (6).jpg'} width={400} height={600} style={{ width:'100%', aspectRatio:'9/16',objectFit:'cover' }} className="rounded" />
            </div>
            <div className="col-md-3 col-6 mt-2 px-2">
              <Image src={'/img/influencer/influencer (7).jpg'} width={400} height={600} style={{ width:'100%', aspectRatio:'9/16',objectFit:'cover' }} className="rounded" />
            </div>
            <div className="col-md-3 col-6 mt-2 px-2">
              <Image src={'/img/influencer/influencer (8).jpg'} width={400} height={600} style={{ width:'100%', aspectRatio:'9/16',objectFit:'cover' }} className="rounded" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
