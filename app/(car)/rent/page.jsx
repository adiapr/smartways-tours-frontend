import CallToActions from "@/components/common/CallToActions";
import Header11 from "@/components/header/header-11";
import DefaultFooter from "@/components/footer/default";
import MainFilterSearchBox from "@/components/car-list/car-list-v1/MainFilterSearchBox";
import TopHeaderFilter from "@/components/car-list/car-list-v1/TopHeaderFilter";
import Pagination from "@/components/car-list/common/Pagination";
import Sidebar from "@/components/car-list/car-list-v1/Sidebar";
import CarPropertes from "@/components/car-list/car-list-v1/CarPropertes";

export const metadata = {
  title: "Rental Mobil | Smartway.tours",
  description: "Smartway adalah travel agen profesional yang berdiri sejak 2016 dibawah naungan PT. Bagus Bahagia Bersama (BBB Group).",
};

const index = () => {
  return (
    <>
      <div className="header-margin"></div>
      <Header11 />
      <section className="pt-60">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <CarPropertes />
        </div>
      </section>

      <CallToActions />
      <DefaultFooter />
    </>
  );
};

export default index;
