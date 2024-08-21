// CarProperties.js
'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from './Sidebar';

const formatRupiah = (number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(number);
}

const CarProperties = () => {
  const [carData, setCarData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    locations: [],
    types: [],
    transmissions: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rent-car`);
        const data = await response.json();
        console.log("API response:", data);
        setCarData(data.data);
        setFilteredData(data.data);
      } catch (error) {
        console.log('Error saat ambil data', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      let filtered = carData;
  
      // console.log('Filters applied:', filters);
      // console.log('Car data:', carData);
  
      if (filters.locations.length) {
        filtered = filtered.filter(car => {
        //   console.log(`Current car object:`, car); // Tambahkan log ini untuk melihat isi dari car
        // console.log(`Checking if car location ${car.location} is in`, filters.locations);
          return filters.locations.includes(car.location);
        });
      }
  
      if (filters.types.length) {
        filtered = filtered.filter(car => filters.types.includes(car.category));
      }
  
      if (filters.transmissions.length) {
        filtered = filtered.filter(car => filters.transmissions.includes(car.transmission));
      }
  
      setFilteredData(filtered);
    };
  
    applyFilters();
  }, [filters, carData]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  if (!filteredData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="row y-gap-30">
      <div className="col-xl-3">
        <aside className="sidebar y-gap-40 xl:d-none">
          <Sidebar onFilterChange={handleFilterChange} />
        </aside>

        <div className="offcanvas offcanvas-start" tabIndex="-1" id="listingSidebar">
          <div className="offcanvas-body">
            <aside className="sidebar y-gap-40 xl:d-block">
              <Sidebar onFilterChange={handleFilterChange} />
            </aside>
          </div>
        </div>
      </div>

      <div className="col-xl-9">
        <div className="row y-gap-30">
          {filteredData.slice(0, 5).map((item) => (
            <div className="col-6 col-md-12 px-1" key={item?.id}>
              <div className="border-light p-2">
                <div className="row x-gap-20 y-gap-20">
                  <div className="col-md-auto">
                    <div className="relative d-flex">
                      <div className="cardImage w-250 md:w-1/1 rounded-4 border-light">
                        <div className="custom_inside-slider">
                          <div className="ratio ratio-1:1">
                            <div className="cardImage__content">
                              <Image
                                width={250}
                                height={250}
                                className="rounded-4 col-12 js-lazy"
                                style={{ objectFit: 'cover', aspectRatio: '16/9' }}
                                src={item.media[0]?.original_url}
                                priority
                                alt="image"
                                unoptimized
                              />
                            </div>
                            <div className="cardImage__wishlist">
                              <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                <i className="icon-heart text-12"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md">
                    <div className="d-flex flex-column h-full justify-between">
                      <div>
                        <div className="row x-gap-5 items-center">
                          <div className="col-auto">
                            <div className="text-14 text-light-1">
                              {item?.location}
                            </div>
                          </div>
                          <div className="col-auto">
                          </div>
                          <div className="col-auto">
                            <div className="text-14 text-light-1">{item.category}</div>
                          </div>
                        </div>
                        <h3 className="text-18 lh-16 fw-500 mt-5">
                          {item?.name}{" "}
                        </h3>
                      </div>
                      <div className="col-lg-7 mt-20">
                        <div className="row y-gap-5">
                          <div className="col-sm-6">
                            <div className="d-flex items-center">
                              <i className="icon-user-2" />
                              <div className="text-14 ml-10">{item?.passenger_count}</div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="d-flex items-center">
                              <i className="icon-luggage" />
                              <div className="text-14 ml-10">{item?.luggage_count}</div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="d-flex items-center">
                              <i className="icon-transmission" />
                              <div className="text-14 ml-10">
                                {item?.transmission}
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="d-flex items-center">
                              <i className="icon-speedometer" />
                              <div className="text-14 ml-10">{item?.mileage}</div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="d-flex items-center">
                              <i className="bi bi-cloud-haze2-fill" />
                              <div className="text-14 ml-10">AC</div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="d-flex items-center">
                              <i className="bi bi-database-fill" />
                              <div className="text-14 ml-10">Full to full</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {item.include_driver === 'Iya' && (
                        <div className="mt-20">
                          <div className="d-flex items-center mt-5">
                            <i className="icon-check text-10" />
                            <div className="text-14 fw-500 text-green-2 ml-10">
                              Include Driver
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-md-auto text-right md:text-left">
                    <div className="row x-gap-10 y-gap-10 justify-end items-center md:justify-start">
                      <div className="col-auto">
                        <div className="text-14 lh-14 fw-500">Rating</div>
                        <div className="text-14 lh-14 text-light-1">
                          {item?.reviews_count} reviews
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="flex-center text-dark-1 fw-600 text-14 size-40 rounded-4 bg-yellow-1">
                          {item?.ratings}
                        </div>
                      </div>
                    </div>

                    <div className="text-22 lh-12 fw-600 mt-70 md:mt-20">
                      <s className='text-15'>{formatRupiah(item?.start_price)}</s> <br />
                      {formatRupiah(item?.price)}
                    </div>
                    <Link
                      href={`/rent/${item.slug}`}
                      className="button h-50 px-24 bg-dark-1 -yellow-1 text-white mt-24"
                    >
                      Lihat Detail <div className="icon-arrow-top-right ml-15" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarProperties;
