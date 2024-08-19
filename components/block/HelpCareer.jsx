import Image from "next/image";

const HelpBlock = () => {
  const helpBlockContent = [
    {
      id: 1,
      icon: "/img/pages/help/icons/1.svg",
      title: "100% working remote",
      text: `Budaya kerja Smartway didesain untuk dapat dikerjakan secara remote yang berorientasi pada hasil. Yup, kamu bebas kerja darimana aja!`,
    },
    {
      id: 2,
      icon: "/img/pages/help/icons/2.svg",
      title: "Ngutamain skill",
      text: `Smartway lebih mementingkan skill dan pengalaman dibanding gelar dan prestasi akademik.`,
    },
    {
      id: 3,
      icon: "/img/pages/help/icons/3.svg",
      title: "Kerja sambil jalan-jalan",
      text: `Buat anak Smartway, kerja sambil jalan-jalan ke dalam dan luar negeri. Bisa banget!!`,
    },
    {
      id: 4,
      icon: "/img/pages/help/icons/4.svg",
      title: "Dapet temen WNA",
      text: `Buat kamu yang mau dapet pengalaman dan temen internasional. Bisa banget kamu dapetin karena tamu kami banyak banget warga negara asing!`,
    },
    {
      id: 5,
      icon: "/img/pages/help/icons/5.svg",
      title: "Pelatihan gratis.",
      text: `Pelatihan gratis bakal kamu dapetin setiap bulan. Kamu bisa dapet pengetahuan, wawasan dan skill baru.`,
    },
    // {
    //   id: 6,
    //   icon: "/img/pages/help/icons/6.svg",
    //   title: "Value Packs",
    //   text: `Lorem ipsum is placeholder text commonly used in site.`,
    // },
  ];
  return (
    <>
      {helpBlockContent.map((item) => (
        <div className="col-lg-4 col-md-6" key={item.id}>
          <div className="bg-blue-1-05 rounded-4 px-50 py-40">
            <div className="size-70 bg-white rounded-full flex-center">
              <Image width={30} height={30} src={item.icon} alt="icon" />
            </div>
            <div className="mt-24">
              <div className="text-18 fw-500">{item.title}</div>
              <p className="mt-5">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default HelpBlock;
