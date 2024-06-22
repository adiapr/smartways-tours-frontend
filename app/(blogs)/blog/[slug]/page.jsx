import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/header/default-header";
import DefaultFooter from "@/components/footer/default";
import LocationTopBar from "@/components/common/LocationTopBar";
import RelatedBlog from "@/components/blog/blog-details/RelatedBlog";
import blogsData from "@/data/blogs";
import DetailsContent from "@/components/blog/blog-details/DetailsContent";
import FormReply from "@/components/blog/blog-details/FormReply";
import TopComment from "@/components/blog/blog-details/TopComment";
import BlogNavigator from "@/components/blog/blog-details/BlogNavigator";
import Comments from "@/components/blog/blog-details/Comments";
import Content from "@/components/blog/blog-details/Content";
import JoinGroup from "@/components/home/home-1/JoinGroup";

export const metadata = {
    title: "Artikel | Smartway.tours",
    description: "Smartway adalah travel agen profesional yang berdiri sejak 2016 dibawah naungan PT. Bagus Bahagia Bersama (BBB Group).",
  };

const BlogDetail = ({ params }) => {
    // console.log(params.slug)

  return (
    <>
      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />

      <Content slug={params.slug} />

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Artikel Terkait</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Lihat artikel lainnya
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40">
            <RelatedBlog />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Related Content */}

      {/* <CallToActions /> */}
      <JoinGroup />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default BlogDetail;
