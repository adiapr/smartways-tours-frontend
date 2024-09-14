"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next';
// import { useTranslation } from 'react-i18next';

function JoinGroup() {
  const { t } = useTranslation('common');
  return (
    <section className="layout-pt-md layout-pb-md mt-3 join-group-section" style={{ 
      backgroundImage: "url('/img/backgrounds/bg-pemandangan.webp')", 
      backgroundRepeat: 'no-repeat', 
      backgroundSize: 'cover', 
      backgroundPosition: 'top', 
      backgroundAttachment: 'scroll',
      position: 'relative',
      zIndex: 1,
    }}>
      <div className="container">
        <div className="row y-gap-30 justify-between items-center">
          <div className="col-auto">
            <div className="row y-gap-20 flex-wrap items-center">
              <div className="col-auto">
                <div className="icon-newsletter text-60 sm:text-40 text-white" />
              </div>
              <div className="col-auto">
                <h4 className="text-26 text-white fw-600">
                {t('support.promo')}
                </h4>
                <div className="text-white">
                {t('support.daftar_grup')}
                </div>
              </div>
            </div>
          </div>

          <div className="col-auto">
            <div className="single-field -w-410 d-flex x-gap-10 y-gap-20">
              <div>
                <Link href='https://chat.Whatsapp.com/FQJZn7QB43a3r4BGve9b3L' target='_blank' className="button -md h-60 bg-success fw-bold text-white">
                  <Image src={'/img/icons/whatsapp.svg'} width={18} height={18} /> &nbsp; {t('support.whatsapp')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinGroup
