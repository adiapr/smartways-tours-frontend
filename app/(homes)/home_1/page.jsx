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

      {/* <section className="layout-pt-lg layout-pb-md" data-aos="fade-up">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Layanan Utama Kami</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Menyediakan berbagai layanan untuk kebutuhan liburan Anda.
                </p>
              </div>
            </div>

            <div className="col-auto md:d-none">
              <a
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                Lihat Semua Layanan
                <div className="icon-arrow-top-right ml-15" />
              </a>
            </div>
          </div>

          <div className="relative pt-40 sm:pt-20">
            <PopularDestinations />
          </div>
        </div>
      </section> */}

      {/* <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20">
            <AddBanner />
          </div>
        </div>
      </section> */}

      {/* <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-10 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Recommended</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
            <div className="col-sm-auto">
              <SelectFilter />
            </div>
          </div>

          <div className="relative overflow-hidden pt-40 sm:pt-20 js-section-slider item_gap-x30">
            <Hotels />
          </div>
        </div>
      </section> */}

      {/* <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20 justify-between">
            <BlockGuide />
          </div>
        </div>
      </section> */}

      {/* <section className="layout-pt-lg layout-pb-lg bg-blue-2">
        <div className="container">
          <div className="row y-gap-40 justify-between">
            <div className="col-xl-5 col-lg-6" data-aos="fade-up">
              <TestimonialLeftCol />
            </div>

            <div className="col-lg-6">
              <div
                className="overflow-hidden js-testimonials-slider-3"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Get inspiration for your next trip
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames
                </p>
              </div>
            </div>
          </div>
          <div className="row y-gap-30 pt-40">
            <Blog />
          </div>
        </div>
      </section> */}

      {/* <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Destinations we love</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
          </div>

          <div className="tabs -pills pt-40 js-tabs">
            <Destinations />
          </div>
        </div>
      </section> */}

      {/* <CallToActions /> */}


      <DefaultFooter />
    </>
  );
};

export default dynamic(() => Promise.resolve(Home_1), { ssr: false });
