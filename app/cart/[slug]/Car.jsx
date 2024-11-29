import Image from 'next/image'
import React from 'react'

function Car({carData}) {
  return (
    <div>
        <div className="col-12 mt-40">
                                            <h5 className="fw-bold">
                                                Ingin sekalian sewa mobil dan sopir? <br />
                                                Pilih sekarang
                                            </h5>
                                            <div className="row mt-10">
                                                {carData.map((item) => (
                                                    <div className="col-md-3 col-6 px-1" key={item.id}>
                                                        <div className="card">
                                                            <div className="card-body p-1">
                                                                <Image
                                                                    width={250}
                                                                    height={250}
                                                                    className="rounded-4 col-12 js-lazy"
                                                                    style={{ aspectRatio: '16/9', objectFit: 'cover' }}
                                                                    src={item.media[0]?.original_url}
                                                                    priority
                                                                    alt="image"
                                                                    unoptimized
                                                                />
                                                                <p className="fw-bold text-black">
                                                                    {item.name}
                                                                </p>
                                                                <p className="mt-0">
                                                                    Rp.{item.price.toLocaleString('id-ID')},00
                                                                    <span style={{ fontSize: "12px" }}> (Include Driver)</span>
                                                                </p>
                                                                <button 
                                                                    type="button" 
                                                                    className="btn btn-primary w-100"
                                                                    onClick={() => handleSelectCar(item.price)}
                                                                >
                                                                    Pilih <i className="bi bi-arrow-up-right"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
    </div>
  )
}

export default Car