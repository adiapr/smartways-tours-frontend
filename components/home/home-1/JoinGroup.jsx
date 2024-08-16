import Image from 'next/image'
import React from 'react'

function JoinGroup() {
  return (
    
    <section className="layout-pt-md layout-pb-md mt-3" style={{ 
      backgroundImage: "url('/img/backgrounds/bg-pemandangan.webp')", 
      backgroundRepeat: 'no-repeat', 
      backgroundSize: 'cover', 
      backgroundPosition: 'top', 
      backgroundAttachment: 'scroll',
      zIndex:'999' 
    }}>
      <div className="container">
        <div className="row y-gap-30 justify-between items-center">
          <div className="col-auto">
            <div className="row y-gap-20  flex-wrap items-center">
              <div className="col-auto">
                <div className="icon-newsletter text-60 sm:text-40 text-black" />
              </div>
              <div className="col-auto">
                <h4 className="text-26 text-black fw-600">
                  Dapatkan Promo Menarik
                </h4>
                <div className="text-black">
                  Daftar grup Whatsapp untuk mendapatkan penawaran terbaik dari kami
                </div>
              </div>
            </div>
          </div>
          {/* End .col */}

          <div className="col-auto">
            <div className="single-field -w-410 d-flex x-gap-10 y-gap-20">
              {/* <div>
                <input
                  className="bg-white h-60"
                  type="text"
                  placeholder="Email kamu..."
                />
              </div> */}
              {/* End email input */}

              <div>
                <a href='https://chat.Whatsapp.com/FQJZn7QB43a3r4BGve9b3L' target='_blank' className="button -md h-60 bg-success fw-bold text-white">
                  <Image src={'/img/icons/whatsapp.svg'} width={18} height={18} /> &nbsp; Gabung Grup Whatsapp
                </a>
              </div>
              {/* End subscribe btn */}
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
    </section>
  )
}

export default JoinGroup