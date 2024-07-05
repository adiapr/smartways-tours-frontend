
'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { destinations3 } from "../../../data/desinations";
import Link from "next/link";

const Travellers = () => {
  return (
    <div className="container py-40">
      <div className="py-40 overflow-hidden js-section-slider">
        
          <div className="row">
            {destinations3.map((item) => (
              <div className="col-md-3 col-6 px-2 mt-30" key={item.id}>
                <Link
                  href="/tour-list-v3"
                  className="citiesCard -type-2"
                  data-aos="fade"
                  data-aos-delay={item.delayAnimation}
                >
                  <div className="citiesCard__image rounded-4 ratio ratio-3:4">
                    <img
                      className="img-ratio rounded-4 js-lazy"
                      src={item.img}
                      alt="image"
                    />
                  </div>
                  <div className="citiesCard__content mt-10">
                    <h4 className="text-18 lh-13 fw-700 text-dark-1 text-center">
                      {item.title}
                    </h4>
                  </div>
                </Link>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Travellers;
