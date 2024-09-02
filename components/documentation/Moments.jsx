import React from 'react'
import { destinations7 } from "@/data/desinations";
import Link from 'next/link';

function Moments() {
  return (
    <div>
        <h3 className="fw-bold mt-40">
            Make your family moments perfect with us
        </h3>
        <p>
          Find inspirations for your family shoot and make your lovely moments perfect with us!
        </p>
        <div className="row mt-10">
            {destinations7.map((item) => (
                <div
                className="col-md-4 col-6 px-1 mt-10"
                key={item.id}
                data-aos="fade"
                data-aos-delay={item.delayAnimation}
                >
                <Link
                    href="/rental-list-v3"
                    className="citiesCard -type-3 d-block h-full rounded-4 "
                >
                    <div className="citiesCard__image ratio ratio-3:4">
                    <img className="col-12 js-lazy" src={item.img} alt="image" />
                    </div>
                    <div className="citiesCard__content px-30 py-30">
                    <h4 className="text-26 fw-600 text-white text-capitalize">
                        {item.name}
                    </h4>
                    {/* <div className="text-15 text-white">
                        {item.numberOfProperties} properties
                    </div> */}
                    </div>
                </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Moments