"use client"
import React from 'react'
import DefaultHeader from "@/components/header/default-header";
import DefaultFooter from "@/components/footer/default";
import JoinGroup from "@/components/home/home-1/JoinGroup";
import toursData from "@/data/tours";
import TopSlider from "@/components/documentation/TopSlider";

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
      <JoinGroup />
      <DefaultFooter />
    </div>
  )
}

export default page