import React from 'react'
import DefaultHeader from "@/components/header/default-header";
import DefaultFooter from "@/components/footer/default";
import JoinGroup from "@/components/home/home-1/JoinGroup";

import Index from "@/components/documentation/Index";

export const metadata = {
  title: "Layanan Dokumentasi | Smartway.tours",
  description: "Smartway adalah travel agen profesional yang berdiri sejak 2016 dibawah naungan PT. Bagus Bahagia Bersama (BBB Group).",
};

function page({params}) {
  // console.log(params.slug)
  return (
    <div>
      <DefaultHeader />
      <Index params={params}/>
      <JoinGroup />
      <DefaultFooter />
    </div>
  )
}

export default page