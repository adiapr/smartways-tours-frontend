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

export const metadata = {
  title: "Artikel | Smartway.tours",
  description: "Smartway adalah travel agen profesional yang berdiri sejak 2016 dibawah naungan PT. Bagus Bahagia Bersama (BBB Group).",
};

const BlogListV2 = () => {
  return (
    <>
      {/* <div className="header-margin"></div> */}
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      <LocationTopBar />
      {/* End location top bar section */}

      <section className="layout-pt-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Artikel</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Dapatkan artikel menarik sebagai referensi wisata anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End title */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30 justify-between">
            <div className="col-xl-8">
              <div className="row y-gap-30">
                <Blog2 />
              </div>
              {/* End .row */}
              {/* <BlogPagination /> */}
            </div>
            {/* End .col */}

            <div className="col-xl-3">
              <BlogSidebar />
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>

      {/* <CallToActions /> */}
      <JoinGroup />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default BlogListV2;
