import React from "react";
import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/header/default-header";
import DefaultFooter from "@/components/footer/default";
import LocationTopBar from "@/components/common/LocationTopBar";
import Blog2 from "@/components/blog/Blog2";
import BlogSidebar from "@/components/blog/blog-sidebar";
import BlogPagination from "@/components/blog/BlogPagination";
import JoinGroup from "@/components/home/home-1/JoinGroup";
import Blog3 from "@/components/blog/Blog3";
import Blog4 from "@/components/blog/Blog4";
import Blog1 from "@/components/blog/Blog1";
// import Header1 from "@/components/header/default-header";
import Header1 from "@/components/header/header-1";
import CustomSlider from "@/components/hero/hero-1/CustomSlider";
import Documentation from "@/components/home/home-1/Documentations";

export const metadata = {
  title: "Artikel | Smartway.tours",
  description: "Smartway adalah travel agen profesional yang berdiri sejak 2016 dibawah naungan PT. Bagus Bahagia Bersama (BBB Group).",
};

const BlogListV2 = () => {
  return (
    <>
      {/* <div className="header-margin"></div> */}
      {/* header top margin */}

      <Header1 /> 
      <section className="masthead -type-6">
        <div className="masthead__bg bg-dark-3">
          <img alt="image" src="/img/backgrounds/discount.jpg" className="js-lazy" />
        </div>

        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-9">
              <div className="text-center">
                <h1
                  className="text-60 lg:text-40 md:text-30 text-white"
                  data-aos="fade-up"
                >
                  Artikel
                </h1>
                <p
                  className="text-white mt-5"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Temukan tempat menakjubkan dengan penawaran eksklusif dan Dapatkan artikel menarik sebagai referensi wisata kamu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30 justify-between">
            <div className="col-xl-12">
              <div className="row">
                <h1>Artikel Terbaru</h1>
                <Blog2 />
              </div>
            </div>
          </div>

          <Documentation />
        </div>
      </section>

      <JoinGroup />
      <DefaultFooter />
    </>
  );
};

export default BlogListV2;
