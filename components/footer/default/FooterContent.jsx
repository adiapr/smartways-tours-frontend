import Link from "next/link";
import footerDataContent from "../../../data/footerContent";
import DOMPurify from "dompurify";
// import DOMPurify from 'dompurify';

const FooterContent = () => {
  return (
    <>
        {/* Sosmed  */}
        <div className="col-xl-2 col-lg-4 col-sm-6" >
          <h5 className="text-16 fw-500 mb-30 fw-bold">Sosial Media</h5>
          <div className="d-flex y-gap-10 flex-column">
              <Link href={'https://www.facebook.com/smartway.id'}>
                <i className="bi bi-facebook"></i> Facebook
              </Link>
          </div>
          <div className="d-flex y-gap-10 flex-column">
              <Link href={'https://www.instagram.com/smartway.id/?hl=id'}>
                <i className="bi bi-instagram"></i> Instagram
              </Link>
          </div>
          <div className="d-flex y-gap-10 flex-column">
              <Link href={'https://www.tiktok.com/@smartway.id'}>
                <i className="bi bi-tiktok"></i> Tiktok
              </Link>
          </div>
          <div className="d-flex y-gap-10 flex-column">
              <Link href={'https://www.youtube.com/c/SmartwayIndonesiaTours/videos'}>
                <i className="bi bi-youtube"></i> Youtube
              </Link>
          </div>
        </div>

        {/* Sosmed  */}
        <div className="col-xl-2 col-lg-4 col-sm-6" >
          <h5 className="text-16 fw-500 mb-30 fw-bold">Tentang</h5>
          <div className="d-flex y-gap-10 flex-column">
              <Link href={'/about'}>
                Tentang Kami
              </Link>
          </div>
          <div className="d-flex y-gap-10 flex-column">
              <Link href={'#'}>
                FAQ
              </Link>
          </div>
          <div className="d-flex y-gap-10 flex-column">
              <Link href={'#'}>
                Karir
              </Link>
          </div>
        </div>
    </>
  );
};

export default FooterContent;
