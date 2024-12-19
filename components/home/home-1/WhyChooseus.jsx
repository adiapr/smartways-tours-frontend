"use client"
// components/WhyChooseUs.js

import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';

const WhyChooseUs = () => {
  const { t } = useTranslation('common');

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="mb-4">{t('common.whyChooseUs.title')}</h2>
        <p>{t('common.whyChooseUs.subtitle')}</p>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-4 my-4">
              <div className="card shadow border-0">
                <div className="card-body d-flex align-items-center">
                  <div>
                    <Image
                      width={100}
                      height={100}
                      src="/img/icons/leading.svg"
                      unoptimized
                      alt='Leading Icon'
                    />
                    <h5 className="card-title">{t('common.whyChooseUs.cards.leading.title')}</h5>
                    <p className="card-text text-justify" style={{ textAlign:'justify' }}>{t('common.whyChooseUs.cards.leading.text')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-4">
              <div className="card shadow border-0">
                <div className="card-body d-flex align-items-center">
                  <div>
                    <Image
                      width={100}
                      height={100}
                      src="/img/icons/pricing.svg"
                      unoptimized
                      alt='Pricing Icon'
                    />
                    <h5 className="card-title">{t('common.whyChooseUs.cards.pricing.title')}</h5>
                    <p className="card-text" style={{ textAlign:'justify' }}>{t('common.whyChooseUs.cards.pricing.text')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-4">
              <div className="card shadow border-0">
                <div className="card-body d-flex align-items-center">
                  <div>
                    <Image
                      width={100}
                      height={100}
                      src="/img/icons/service.svg"
                      unoptimized
                      alt='Service Icon'
                    />
                    <h5 className="card-title">{t('common.whyChooseUs.cards.service.title')}</h5>
                    <p className="card-text" style={{ textAlign:'justify' }}>{t('common.whyChooseUs.cards.service.text')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-4">
              <div className="card shadow border-0">
                <div className="card-body d-flex align-items-center">
                  <div>
                    <Image
                      width={100}
                      height={100}
                      src="/img/icons/record.svg"
                      unoptimized
                      alt='Record Icon'
                    />
                    <h5 className="card-title">{t('common.whyChooseUs.cards.record.title')}</h5>
                    <p className="card-text" style={{ textAlign:'justify' }}>{t('common.whyChooseUs.cards.record.text')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-4">
              <div className="card shadow border-0">
                <div className="card-body d-flex align-items-center">
                  <div>
                    <Image
                      width={100}
                      height={100}
                      src="/img/icons/leading.svg"
                      unoptimized
                      alt='Professional Icon'
                    />
                    <h5 className="card-title">{t('common.whyChooseUs.cards.professional.title')}</h5>
                    <p className="card-text" style={{ textAlign:'justify' }}>{t('common.whyChooseUs.cards.professional.text')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-4">
              <div className="card shadow border-0">
                <div className="card-body d-flex align-items-center">
                  <div>
                    <Image
                      width={100}
                      height={100}
                      src="/img/icons/pricing.svg"
                      unoptimized
                      alt='Professional Icon'
                    />
                    <h5 className="card-title">{t('common.whyChooseUs.cards.kompetitif.title')}</h5>
                    <p className="card-text" style={{ textAlign:'justify' }}>{t('common.whyChooseUs.cards.kompetitif.text')}</p>
                  </div>
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
