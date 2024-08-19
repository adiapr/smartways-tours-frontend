import React from 'react'
import Header1 from "@/components/header/header-1";
import Hero2 from "../../components/hero/hero-karir";
import HelpBlock from "../../components/block/HelpCareer";
import JoinGroup from "../../components/home/home-1/JoinGroup";
import DefaultFooter from "@/components/footer/default";

export const metadata = {
  title: "Karir | Smartway.tours",
  description: "Temukan karir impianmu dengan budaya kerja yang Gen-Z banget bersama Smartway!",
};

function Karir() {
  return (
    <>
        <Header1 />
        <Hero2 />
        <section className="layout-pt-md">
          <div className="container">
            <div className="row justify-center text-center">
              <div className="col-xl-6 col-lg-8 col-md-10">
                <div className="sectionTitle -md">
                  <h2 className="sectionTitle__title">
                    Kenapa harus bergabung dengan Smartway?
                  </h2>
                  {/* <p className=" sectionTitle__text mt-5 sm:mt-0">
                    Lorem ipsum is placeholder text commonly used in site.
                  </p> */}
                </div>
                {/* End .sectiontitle */}

              </div>
            </div>
            {/* End .row */}

            <div className="row y-gap-30 pt-60 lg:pt-40">
              <HelpBlock />
            </div>
            {/* End .row */}
          </div>
        </section>
        <div className="container">
          <div className="card mt-60">
            <div className="card-body bg-primary rounded-2 text-center text-white py-30">
              <h1>Gimana asik banget kan?</h1>
              <p className='text-white'>Buruan daftar sekarang! Sebelum kesempatan ini diambil orang.</p>
            </div>
          </div>
        </div>
        <JoinGroup />
        <DefaultFooter />
    </>
  )
}

export default Karir