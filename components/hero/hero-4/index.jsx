'use client'

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Index = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    }, 3000); // Interval for slide change

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const sliders = [
    {
      id: 1,
      title: 'Capture every precious moment with us',
      subtitle: 'Get expert photographers and amazing photos, starting from just IDR 750,000 in 10+ locations in Indonesia.',
      button: 'Book Photoshoot Now',
      img: '/img/backgrounds/discount.jpg'
    },
    {
      id: 2,
      title: 'Capture every precious moment with us',
      subtitle: 'Get expert photographers and amazing photos, starting from just IDR 750,000 in 10+ locations in Indonesia.',
      button: 'Book Photoshoot Now',
      img: '/img/backgrounds/bg-lombok.jpg'
    },
    {
      id: 3,
      title: 'Capture every precious moment with us',
      subtitle: 'Get expert photographers and amazing photos, starting from just IDR 750,000 in 10+ locations in Indonesia.',
      button: 'Book Photoshoot Now',
      img: '/img/backgrounds/bg-pemandangan.webp'
    },
  ];

  return (
    <>
      <section className="masthead -type-4" style={{ margin: '0px' }}>
        <div className="masthead-slider overflow-x-hidden js-masthead-slider-4">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay, EffectFade, Navigation]}
            className="vh-100"
            loop={true}
            autoplay={{ delay: 1000 }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            navigation={{
              nextEl: ".hero4-next-active",
              prevEl: ".hero4-prev-active",
            }}
          >
            {sliders.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="masthead__image" style={{ position: 'relative' }}>
                  <img
                    alt="image"
                    src={item.img}
                    style={{ width: '100%', height: '100vh', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 1 }}
                  />
                  <div
                    className="gradient-overlay"
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '40%',
                      background: 'linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))',
                      zIndex: 2,
                    }}
                  ></div>
                  <div
                    className="container d-flex align-items-center"
                    style={{
                      height: '100vh',
                      position: 'relative',
                      zIndex: 3,
                      color: 'white',
                      textAlign: 'left',
                      paddingLeft: '20px',
                      paddingBottom: '40px',
                      display: 'flex',
                      alignItems: 'flex-end',
                    }}
                  >
                    <div>
                      <h1>{item.title}</h1>
                      <p className="text-white">{item.subtitle}</p>
                      <button className="btn btn-primary mt-30">{item.button}</button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* <div className="masthead-slider__nav -prev js-prev">
          <button className="button -outline-white size-50 flex-center text-white rounded-full hero4-prev-active">
            <i className="icon-arrow-left" />
          </button>
        </div>
        <div className="masthead-slider__nav -next js-next">
          <button className="button -outline-white size-50 flex-center text-white rounded-full hero4-next-active">
            <i className="icon-arrow-right" />
          </button>
        </div> */}
      </section>
    </>
  );
};

export default Index;
