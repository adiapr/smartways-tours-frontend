import CallToActions from "@/components/common/CallToActions";
import Header11 from "@/components/header/header-11";
import DefaultFooter from "@/components/footer/default";
import TopHeaderFilter from "@/components/tour-list/tour-list-v2/TopHeaderFilter";
import TourMain from "@/components/tour-list/tour-list-v2/TourMain";

export const metadata = {
  title: "Paket Wisata | Smartway.tours",
  description: "Smartway adalah travel agen profesional yang berdiri sejak 2016 dibawah naungan PT. Bagus Bahagia Bersama (BBB Group).",
};

const Index = () => {
  return (
    <>
      <div className="header-margin"></div>
      <Header11 />
      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30">
            <TourMain />
          </div>
        </div>
      </section>
      <CallToActions />
      <DefaultFooter />
    </>
  );
};

export default Index;
