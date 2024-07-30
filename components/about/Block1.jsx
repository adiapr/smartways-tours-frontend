import Image from "next/image";

const Block1 = () => {
  return (
    <>
      <div className="col-lg-5">
        <h2 className="text-30 fw-600">Tentang Smartway.tours</h2>
        <p className="mt-5">Destinasi populer ini memiliki banyak hal untuk ditawarkan</p>
        <p className="text-dark-1 mt-60 lg:mt-40 md:mt-20">
        Smartway Indonesia adalah yang terdepan di antara Perusahaan Manajemen Destinasi (DMC) online, yang berdedikasi untuk melampaui harapan pelanggan kami. Salah satu prestasi terkemuka kami adalah diakui sebagai yang terbaik dari yang terbaik Travelers' Choice yang dinilai oleh TripAdvisor, sebagai bukti komitmen kami terhadap keunggulan. Dengan pemahaman mendalam tentang kepulauan Indonesia, kami mengkhususkan diri dalam menciptakan perjalanan tak terlupakan yang menggabungkan pemkamungan yang memukau, imersi budaya yang dalam, dan rasa petualangan. Didukung oleh tim profesional dan jaringan komprehensif di seluruh negeri, Smartway Indonesia dilengkapi untuk mewujudkan impian perjalanan apa pun.
          <br />
          <br />
          Komitmen kami melampaui penyediaan layanan yang luar biasa; kami bersemangat untuk melibatkan komunitas lokal dalam usaha kami, memastikan bahwa perjalanan kami memberikan kontribusi positif bagi orang-orang yang tanahnya kami jelajahi. Kami percaya dalam menciptakan pengalaman yang tidak hanya menyenangkan klien kami tetapi juga meningkatkan kesejahteraan penduduk setempat. Melalui perjalanan kami, kami tidak hanya menyaksikan pemkamungan yang luar biasa tetapi juga bertujuan untuk memberikan dampak yang berarti bagi komunitas yang kami kunjungi. Pendekatan kami berakar dalam perhatian yang tulus, kolaborasi, dan berbagi, membina budaya saling menghormati dan kemitraan.
        </p>
      </div>
      {/* End .col */}

      <div className="col-lg-6">
        <Image
          width={400}
          height={400}
          src="/img/pages/about/about.jpg"
          alt="image"
          className="rounded-4 w-100"
        />
      </div>
      {/* End .col */}
    </>
  );
};

export default Block1;
