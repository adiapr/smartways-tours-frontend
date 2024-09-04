import React from 'react'
import { destinations7 } from "@/data/desinations";
import Link from 'next/link';

function Moments({documentatation}) {
    const result = documentatation.result;
  return (
    <div>
        <h3 className="fw-bold mt-40">
            {documentatation.section2}
        </h3>
        <p>
            {documentatation.description2}
        </p>
        <div className="row mt-10">
            {result.map((item) => (
                <div
                className="col-md-4 col-6 px-1 mt-10"
                key={item.id}
                data-aos="fade"
                data-aos-delay="1000"
                >
                <Link
                    href="/rental-list-v3"
                    className="citiesCard -type-3 d-block h-full rounded-4 "
                >
                    <div className="citiesCard__image ratio ratio-3:4">
                    <img className="col-12 js-lazy" src={item.media[0].original_url} alt="image" />
                    </div>
                    <div className="citiesCard__content px-30 py-30">
                    <h4 className="text-26 fw-600 text-white text-capitalize">
                        {item.description}
                    </h4>
                    </div>
                </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Moments