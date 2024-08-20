import React from 'react'
import Header1 from "../../components/header/header-1";
import Hero2 from "../../components/hero/hero-karir";
import HelpBlock from "../../components/block/HelpCareer";
import JoinGroup from "../../components/home/home-1/JoinGroup";
import DefaultFooter from "../../components/footer/default";
import Image from 'next/image';

export const metadata = {
  title: "Karir | Smartway.tours",
  description: "Temukan karir impianmu dengan budaya kerja yang Gen-Z banget bersama Smartway!",
};

function Karir() {
  const posisi = [
    {
      id: 1,
      title: 'Tour leader (English speaker)',
      subtitle: 'Buat kamu yang pengen kerja sambil jalan-jalan dan ketemu banyak orang dari Sabang sampai Merauke, bahkan Eropa, Amerika, Asia dan negara lain yang belum pernah kamu denger sebelumnya. Kamu bisa temuin itu semua di posisi kerja ini.' 
    },
    {
      id: 2,
      title: 'Sosial Media Marketing',
      subtitle: 'Kamu demen maen sosmed dan bisa bikin postingan yang ningkatin engagement rate. Ini posisi kerja yang bagus buat kamu belajar tentang algoritma social media.' 
    },
    {
      id: 3,
      title: 'Fotografer dan videographer',
      subtitle: 'Buat kamu yang suka motret dan bikin video, kamu bisa apply posisi ini nih!' 
    },
    {
      id: 4,
      title: 'Content creator',
      subtitle: 'Kamu jago edit video dan bikin konten yang FYP? Daftar untuk posisi ini aja!' 
    },
  ];

  return (
    <>
        <Header1 />
        <Hero2 />
        <section className="layout-pt-md">
          <div className="container">
            <div className="row justify-center text-center">
              <div className="col-xl-6 col-lg-8 col-md-10">
                <div className="sectionTitle -md">
                  <h2 className="sectionTitle__title">
                    Kenapa harus bergabung dengan Smartway?
                  </h2>
                  {/* <p className=" sectionTitle__text mt-5 sm:mt-0">
                    Lorem ipsum is placeholder text commonly used in site.
                  </p> */}
                </div>
                {/* End .sectiontitle */}

              </div>
            </div>
            {/* End .row */}

            <div className="row y-gap-30 pt-60 lg:pt-40">
              <HelpBlock />
            </div>
            {/* End .row */}
          </div>
        </section>
        <div className="container">
          <div className="card mt-60">
            <div className="card-body bg-primary rounded-2 text-center text-white py-30">
              <h1>Gimana asik banget kan?</h1>
              <p className='text-white'>Buruan daftar sekarang! Sebelum kesempatan ini diambil orang.</p>
            </div>
          </div>
          <div className="row mt-50 mb-50">
            <div className="col-md-6">
              <h3 className="fw-bold">
                Posisi yang kami butuhkan :
              </h3>
              <ul className='mt-10'>
                {
                  posisi.map((item) => (
                    <li key={item.id} className='mt-10'>
                      <p className="fw-bold text-black  text-20">
                        <i className="bi bi-check-circle-fill text-primary mr-10"></i> {item.title}
                      </p>
                      <p className="ml-40">
                        {item.subtitle}
                      </p>
                    </li>
                  ))
                }
                
              </ul>
            </div>
            <div className="col-md-6">
              <div
                className="col-md-12"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div
                  className="rounded-4"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/img/masthead/2/3.png')`,
                    backgroundSize:'cover'
                  }}
                >
                  <div className="ctaCard__content py-20 px-20 lg:py-30 lg:px-30">
                      <>
                        <div className="text-20 fw-bold text-white mb-10">
                          <h3>
                            Submit CV-mu sekarang!
                          </h3>
                          <p className='text-white'>
                            Siapa tau dipanggil interview.
                          </p>
                          <hr />
                        </div>
                        <form action="" method="post">
                          <div className="form-group mt-2">
                            <label htmlFor="" className="font-bold text-white">Nama Lengkap</label>
                            <input type="text" name="name" id="" className="form-control bg-white" placeholder='Masukkan nama lengkap anda...'/>
                          </div>
                          <div className="form-group mt-2">
                            <label htmlFor="" className="font-bold text-white">No Whatsapp</label>
                            <input type="nomber" name="phone" id="" className="form-control bg-white" placeholder='Masukkan no whatsapp yang aktif...'/>
                          </div>
                          <div className="form-group mt-2">
                            <label htmlFor="" className="font-bold text-white">Email</label>
                            <input type="email" name="email" id="" className="form-control bg-white" placeholder='Masukkan email anda...'/>
                          </div>
                          <div className="form-group mt-2">
                            <label htmlFor="" className="font-bold text-white">Posisi yang dilamar</label>
                            <select className='form-control' name="psition" id="">
                              <option value="">- Pilih posisi yang dilamar -</option>
                              {
                                posisi.map((item) => (
                                  <option value={item.title} key={item.id}>{item.title}</option>
                                ))
                              }
                            </select>
                          </div>
                          <div className="form-group mt-2">
                            <label htmlFor="" className="font-bold text-white">Akun Tiktok atau Instagram</label>
                            <input type="text" name="sosmed" id="" className="form-control bg-white" placeholder='Masukkan username tiktok/instagram'/>
                          </div>
                          <div className="form-group mt-2">
                            <label htmlFor="" className="font-bold text-white">Kenapa kamu cocok jadi tim Smartway</label>
                            <textarea name="description" id="" className="form-control" placeholder='Jelaskan dengan bahasa santaimu saja...'></textarea>
                          </div>
                          <div className="form-group mt-2">
                            <label htmlFor="" className="font-bold text-white">Upload CV kamu dalam format .pdf</label>
                            <input type="file" name="cv" id="" className="form-control" />
                          </div>
                          <button type="submit" className="btn btn-primary w-100 mt-20">Kirim Lamaran</button>
                        </form>
                      </>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <JoinGroup />
        <DefaultFooter />
    </>
  )
}

export default Karir