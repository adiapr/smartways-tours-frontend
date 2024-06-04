import Image from 'next/image';
import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="mb-4">Kenapa memilih Smartway.tours?</h2>
        <p>Setiap Langkah, Setiap Petualangan Bersama Kami</p>
        {/* <p></p> */}
        <div className="row mt-5">
          <div className="col-md-4 mb-4">
            <div className="card shadow border-0">
              <div className="card-body d-flex align-items-center">
                {/* <i className="bi bi-award-fill display-4 me-3"></i> */}
                <div>
                    <Image width={100} height={100} src="/img/icons/leading.svg" unoptimized alt='icon' />
                  <h5 className="card-title">Leading in East Java</h5>
                  <p className="card-text">
                    We pride ourselves on being the best travel agency in East Java, having been awarded TripAdvisor's East Java #1 Travelers' Choice in 2020-2022-2023.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow border-0">
              <div className="card-body d-flex align-items-center">
                <div>
                    <Image width={100} height={100} src="/img/icons/record.svg" unoptimized alt='icon' />
                  <h5 className="card-title">Proven Track Record</h5>
                  <p className="card-text">
                    Established since 2016, over the past 7+ years, we have served more than 20,000 customers for tours in Indonesia (East Java, Bali, and Lombok) and abroad. Smartway has emerged as a renown travel agency brand, earning the trust of numerous national companies. Additionally, we have collaborated with numerous partners from the United States, Germany, the Netherlands, China, Hong Kong, Malaysia, Singapore, and Taiwan.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow border-0">
              <div className="card-body d-flex align-items-center">
                {/* <i className="bi bi-people-fill display-4 me-3"></i> */}
                <div>
                    <Image width={100} height={100} src="/img/icons/proffesional.svg" unoptimized alt='icon' />
                  <h5 className="card-title">Professional Team with BNSP Certification</h5>
                  <p className="card-text">
                    Training, evaluation, and internal improvements are conducted monthly, fostering positive growth within our team. 75% of our team members possess English language proficiency ranging from medium to fluent levels. Additionally, our field team, comprising tour leaders, guides, and event specialists (MICE), holds certification from the BNSP (Badan Nasional Sertifikasi Profesi / The Professional Certification National Board).
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow border-0">
              <div className="card-body d-flex align-items-center">
                {/* <i className="bi bi-tags-fill display-4 me-3"></i> */}
                <div>
                <Image width={100} height={100} src="/img/icons/pricing.svg" unoptimized alt='icon' />
                  <h5 className="card-title">Competitive Pricing</h5>
                  <p className="card-text">
                    We offer highly competitive prices for our travel services, as we implemented our strategic online marketing, operational efficiency, and strong partnerships with various partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow border-0">
              <div className="card-body d-flex align-items-center">
                {/* <i className="bi bi-heart-fill display-4 me-3"></i> */}
                <div>
                <Image width={100} height={100} src="/img/icons/service.svg" unoptimized alt='icon' />
                  <h5 className="card-title">Implementing WOW Service Orientation</h5>
                  <p className="card-text">
                    We regard our customers as invited guests to a party, and we are the hosts. It's our job to make every important aspect of the customer experience a little bit better.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
