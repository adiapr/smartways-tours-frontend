import Link from 'next/link'
import React, { useState } from 'react'

function ChoosePackage({price}) {

    const formatRupiah = (amount) => {
        return new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 0,
        }).format(amount);
      };
    // console.log(price)
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelection = (optionId) => {
        setSelectedOption(optionId);
    };
  return (
    <>
     <div className="col-12 mt-30">
        <div className="row">
            {/* Card 1 */}
                {price.map((item) => (
                    <div className="col-md-4 my-2 col-6 px-1" key={item.id}>
                        <div className="card">
                            <div className="card-header bg-blue-2 border-0">
                                <h4 className="card-title">{item.name}</h4>
                            </div>
                            <div className="card-body">
                                <i className="text-blue-1 fw-bold me-2 bi bi-clock"></i> {item.duration} Hour Duration <br />
                                <i className="text-blue-1 fw-bold me-2 bi bi-images"></i> {item.edited}+ Edited Photos <br />
                                <i className="text-blue-1 fw-bold me-2 bi bi-cloud-download"></i> {item.downloadable} Downloadable Photos
                                <hr />
                                <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <p><s>{formatRupiah(item.start_price)}</s></p>
                                    <h5 className="fw-bold">{formatRupiah(90000)}</h5>
                                </div>
                                <div>
                                    <div className={`btn d-flex ${selectedOption === item.id ? 'btn-primary' : 'btn-outline-primary'}`}
                                        onClick={() => handleSelection(item.id)}
                                    >
                                        <input type="radio" name="price" id="1" checked={selectedOption === item.id} onChange={() => handleSelection(item.id)} style={{ display:'none' }} />
                                        <label htmlFor="1">Pilih</label>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
      </div>   
    </>
  )
}

export default ChoosePackage