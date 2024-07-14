import Link from "next/link";
import footerDataContent from "../../../data/footerContent";
import DOMPurify from "dompurify";
import Image from "next/image";
// import DOMPurify from 'dompurify';

const FooterContent = () => {
  return (
    <>
        {/* Sosmed  */}
        <div className="col-xl-2 col-lg-4 col-sm-6" >
          <h5 className="text-16 fw-500 mb-30 fw-bold">Smartway Indonesia</h5>
          <div className="d-flex y-gap-10 flex-column">
              <Link target="_blank" href={'https://www.instagram.com/smartway.id/?hl=id'}>
                <i className="bi bi-instagram"></i> Instagram
              </Link>
          </div>
          <div className="d-flex y-gap-10 flex-column">
              <Link target="_blank" href={'https://www.tiktok.com/@smartway.id'}>
                <i className="bi bi-tiktok"></i> Tiktok
              </Link>
          </div>
          <div className="d-flex y-gap-10 flex-column">
              <Link target="_blank" href={'https://www.facebook.com/smartway.id'}>
                <i className="bi bi-facebook"></i> Facebook
              </Link>
          </div>
          <div className="d-flex y-gap-10 flex-column">
              <Link target="_blank" href={'https://www.youtube.com/c/SmartwayIndonesiaTours/playlists'}>
                <i className="bi bi-youtube"></i> Youtube
              </Link>
          </div>

          <h5 className="text-16 fw-500 mb-30 mt-40 fw-bold">Smartway Internasional</h5>
          
          <div className="d-flex y-gap-10 flex-column">
              <Link target="_blank" href={'https://www.instagram.com/smartway.tours'}>
                <i className="bi bi-instagram"></i> Instagram
              </Link>
          </div>
          <div className="d-flex y-gap-10 flex-column">
              <Link target="_blank" href={'https://www.tiktok.com/@smartway.tours'}>
                <i className="bi bi-tiktok"></i> Tiktok
              </Link>
          </div>
          <div className="d-flex y-gap-10 flex-column">
              <Link target="_blank" href={'https://www.facebook.com/profile.php?id=61561357078177'}>
                <i className="bi bi-facebook"></i> Facebook
              </Link>
          </div>
          <div className="d-flex y-gap-10 flex-column">
              <Link target="_blank" href={'https://www.youtube.com/c/SmartwayIndonesiaTours/videos'}>
                <i className="bi bi-youtube"></i> Youtube
              </Link>
          </div>
        </div>

        {/* Sosmed  */}
        <div className="col-xl-2 col-lg-4 col-sm-6" >
          <h5 className="text-16 fw-500 mb-30 fw-bold">Tentang</h5>
          <div className="d-flex y-gap-10 flex-column">
              <Link target="_blank" href={'/about'}>
                Tentang Kami
              </Link>
          </div>
          <div className="d-flex y-gap-10 flex-column">
              <Link target="_blank" href={'#'}>
                FAQ
              </Link>
          </div>
          <div className="d-flex y-gap-10 flex-column">
              <Link target="_blank" href={'#'}>
                Karir
              </Link>
          </div>
          <div className="row">
              <div className="col-12">
                <b>Penghargaan</b>
              </div>
              <div className="col-12">
                <Image src={'/img/penghargaan/penghargaan.jpg'} width={200} height={100} />
              </div>
              {/* <div className="col-4">
                  <Image src={'/img/penghargaan/ta2020.png'} width={35} height={35} />
              </div>
              <div className="col-4">
                  <Image src={'/img/penghargaan/ta2022.gif'} width={90} height={90} />
              </div>
              <div className="col-4">
                  <Image src={'/img/penghargaan/ta2023.gif'} width={90} height={90} />
              </div> */}
          </div>
        </div>
    </>
  );
};

export default FooterContent;
