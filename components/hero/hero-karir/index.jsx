
'use client'

import { useSelector, useDispatch } from "react-redux";

const Index = () => {
  const { tabs, currentTab } = useSelector((state) => state.hero) || {};
  const dispatch = useDispatch();

  return (
    <section className="masthead -type-2 z-2">
      <div className="masthead__bg bg-dark-3">
        <img alt="image" src="/img/masthead/2/bg.png" className="js-lazy" />
      </div>
      <div className="container">

        <div className="masthead__content">
          <div className="row y-gap-40">
            <div className="col-xl-5" data-aos="fade-up" data-aos-offset="0">
              <h3 className="z-2 text-40 lg:text-40 md:text-30 text-danger pt-80 xl:pt-80">
                <span className="text-white">Bergabunglah bersama kami</span>
                <br />
                <span className="fw-bold">
                  di Smartway.tours
                </span>
              </h3>
              <p className="z-2 text-white mt-20">
                Temukan karir impianmu dengan budaya kerja yang Gen-Z banget bersama Smartway!
              </p>
            </div>
            <div className="col-xl-7">
              <div className="masthead__images relative-1">
                <div data-aos="fade" data-aos-delay="400">
                  <img
                    src="/img/masthead/2/1.png" 
                    alt="image"
                    className="js-mouse-move"
                  />
                </div>
                <div data-aos="fade" data-aos-delay="600">
                  <img
                    src="/img/masthead/2/2.png"
                    alt="image"
                    className="js-mouse-move"
                  />
                </div>
                <div data-aos="fade" data-aos-delay="800">
                  <img
                    src="/img/masthead/2/3.png"
                    alt="image"
                    className="js-mouse-move"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
