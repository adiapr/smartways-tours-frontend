import AppButton from "./AppButton";
import ContactInfo from "./ContactInfo";
import Copyright from "./Copyright";
import FooterContent from "./FooterContent";

const index = () => {
  return (
    <footer className="footer -type-1">
      <div className="container">
        <div className="pt-60 pb-60">
          <div className="row y-gap-40 justify-between xl:justify-start">
            <div className="col-xl-2 col-lg-4 col-sm-6">
              <h5 className="text-16 fw-500 mb-30">Contact Us</h5>
              <ContactInfo />
            </div>
            {/* End col */}

            <FooterContent />
            {/* End footer menu content */}

            {/* <div className="col-xl-2 col-lg-4 col-sm-6">
              <h5 className="text-16 fw-bold mb-30">Smartway</h5>
              <AppButton />
              
            </div> */}
          </div>
        </div>
        {/* End footer top */}

        <p className="mb-4">
        <b>Smartway</b> adalah travel agen profesional yang berdiri sejak 2016 dibawah naungan 
              <b>PT. Bagus Bahagia Bersama (BBB Group)</b>. Saat ini kami melayani tur dalam negeri: 
              Jawa Timur, Bali, Lombok, Belitung dan baru saja melakukan expansi tur ke luar
              negeri dengan menjadikan Jepang sebagai destinasi awal
        </p>
        <div className="py-20 border-top-light">
          <Copyright />
        </div>
        {/* End footer-copyright */}
      </div>
      {/* End container */}
    </footer>
  );
};

export default index;
