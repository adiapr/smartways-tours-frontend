'use client';

import Image from "next/image";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

const Testimonial = () => {
  const { t } = useTranslation('common');
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Default untuk layar besar
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // breakpoint untuk layar desktop
        settings: {
          slidesToShow: 3, // menampilkan 3 slide pada layar desktop besar
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768, // breakpoint untuk layar tablet
        settings: {
          slidesToShow: 2, // menampilkan 2 slide pada layar tablet
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480, // breakpoint untuk layar mobile
        settings: {
          slidesToShow: 1, // menampilkan 1 slide pada layar mobile
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  // Ambil semua testimonial dari common.json
  const testimonials = Object.keys(t('testimonials', { returnObjects: true }));

  return (
    <section className="section-bg layout-pt-lg layout-pb-lg">
      <div className="section-bg__item -mx-20 bg-light-2" />
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle -md">
              <h2 className="sectionTitle__title">
                {t('influencer.title')}
              </h2>
              <p className="sectionTitle__text mt-5 sm:mt-0">
                {t('influencer.subtitle')}
              </p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden pt-30 js-section-slider">
          <div className="item_gap-x10">
            <Slider {...settings}>
              {testimonials.map((key) => {
                const item = t(`testimonials.${key}`, { returnObjects: true });
                return (
                  <div
                    className="testimonials -type-1 bg-white rounded-4 pt-40 pb-30 px-10"
                    key={key}
                    data-aos="fade"
                    data-aos-delay={item.delayAnimation}
                  >
                    <h4 className="text-16 fw-500 text-blue-1 mb-20">
                      {item.meta}
                    </h4>
                    <p className="testimonials__text lh-18 fw-500 text-dark-1">
                      {item.text}
                    </p>
                    <div className="pt-20 mt-28 border-top-light">
                      <div className="row x-gap-20 y-gap-20 items-center">
                        <div className="col-auto">
                          <div style={{ position: 'relative' }}>
                            <Image
                              width={90}
                              height={90}
                              src={item.avatar}
                              alt="image"
                              className="size-60"
                              style={{ borderRadius: '50%', objectFit: 'cover' }}
                            />
                            <Image
                              src="/img/icons/verified-ig.png"
                              style={{ position: 'absolute', bottom: '0px', right: '0px' }}
                              width={20}
                              height={20}
                            />
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="text-15 fw-500 lh-14">{item.name}</div>
                          <div className="text-14 lh-14 text-light-1 mt-5">
                            {item.designation}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
