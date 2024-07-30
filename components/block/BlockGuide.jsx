const BlockGuide = () => {
  const blockContent = [
    {
      id: 1,
      icon: "/img/featureIcons/1/1.svg",
      title: "Terdepan di Jawa Timur",
      text: `Kami bangga menjadi agen travel terbaik di Jawa Timur, hal tersebut dapat dilihat dari penghargaan yang kami dapatkan: Travelers' Choice #1 Jawa Timur dari TripAdvisor pada tahun 2020-2022-2023.`,
      delayAnim: "100",
    },
    {
      id: 2,
      icon: "/img/featureIcons/1/2.svg",
      title: "Rekam Jejak Terbukti",
      text: `Berdiri sejak tahun 2016, selama lebih dari 7 tahun terakhir, kami telah melayani lebih dari 20.000 pelanggan untuk tur di Indonesia (Jawa Timur, Bali, dan Lombok) maupun luar negeri. Smartway telah menjadi merek travel agen yang ternama yang telah dipercaya oleh banyak perusahaan di tingkat nasional. Selain itu, kami telah berkolaborasi dengan berbagai mitra dari Amerika Serikat, Jerman, Belkamu, China, Hong Kong, Malaysia, Singapura, dan Taiwan.`,
      delayAnim: "200",
    },
    {
      id: 3,
      icon: "/img/featureIcons/1/3.svg",
      title: "Tim Profesional dengan Sertifikasi BNSP",
      text: `Pelatihan, evaluasi dan perbaikan internal selalu dilakukan setiap bulan membuat tim kami bertumbuh secara positif. 75% tim kami memiliki kemampuan Bahasa Inggris di level medium sampai dengan fasih. Selain itu, tim lapangan kami seperti Tour Leader, Tour Guide dan Tim Event (MICE) telah mengantongi sertifikasi BNSP (Badan Nasional Sertifikasi Profesi / The Professional Certification National Board).`,
      delayAnim: "300",
    },
    {
      id: 4,
      icon: "/img/featureIcons/1/1.svg",
      title: "Tim Profesional dengan Sertifikasi BNSP",
      text: `Kami menawarkan harga yang sangat kompetitif untuk layanan perjalanan kami, karena kami menerapkan startegi pemasaran online, efisiensi operasional, dan kemitraan yang kuat dengan berbagai mitra.`,
      delayAnim: "300",
    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div
          className="col-lg-3 col-sm-6"
          data-aos="fade"
          data-aos-delay={item.delayAnim}
          key={item.id}
        >
          <div className="featureIcon -type-1 ">
            <div className="d-flex justify-center">
              <img src={item.icon} alt="image" className="js-lazy" />
            </div>
            <div className="text-center mt-30">
              <h4 className="text-18 fw-500">{item.title}</h4>
              <p className="text-15 mt-10">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlockGuide;
