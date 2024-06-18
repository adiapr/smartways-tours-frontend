import CallToActions from "@/components/common/CallToActions";
import Header11 from "@/components/header/header-11";
import DefaultFooter from "@/components/footer/default";
import TopHeaderFilter from "@/components/tour-list/tour-list-v2/TopHeaderFilter";
import TourProperties from "@/components/tour-list/tour-list-v2/TourProperties";
import Pagination from "@/components/tour-list/common/Pagination";
import Sidebar from "@/components/tour-list/tour-list-v2/Sidebar";

export const metadata = {
  title: "Paket Wisata | Smartway.tours",
  description: "Smartway adalah travel agen profesional yang berdiri sejak 2016 dibawah naungan PT. Bagus Bahagia Bersama (BBB Group).",
};

const index = () => {
  return (
    <>
      <div className="header-margin"></div>
      <Header11 />
      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-3">
              <aside className="sidebar y-gap-40 xl:d-none">
                <Sidebar />
              </aside>
              <div
                className="offcanvas offcanvas-start"
                tabIndex="-1"
                id="listingSidebar"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasLabel">
                    Filter Tours
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <aside className="sidebar y-gap-40  xl:d-block">
                    <Sidebar />
                  </aside>
                </div>
              </div>
            </div>
            <div className="col-xl-9 ">
              <TopHeaderFilter />
              <div className="mt-30"></div>
              <div className="row y-gap-30">
                <TourProperties />
              </div>
              {/* <Pagination /> */}
            </div>
          </div>
        </div>
      </section>
      <CallToActions />
      <DefaultFooter />
    </>
  );
};

export default index;