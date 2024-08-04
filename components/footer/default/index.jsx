import Image from "next/image";
import AppButton from "./AppButton";
import ContactInfo from "./ContactInfo";
import Copyright from "./Copyright";
import FooterContent from "./FooterContent";
import Tentang from "./Contact";
import Contact from "./Contact";
import Payment from "./Payment";

const index = () => {
  return (
    <footer className="footer -type-1" style={{ zIndex: '999' }}>
      <div className="btn btn-success" style={{ position:'fixed', bottom:'30px', right:'16px' }}>
        <a href="https://wa.me/6282155144449" target="_blank">
          <Image src={'/img/icons/Whatsapp.svg'} width={18} height={18} /> Hubungi Kami
        </a>
      </div>
      <div className="container">
        <div className="pt-60 pb-60">
          <div className="row y-gap-40 justify-between xl:justify-start">
            <div className=" col-lg-4 col-sm-6">
              <h2 className="text-16 fw-bold mb-30">
                <Image src={'/img/logo/logo_tagline_hitam.png'} width={200} height={100} />
              </h2>
              <Contact />
            </div>

              <FooterContent />

            <div className="col-lg-3 col-sm-6">
              <h5 className="text-16 fw-bold mb-30">Partner Pembayaran</h5>
              {/* <AppButton /> */}
              <Payment />
            </div>
          </div>
        </div>

        {/* <p className="mb-4">
        <b>Smartway</b> adalah travel agen profesional yang berdiri sejak 2016 dibawah naungan 
              <b>PT. Bagus Bahagia Bersama (BBB Group)</b>. Saat ini kami melayani tur dalam negeri: 
              Jawa Timur, Bali, Lombok, Belitung dan baru saja melakukan expansi tur ke luar
              negeri dengan menjadikan Jepang sebagai destinasi awal
        </p> */}
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
