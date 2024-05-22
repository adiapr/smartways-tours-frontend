import dynamic from "next/dynamic";
import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/header/default-header";
import DefaultFooter from "@/components/footer/default";
import WhyChoose from "@/components/block/BlockGuide";
import Address from "@/components/block/Address";
import Social from "@/components/common/social/Social";
import ContactForm from "@/components/common/ContactForm";
import LocationTopBar from "@/components/common/LocationTopBar";

export const metadata = {
  title: "Contact | Smartway adalah travel agen profesional yang berdiri sejak 2016 dibawah naungan PT. Bagus Bahagia Bersama (BBB Group).",
  description: "Smartway adalah travel agen profesional yang berdiri sejak 2016 dibawah naungan PT. Bagus Bahagia Bersama (BBB Group)",
};

const Contact = () => {
  return (
    <>
      {/* End Page Title */}

      {/* <div className="header-margin"></div> */}
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      <LocationTopBar />
      {/* End location top bar section */}

      <div className="map-outer">
        <div className="map-canvas">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d561.1774017422842!2d112.75858899371022!3d-8.006453339119945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6259ce5e73b73%3A0x8266895c3ab24e99!2sSmartway%20Indonesia%20Tours%20%7C%20Open%20trip%20Bromo%2C%20Kawah%20Ijen%2C%20Bali%2C%20Lombok%2C%20Belitung!5e0!3m2!1sid!2sid!4v1716394160805!5m2!1sid!2sid"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      {/* End map section */}

      <section className="relative container">
        <div className="row justify-end">
          <div className="col-xl-5 col-lg-7">
            <div className="map-form px-40 pt-40 pb-50 lg:px-30 lg:py-30 md:px-24 md:py-24 bg-white rounded-4 shadow-4">
              <div className="text-22 fw-500">Kirimi kami pesan</div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      {/* End contact section form */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row x-gap-80 y-gap-20 justify-between">
            <div className="col-12">
              <div className="text-30 sm:text-24 fw-600">Kontak Kami</div>
            </div>

            <Address />

            <div className="col-auto">
              <div className="text-14 text-light-1">
                Ikuti sosia mediai kami
              </div>
              <div className="d-flex x-gap-20 items-center mt-10">
                <Social />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Address Section */}

      <section className="layout-pt-lg layout-pb-lg bg-blue-2">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Kenapa memilih kami?</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-40 justify-between pt-50">
            <WhyChoose />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Why Choose Us section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Contact), { ssr: false });
