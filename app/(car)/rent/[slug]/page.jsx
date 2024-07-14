import dynamic from "next/dynamic";
import "photoswipe/dist/photoswipe.css";
import Header11 from "@/components/header/header-11";
import DefaultFooter from "@/components/footer/default";
import JoinGroup from "@/components/home/home-1/JoinGroup";
import CarIndex from "@/components/car-single/CarIndex";

export const metadata = {
  title: "Rental Mobil | Smartway.tours",
  description: "Smartway adalah travel agen profesional yang berdiri sejak 2016 dibawah naungan PT. Bagus Bahagia Bersama (BBB Group).",
};

const TourSingleV1Dynamic = ({ params }) => {
  // const id = params.id;
  // const car = carsData.find((item) => item.id == id) || carsData[0];

  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header11 />

      <CarIndex slug={params.slug}/>
      
      <JoinGroup />

      <DefaultFooter />
    </>
  );
};

export default dynamic(() => Promise.resolve(TourSingleV1Dynamic), {
  ssr: false,
});
