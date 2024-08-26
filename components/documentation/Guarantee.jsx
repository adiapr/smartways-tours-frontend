import Image from 'next/image'
import React from 'react'

function Guarantee() {
  return (
    <section className="masthead -type-2 z-2 mt-50">
      <div className="masthead__bg bg-blue-2">
        <img alt="image" src="/img/masthead/2/bg.png" className="js-lazy" />
      </div>
      {/* End bg image */}

      <div className="container">
        
        <div className="masthead__content">
          <div className="row y-gap-40">
            <div className="col-xl-5 d-flex align-items-center" data-aos="fade-up" data-aos-offset="0">
                <div>
                    <img src='/img/icons/logo_pg-guarantee_desktop.png' width={200} />
                    <h1 className="z-2 text-30 lg:text-40 md:text-30  pt-3 xl:pt-0">
                        Excellent Customer Experience
                    </h1>
                    <p className="z-2 text-black mt-20">
                        High quality photographers, worry-free booking process, and exceptional photos every time.
                    </p>
                </div>


              {/* End filter content */}
            </div>
            {/* End .col */}

            <div className="col-xl-7">
              <div className="masthead__images relative-1">
                <div data-aos="fade" data-aos-delay="400">
                  <img
                    src="/img/documentation/448731346_1638839390245939_1811891903262514866_n-3380852624.webp"
                    alt="image"
                    className="js-mouse-move"
                  />
                </div>
                {/* End left image */}

                <div data-aos="fade" data-aos-delay="600">
                  <img
                    src="/img/documentation/foto-bridal.jpg"
                    alt="image"
                    className="js-mouse-move"
                  />
                </div>
                {/* End right top image */}

                <div data-aos="fade" data-aos-delay="800">
                  <img
                    src="/img/documentation/Tips-Memilih-Waktu-yang-Tepat-untuk-Prewedding.webp"
                    alt="image"
                    className="js-mouse-move"
                  />
                </div>
                {/* End right bottom image */}
              </div>

              {/* End .masthead__images */}
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .masthead__content */}
      </div>
      {/* End .container */}
    </section>
  )
}

export default Guarantee