import dynamic from "next/dynamic";
import AddBanner from "@/components/add-banner/AddBanner";
import PopularDestinations from "@/components/destinations/PopularDestinations";
import DefaultFooter from "@/components/footer/default";
import Header1 from "@/components/header/header-1";
import Hero1 from "@/components/hero/hero-1";
import BlockGuide from "@/components/block/BlockGuide";
import Blog from "@/components/blog/Blog3";
import CallToActions from "@/components/common/CallToActions";
import Destinations from "@/components/home/home-1/Destinations";
import Testimonial from "@/components/home/home-1/Testimonial";
import TestimonialLeftCol from "@/components/home/home-1/TestimonialLeftCol";
import Hotels from "@/components/hotels/Hotels";
import SelectFilter from "@/components/hotels/filter-tabs/SelectFilter";
import Hero4 from "@/components/hero/hero-4";
import CustomSlider from "@/components/hero/hero-1/CustomSlider";
import TestimonialYoutube from "@/components/home/home-1/TestimonialYoutube";
import WhyChooseUs from "@/components/home/home-1/WhyChooseus";
import GalleryOne from "@/components/hotel-single/GalleryOne";
import { hotelsData } from "@/data/hotels";
import Documentation from "@/components/home/home-1/Documentations";
import Private from "@/components/home/home-1/Private";
import JoinGroup from "@/components/home/home-1/JoinGroup";
import Partner from "@/components/home/home-1/Partner";
// import WhyChooseUs from "@/components/home/home-5/WhyChooseUs";

export const metadata = {
  title: "Smartway Tours",
  description: " Smartway adalah travel agen profesional yang berdiri sejak 2016 dibawah naungan PT. Bagus Bahagia Bersama (BBB Group)."
};

const Home_1 = () => {
  const hotel = hotelsData.find((item) => item.id == 1) || hotelsData[0];
  return (
    <>
      <Header1 />
      <CustomSlider />
      <TestimonialYoutube />
      <WhyChooseUs />
      <Documentation hotel={hotel} />
      <Partner />
      <Private />
      <JoinGroup />
      <DefaultFooter />
    </>
  );
};

export default dynamic(() => Promise.resolve(Home_1), { ssr: false });
