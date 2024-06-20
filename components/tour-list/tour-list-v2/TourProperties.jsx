
'use client'

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
// import toursData from "../../../data/tours";
import isTextMatched from "../../../utils/isTextMatched";
import { useEffect, useState } from "react";

const TourProperties = () => {
  const [toursData, setToursData] = useState([]);

  useEffect( () => {
    const fetchData = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/menu-wisata`);
      const data = await response.json();
      setToursData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
}, []);
// console.log(toursData);


  return (
    <>
      {toursData.slice(0, 9).map((item) => (
        <div
          className="col-lg-4 col-sm-6"
          key={item?.id}
          data-aos="fade"
          data-aos-delay={item?.delayAnimation}
        >
          <Link
            href={`/paket-wisata/${item.slug}`}
            className="tourCard -type-1 rounded-4 position-relative  border-1 border-black bg-black"
          >
            <div className="tourCard__image">
              <div className="cardImage ratio ratio-1:1">
                <div className="cardImage__content">
                  <div className="cardImage-slider rounded-4 overflow-hidden custom_inside-slider">
                    {item.media && item.media.length > 0 && item.media[0].original_url && (
                      <Image
                        width={300}
                        height={300}
                        className=""
                        src={item.media[0].original_url}
                        alt={item.name}
                        unoptimized
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="cardImage__wishlist" style={{ marginRight: '-60px' }}>
                <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                  <i className="icon-heart text-12" />
                </button>
              </div>
            </div>

            <div className="tourCard__content mt-10">
              <div className="d-flex items-center lh-14 mb-5">
                <div className={`text-14 text-light-1  bg-${item.type == 'Domestik' ? 'primary' : 'success'} rounded px-3 text-white`}>
                  {item?.type}
                </div>
                <div className="size-3 bg-light-1 rounded-full ml-10 mr-10" />
                <div className="text-14 text-light-1"> {item?.location?.location}</div>
              </div>
              <h4 className="tourCard__title text-dark-1 text-18 lh-16 fw-500">
                <span>{item?.name}</span>
              </h4>
              {/* <p className="text-light-1 lh-14 text-14 mt-5">
                {item?.location?.location}
              </p> */}

              <div className="row justify-between items-center pt-15">
                <div className="col-auto">
                  <div className="d-flex items-center">
                    {/* <div className="d-flex items-center x-gap-5">
                      <div className="icon-star text-yellow-1 text-10" />
                      <div className="icon-star text-yellow-1 text-10" />
                      <div className="icon-star text-yellow-1 text-10" />
                      <div className="icon-star text-yellow-1 text-10" />
                      <div className="icon-star text-yellow-1 text-10" />
                    </div> */}
                    {/* End ratings */}

                    {/* <div className="text-14 text-light-1 ml-10">
                      {item?.numberOfReviews} reviews
                    </div> */}
                  </div>
                </div>
                {/* <div className="col-auto">
                  <div className="text-14 text-light-1">
                    From
                    <span className="text-16 fw-500 text-dark-1">
                      {" "}
                      US${item.price}
                    </span>
                  </div>
                </div> */}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default TourProperties;
