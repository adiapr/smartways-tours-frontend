"use client";
import React, { useEffect, useState } from 'react'

import toursData from "@/data/tours";
import TopSlider from "@/components/documentation/TopSlider";
import Slide2 from "@/components/documentation/Slide2";
import Moments from "@/components/documentation/Moments";
import Information from "@/components/documentation/Information";
import WhyTake from './WhyTake';

function Index({ params }) {
    // console.log(params.slug);
    const id = params.id;
    const tour = toursData.find((item) => item.id == id) || toursData[0];
    const [documentatation, setDocumentation] = useState(null);
    useEffect( ()=> {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/layanan-dokumentasi/${params.slug}`);
                // console.log("respon : ", response)
                const data = await response.json();
                setDocumentation(data)
                // console.log(data);
            } catch (error) {
                console.log('Err : ', error)
            }
        }
        if(params) {
            fetchData();
        }
    }, [params])
    // console.log(documentatation.Atas)

    if(!documentatation){
        return <div>Loading...</div>
    }

  return (
    <div>
        <TopSlider documentatation={documentatation} />
        <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="article">
                            <p className="text-15" dangerouslySetInnerHTML={{ __html: documentatation.description }}></p>
                        </div>
                        <Slide2 bawah={documentatation.Bawah} />
                        <Moments documentatation={documentatation} />
                        <Information documentatation={documentatation} />
                        <div className="mt-50"></div>
                        <WhyTake />
                        
                        
                    </div>
                    <div className="col-md-4">
                        <div className='sticky-div mt-20'>
                            <div className="card">
                                <div className="card-header d-flex align-items-center justify-content-between">
                                    <h3 className="fw-bold">
                                        {documentatation.name}
                                    </h3>
                                    <div className='text-end'>
                                        <p style={{ fontSize: "12px" }}>Price</p>
                                        <h6  className='my-0 py-0'><s>{documentatation.start_price}</s></h6>
                                        <h5 className='font-bold my-0 py-0'>
                                            {documentatation.price}
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