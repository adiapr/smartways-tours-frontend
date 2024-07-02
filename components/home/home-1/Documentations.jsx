
'use client'
import Link from "next/link";
import Image from "next/image";

export default function Documentation() {
  const cardData = [
    {
      id: 1,
      href: `https://www.instagram.com/p/C8b7p00pg42/?img_index=1`,
      imgSrc: "/img/experience/1.jpg",
      description: "Di balik senyum anak-anak yang bahagia, ada cinta tanpa syarat dari seorang ibu 🤗💗"
    },
    {
      id: 2,
      href: `https://www.instagram.com/p/C8UJcGsJMlQ/?img_index=4`,
      imgSrc: "/img/experience/2.jpg",
      description: "Kami, dua pahlawan superhero ini tak akan pernah lupa tentang petualangan seru di Bromo bersama Mama dan Papa, terimakasih yaa atas kenangan tak terlupakan ini. Kami sayang Mama dan Papa 🥺🥰💗"
    },
    {
      id: 3,
      href: `https://www.instagram.com/p/Cs04DioSqua/?img_index=1`,
      imgSrc: "/img/experience/3.jpg",
      description: "I am blessed #postcardfrombromo Exclusive photo documentation by "
    },
    {
      id: 4,
      href: `https://www.instagram.com/p/Cs3cDVyS2am/?img_index=1`,
      imgSrc: "/img/experience/4.jpg",
      description: "She is water, powerful enough to drown you soft enough to cleanse you deep enough to save you"
    },
    {
      id: 5,
      href: `https://www.instagram.com/p/CqkvQ2Ayb8m/?img_index=1`,
      imgSrc: "/img/experience/5.jpg",
      description: "Exclusive photo documentation by "
    },
    {
      id: 6,
      href: "https://www.instagram.com/p/CnDg4ZOyGYX/?img_index=2",
      imgSrc: "/img/experience/6.jpg",
      description: "Laugh.  Love.  Family"
    },
    {
      id: 7,
      href: "https://www.instagram.com/p/C8XMbR7Sme-/?img_index=1",
      imgSrc: "/img/experience/7.jpg",
      description: "Liburan ke Jepang bareng keluarga, vibes-nya dapet banget! 🤩 Sensoji Temple + jalan-jalan di rumah tradisional Kyoto = pengalaman yang ga bakal dilupain. Seru, hangat, dan banyak tawa! 🇯🇵✨"
    },
    {
      id: 8,
      href: "https://www.instagram.com/p/C8Uhh_oSAm0/?img_index=1",
      imgSrc: "/img/experience/8.jpg",
      description: "Liburan ke Jepang bareng moms seru banget, berasa kaya jalan sama bestie sendiri! Hehe.. akhirnya mimpi ke Jepang foto di Sensoji temple terwujud!"
    },
    {
      id: 9,
      href: "https://www.instagram.com/p/C8kPuAxSXjr/?img_index=2",
      imgSrc: "/img/experience/9.jpg",
      description: "Spring vibes on point! 🌸✨ Mix and match hijab, flanel, rok, and boots for that ultimate Japanese sakura season look. Stay chic and comfy, bestie! 💖👗🧣👢"
    },
    {
      id: 10,
      href: "https://www.instagram.com/p/C7P84uah_rA/?img_index=1",
      imgSrc: "/img/experience/10.jpg",
      description: "Gimana ceritanya kalo lagi jalan-jalan terus nemu tempat jajan yang instagramable kaya gini? Ya fotonya dimaksimalin lah. 😅🗼🇯🇵"
    },
    {
      id: 11,
      href: "https://www.instagram.com/p/C7NoquCPSTf/?img_index=2",
      imgSrc: "/img/experience/11.jpg",
      description: "Kalo tempat jajannya aja udah instagramable gini. Sayang banget kalo fotonya ga dimaksimalin! 😅🗼🇯🇵"
    },
    {
      id: 12,
      href: "",
      imgSrc: "/img/experience/12.jpg",
      description: "Berasa vibes desa banget! Seru abis foto bareng geng di kaki Gunung Fuji, sampai lupa waktu! 🤩📸✨"
    },
  ]

  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + '...';
  };
  return (
    <>
    <section className="pt-40">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="row x-gap-20  items-center">
                <div className="col-auto">
                  <h1 className="text-30 sm:text-25 fw-600">Smartway Experience</h1>
                </div>
              </div>
              <div className="row x-gap-20 y-gap-20 items-center">
                <div className="col-auto">
                  <div className="d-flex items-center text-15 text-light-1">
                    <i className="icon-location-2 text-16 mr-5" />
                    Dokumentasi perjalanan kami
                  </div>
                </div>
                <div className="col-auto">
                  
                </div>
              </div>
            </div>

            <div className="col-auto">
              <div className="row x-gap-15 y-gap-15 items-center">
                <div className="col-auto">
                  <div className="text-14">
                  </div>
                </div>
                <div className="col-auto">
                  {/* <Link
                    href="/booking-page"
                    className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                  >
                    Lihat Tempat <div className="icon-arrow-top-right ml-15" />
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-20">
            {cardData.map(card => (
              <div key={card.id} className="col-md-2 px-1 py-1 col-6">
                <Link
                  href={card.href}
                  target="_blank"
                  className="blogCard -type-1 d-block "
                >
                  <div className="citiesCard -type-1 d-block rounded-4">
                    <div className="citiesCard__image ratio ratio-3:4">
                      <Image
                        width={400}
                        height={300}
                        className="img-ratio js-lazy"
                        style={{ aspectRatio:'9/16' }}
                        src={card.imgSrc}
                        alt="image"
                      />
                      <div className="citiesCard__content d-flex flex-column justify-between text-center pt-30 pb-20 px-20">
                        <div className="citiesCard__bg" />
                        <div className="citiesCard__top">
                          <div className="text-14 text-white" style={{ fontSize:'8px' }}>
                            {truncateString(card.description, 100)}
                          </div>
                        </div>
                        <div className="citiesCard__bottom">
                          <button className="button col-12 py-10 -blue-1 bg-white text-dark-1">
                            <i className="bi bi-instagram"></i> &nbsp;Lihat Detail
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
