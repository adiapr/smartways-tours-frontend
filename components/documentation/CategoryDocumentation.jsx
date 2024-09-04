"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function CategoryDocumentation() { 
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect( () => {
      const fetchData = async () => {
        try {
          
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/layanan-dokumentasi`);
          
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await response.json();
          console.log(data);
          setCategory(data);
          setLoading(false); //jika data berhasil diambil

        } catch (error) {
          console.log("Error  :", error);
          setError(true);
        } 
      }
      fetchData();
      
    }, []);

    if(loading) {
      return (
        <div className="skeleton-area">
          <div className='container mt-90 mb-90'>
            <h1 className="fw-semibold ">
            Photograph for every moment
            </h1>
            <p className='mt-0 mb-20 py-0'>
              Get inspired to create your own beautiful moments!
            </p>
            <div className="row skeleton-area">
              {Array.from({ length: 4 }).map((_, idx) => (
                <div className="col-md-3 col-6 px-1 py-1" key={idx}>
                  <Link
                    href="#"
                    className="citiesCard -type-1 d-block rounded-4 position-relative overflow-hidden"
                  >
                    <div className="citiesCard__image ratio ratio-3:4 loading-skeleton">
                      <Image
                        width={300}
                        height={400}
                        src={'/img/blank/no_img.jpg'}
                        alt="Loading..."
                        unoptimized
                        className="js-lazy w-100 h-100"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    {/* Gradient overlay */}
                    <div className="citiesCard__gradient"></div>
                    
                    <div className="citiesCard__content d-flex flex-column justify-between text-center pt-30 pb-20 px-20">
                      <div className="citiesCard__top loading-skeleton">
                        <div className="text-14 text-white">
                          Loading...
                        </div>
                      </div>
                      <div className="citiesCard__bottom">
                        <h4 className="text-26 md:text-20 lh-13 text-white mb-20 loading-skeleton">
                        Loading...
                        </h4>
                        <Link href="#" className="button col-12 h-60 -blue-1 bg-white text-dark-1 loading-skeleton">
                          <i className="bi bi-Whatsapp"></i> &nbsp; Loading...
                        </Link>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

          </div>
        </div>
      )
    }

    if (error) {
      return <div>Error loading data. Please try again later.</div>;
    }

  return (
    <div className='container mt-90 mb-90'>
      <h1 className="fw-semibold">
      Photograph for every moment
      </h1>
      <p className='mt-0 mb-20 py-0'>
        Get inspired to create your own beautiful moments!
      </p>
      <div className="row">
        {category.map((item) => (
          <div className='col-md-3 col-6 px-1 py-1' key={item.id}>
            <Link
              href="#"
              className="citiesCard -type-1 d-block rounded-4 position-relative overflow-hidden"
            >
              <div className="citiesCard__image ratio ratio-3:4" key={item.id}>
                <Image
                  width={300}
                  height={400}
                  src={item.media.length > 0 ? item.media[0].original_url : '/img/blank/no_img.jpg'}
                  alt={item.name}
                  unoptimized
                  className="js-lazy w-100 h-100"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              {/* Gradient overlay */}
              <div className="citiesCard__gradient"></div>
              
              <div className="citiesCard__content d-flex flex-column justify-between text-center pt-30 pb-20 px-20">
                <div className="citiesCard__top">
                  <div className="text-14 text-white">
                    {item.name}
                  </div>
                </div>
                <div className="citiesCard__bottom">
                  <h4 className="text-26 md:text-20 lh-13 text-white mb-20">
                    {item.name}
                  </h4>
                  <Link href={`/documentation/${item.slug}`} className="button col-12 h-60 -blue-1 bg-white text-dark-1">
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
