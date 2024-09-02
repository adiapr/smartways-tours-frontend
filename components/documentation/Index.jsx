"use client";
import React from 'react'

import toursData from "@/data/tours";
import TopSlider from "@/components/documentation/TopSlider";
import Slide2 from "@/components/documentation/Slide2";
import Moments from "@/components/documentation/Moments";
import Information from "@/components/documentation/Information";
import WhyTake from './WhyTake';

function Index({ params }) {
    // console.log(params);
    const id = params.id;
    const tour = toursData.find((item) => item.id == id) || toursData[0];
  return (
    <div>
        <TopSlider tour={tour} />
        <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <p>
                        Some moments deserve more than a selfie, especially moments that are shared with family. Let SweetEscape turn your moments together into memories that last for a lifetime.
                        </p>
                        <Slide2 />
                        <Moments />
                        <Information />
                        <div className="mt-50"></div>
                        <WhyTake />
                        
                        
                    </div>
                    <div className="col-md-4">
                        <div className='sticky-div mt-20'>
                            <div className="card">
                                <div className="card-header d-flex align-items-center justify-content-between">
                                    <h3 className="fw-bold">
                                        Garduation
                                    </h3>
                                    <div className='text-end'>
                                        <p style={{ fontSize: "12px" }}>Harga Mulai</p>
                                        <h6  className='my-0 py-0'><s>Rp.100.000,-</s></h6>
                                        <h5 className='font-bold my-0 py-0'>
                                            Rp.20.000,-
                                        </h5>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <b>Paket Termasuk </b> <br />
                                    <i className="text-primary bi bi-image"></i> Up to 100 edited photos <br />
                                    <i className="text-primary bi bi-cloud-download"></i> Up to 40 downloadable photos
                                    <hr />
                                    <b>
                                        Where will your photo shoot take place?
                                    </b>
                                    <select name="" id="" className="form-select">
                                        <option value=""> - Pilih Tempat -</option>
                                        <option value="Jawa Timur">Jawa Timur</option>
                                        <option value="Bali">Bali</option>
                                        <option value="Lombok">Lombok</option>
                                    </select>

                                    <button type="submit" className="btn btn-primary w-100 mt-10">Cek Ketersediaan</button>
                                </div>
                            </div>

                            <div className="alert alert-primary border-0 mt-20">
                                <div className="fw-bold d-flex justify-content-between">
                                    <div>
                                        <i className="bi bi-calendar-week-fill"></i> Free Reschedule
                                    </div>
                                    <div>
                                        <i className="bi bi-repeat"></i> Free Cancelation
                                    </div>
                                </div>
                                <p>
                                Free Reschedule and Cancellation is only applicable if you submit the request 96 hours (4 days) before the photoshoot date. Click the buttons above to view the complete policy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Index