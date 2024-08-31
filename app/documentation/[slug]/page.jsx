"use client"
import React from 'react'
import DefaultHeader from "@/components/header/default-header";
import DefaultFooter from "@/components/footer/default";
import JoinGroup from "@/components/home/home-1/JoinGroup";
import toursData from "@/data/tours";
import TopSlider from "@/components/documentation/TopSlider";
import Slide2 from "@/components/documentation/Slide2";

// export const metadata = {
//   title: "Layanan Dokumentasi | Smartway.tours",
//   description: "Smartway adalah travel agen profesional yang berdiri sejak 2016 dibawah naungan PT. Bagus Bahagia Bersama (BBB Group).",
// };

function page({ params }) {
  const id = params.id;
  const tour = toursData.find((item) => item.id == id) || toursData[0];
  return (
    <div>
      <DefaultHeader />
      <TopSlider tour={tour} />
      
      <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <p>
                      Some moments deserve more than a selfie, especially moments that are shared with family. Let SweetEscape turn your moments together into memories that last for a lifetime.
                    </p>
                    <Slide2 />
                </div>
            </div>
        </div>
      
      <JoinGroup />
      <DefaultFooter />
    </div>
  )
}

export default page