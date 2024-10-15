'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TourProperties = ({ selectedLocations }) => {
  const [toursData, setToursData] = useState([]); // State untuk menyimpan data wisata
  const [loading, setLoading] = useState(true); // State untuk menangani loading

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/menu-wisata`);
        const data = await response.json();
        setToursData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredToursData = toursData.filter((item) =>
    selectedLocations.length === 0 || selectedLocations.includes(item.location.id.toString())
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {filteredToursData.slice(0, 15).map((item) => (
        <div
          className="col-lg-4 col-6 px-1"
          key={item?.id}
          data-aos="fade"
          data-aos-delay={item?.delayAnimation}
        >
          <Link
            href={`/paket-wisata/${item.slug}`}
            className="tourCard -type-1 rounded-4 position-relative "
          >
            <div className="border-1 p-1 rounded" style={{ backgroundColor: 'rgb(194,196,199, 0.2)', height: '330px', position: 'relative' }}>
              <div className="tourCard__image">
                <div className="cardImage ratio ratio-16:9">
                  <div className="cardImage__content">
                    <div className="cardImage-slider rounded-4 overflow-hidden custom_inside-slider">
                      {item.media && item.media.length > 0 && item.media[0].original_url && (
                        <Image
                          width={300}
                          height={300}
                          className="w-100"
                          style={{ aspectRatio: '16/9', objectFit: 'cover' }}
                          src={item.media[0].original_url}
                          alt={item.name}
                          unoptimized
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="cardImage__wishlist" style={{ marginRight: '-60px' }}></div>
              </div>
              <div className="tourCard__content mt-10 p-2">
                <div className="d-flex items-center lh-14 mb-5">
                  <div
                    className={`text-14 text-light-1  bg-${item.type === 'Domestik' ? 'primary' : 'success'} rounded px-3 text-white`}
                  >
                    {item?.type}
                  </div>
                  <div className="size-3 bg-light-1 rounded-full ml-10 mr-10" />
                  <div className="text-14 text-light-1"> {item?.location?.location}</div>
                </div>
                <h4 className="tourCard__title text-dark-1 text-14 md-text-18 lh-16 fw-bold line-clamp-2">
                  <span>{item?.name}</span>
                </h4>
                <div className="row justify-between items-center pt-1" style={{ bottom: '10px', position: 'absolute', width: '100%' }}>
                  <div className="col-12 w-100">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ fontSize: '12px' }} className="fw-bold">
                        Start From
                      </div>
                      <div style={{ float: 'right' }} className="text-black">
                        <p className="my-0 py-0" style={{ lineHeight: '10px' }}>
                          <s
                            className="my-0 py-0 text-right"
                            style={{ fontSize: '10px', textAlign: 'right' }}
                          >
                            {new Intl.NumberFormat('id-ID', {
                              style: 'currency',
                              currency: 'IDR',
                            }).format(item?.price?.start_price)}
                          </s>
                        </p>
                        <p className="my-0 py-0 text-black">
                          <b>
                            {new Intl.NumberFormat('id-ID', {
                              style: 'currency',
                              currency: 'IDR',
                            }).format(item?.price?.price)}
                          </b>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default TourProperties;
