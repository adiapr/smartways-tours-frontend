import dynamic from "next/dynamic";
import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/header/default-header";
import DefaultFooter from "@/components/footer/default";
import WhyChoose from "@/components/block/BlockGuide";
import Block1 from "@/components/about/Block1";
import Image from "next/image";
import Counter from "@/components/counter/Counter";
import Team1 from "@/components/team/Team1";
import Testimonial from "@/components/testimonial/Testimonial";
import Counter2 from "@/components/counter/Counter2";
import Brand from "@/components/brand/Brand";
import JoinGroup from "@/components/home/home-1/JoinGroup";
import WhyChooseUs from "@/components/home/home-1/WhyChooseus";
import Link from "next/link";
import Menu from "./Menu";

export const metadata = {
  title: "About | Smartway adalah travel agen profesional yang berdiri sejak 2016 dibawah naungan PT. Bagus Bahagia Bersama (BBB Group).",
  description: "GoTrip - Travel & Tour React NextJS Template",
};

const About = () => {
  return (
    <>
      <div className="header-margin"></div>
      <DefaultHeader />
      <div className="row">
        <div className="col-md-3">
          <div className="p-3">
            <Menu />
          </div>
        </div>
        <div className="col-md-9">
          <section className="section-bg layout-pt-lg layout-pb-lg">
            <div className="section-bg__item col-12" id="tentang">
              {/* <Image
                width={1920}
                height={400}
                src="/img/pages/about/1.png"
                alt="image"
                priority
              /> */}
            </div>
            {/* End section-bg__item */}

            <div className="container text-black" >
              <div className="row justify-center text-center">
                <div className="col-xl-6 col-lg-8 col-md-10">
                  <h1 className="text-40 md:text-25 fw-600 text-black">
                    Smartway Tours Indonesia
                  </h1>
                </div>
                <div className="col-12">
                  <p className="text-black mt-15">
                    Smartway Indonesia adalah yang terdepan di antara Perusahaan Manajemen Destinasi (DMC) online, yang berdedikasi untuk melampaui harapan pelanggan kami. Salah satu prestasi terkemuka kami adalah diakui sebagai yang terbaik dari yang terbaik Travelers' Choice yang dinilai oleh TripAdvisor, sebagai bukti komitmen kami terhadap keunggulan. Dengan pemahaman mendalam tentang kepulauan Indonesia, kami mengkhususkan diri dalam menciptakan perjalanan tak terlupakan yang menggabungkan pemkamungan yang memukau, imersi budaya yang dalam, dan rasa petualangan. Didukung oleh tim profesional dan jaringan komprehensif di seluruh negeri, Smartway Indonesia dilengkapi untuk mewujudkan impian perjalanan apa pun.
                  </p>
                  <p className="text-black mt-15">
                    Komitmen kami melampaui penyediaan layanan yang luar biasa; kami bersemangat untuk melibatkan komunitas lokal dalam usaha kami, memastikan bahwa perjalanan kami memberikan kontribusi positif bagi orang-orang yang tanahnya kami jelajahi. Kami percaya dalam menciptakan pengalaman yang tidak hanya menyenangkan klien kami tetapi juga meningkatkan kesejahteraan penduduk setempat. Melalui perjalanan kami, kami tidak hanya menyaksikan pemkamungan yang luar biasa tetapi juga bertujuan untuk memberikan dampak yang berarti bagi komunitas yang kami kunjungi. Pendekatan kami berakar dalam perhatian yang tulus, kolaborasi, dan berbagi, membina budaya saling menghormati dan kemitraan.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="container layout-pt-lg layout-pb-md" id="ceo">
            <div className="row">
              <div className="col-md-3">
                <Image src={'/img/people/ceo.png'} width={300} height={300} />
              </div>
              <div className="col-md-9">
                <p>
                  Assalamualaikum Wr. Wb. Salam hangat dan salam kenal untuk pelanggan setia Smartway dimana pun teman-teman berada.
                </p>
                <p>
                  Di kesempatan kali ini saya ingin menyampaikan rasa terima kasih yang sebanyak-banyaknya atas kepercayaan teman-teman semua, sehingga
                  Smartway berada pada titik dimana saat ini kami berada.
                </p>
                <p>
                  Tanpa kepercayaan teman-teman semua, kami bukanlah siapa-siapa.
                </p>
                <p>
                  7 tahun sudah kami bertumbuh melayani lebih dari 20.000 pelanggan di semua destinasi wisata yang tersebar di Indonesia, khusushya Jawa Timur, Bali, Lombok, dan Belitung. Ada banyak tantangan dan pelajaran dari setiap proses yang kami lalui. Untuk itu, izinkan kami untuk terus bertumbuh pada proses selanjutnya. Tegur kami jika kami kurang dalam melayani teman-teman, dukung kami jika teman-teman puas dengan pelayanan yang kami berikan. Bintang 5 ya kak!
                </p>
                <br />
                <p>
                  Salam sehat luar biasa,
                </p>
                <p className="fw-bold">
                  Fikri Bagus Zakaria, S.Ikom, M.M.
                </p>
                <p>
                  Owner & CEO
                </p>
              </div>
            </div>
          </section>

          <section className="layout-pt-lg layout-pb-md" id="kenapa">
            <WhyChooseUs />
          </section>

          <section className="pt-60">
            <div className="container">
              <div className="border-bottom-light pb-40">
                <div className="row y-gap-30 justify-center text-center">
                  <Counter />
                </div>
              </div>
            </div>
          </section>

          <section className="layout-pt-lg layout-pb-lg" id="tim">
            <div className="container">
              <div className="row y-gap-20 justify-between items-end">
                <div className="col-auto">
                  <div className="sectionTitle -md">
                    <h2 className="sectionTitle__title">Tim Kita</h2>
                    <p className=" sectionTitle__text mt-5 sm:mt-0">
                      Tim Profesional dari Smartway.tours
                    </p>
                  </div>
                </div>
              </div>
              <div className=" pt-4 js-section-slider">
                <div className="item_gap-x30">
                  <Image src={'/img/people/team.jpg'} width={1000} height={900} style={{ width: '100%', borderRadius: '10px' }} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <JoinGroup />
      <DefaultFooter />
    </>
  );
};

export default About;
