"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { documentationCategory } from '../data/desinations'

function CategoryDocumentation() {
  return (
    <div className='container mt-90 mb-90'>
      <div className="row">
        {documentationCategory.map((item) => (
          <div className='col-md-3 col-6 px-1 py-1' key={item.id}>
            <Link
              href="#"
              className="citiesCard -type-1 d-block rounded-4"
            >
              <div className="citiesCard__image ratio ratio-3:4" key={item.id}>
                <Image
                    width={300}
                    height={400}
                    src={item.img}
                    alt="image"
                    className="js-lazy"
                    style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="citiesCard__content d-flex flex-column justify-between text-center pt-30 pb-20 px-20">
                <div className="citiesCard__bg" />
                <div className="citiesCard__top">
                  <div className="text-14 text-white">
                    {item.hoverText}
                  </div>
                </div>
                <div className="citiesCard__bottom">
                  <h4 className="text-26 md:text-20 lh-13 text-white mb-20">
                    {item.city}
                  </h4>
                  <Link href={`https://api.Whatsapp.com/send?phone=6282155144449&text=Hi%20Smartway.tours%0ASaya%20ingin%20menggunakan%20jasa%20layanan%20dokumentasi%20*${item.city}*%20%0A%0AMohon%20info%20selengkapnya.`} className="button col-12 h-60 -blue-1 bg-white text-dark-1">
                    <i className="bi bi-Whatsapp"></i> &nbsp; Pesan Sekarang
                  </Link>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryDocumentation
