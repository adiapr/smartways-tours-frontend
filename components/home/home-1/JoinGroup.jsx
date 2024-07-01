import Image from 'next/image'
import React from 'react'

function JoinGroup() {
  return (
    
    <section className="layout-pt-md layout-pb-md mt-3" style={{ 
      backgroundImage: "url('img/backgrounds/bg-wisata.png')", 
      backgroundRepeat: 'no-repeat', 
      backgroundSize: 'cover', 
      backgroundPosition: 'top', 
      backgroundAttachment: 'scroll' 
    }}>
      <div className="container">
        <div className="row y-gap-30 justify-between items-center">
          <div className="col-auto">
            <div className="row y-gap-20  flex-wrap items-center">
              <div className="col-auto">
                <div className="icon-newsletter text-60 sm:text-40 text-white" />
              </div>
              <div className="col-auto">
                <h4 className="text-26 text-white fw-600">
                  Dapatkan Promo Menarik
                </h4>
                <div className="text-white">
                  Daftar grup whatsapp untuk mendapatkan penawaran terbaik dari kami
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
                  placeholder="Email anda..."
                />
              </div> */}
              {/* End email input */}

              <div>
                <a href='#' target='_blank' className="button -md h-60 bg-success fw-bold text-white">
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