import dynamic from "next/dynamic";
import "photoswipe/dist/photoswipe.css";
import carsData from "@/data/cars";
import Header11 from "@/components/header/header-11";
import Overview from "@/components/car-single/Overview";
import PropertyHighlights from "@/components/car-single/PropertyHighlights";
import TopBreadCrumb from "@/components/car-single/TopBreadCrumb";
import ReviewProgress2 from "@/components/car-single/guest-reviews/ReviewProgress2";
import DetailsReview2 from "@/components/car-single/guest-reviews/DetailsReview2";
import ReplyForm from "@/components/car-single/ReplyForm";
import ReplyFormReview2 from "@/components/car-single/ReplyFormReview2";
import CallToActions from "@/components/common/CallToActions";
import DefaultFooter from "@/components/footer/default";
import SlideGallery from "@/components/car-single/SlideGallery";
import FilterBox from "@/components/car-single/filter-box";
import Faq from "@/components/faq/Faq";
import MapPropertyFinder from "@/components/car-single/MapPropertyFinder";
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
