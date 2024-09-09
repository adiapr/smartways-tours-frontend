import React, { useState } from 'react';

function ChoosePackage({ price, onSelectPrice }) {
  const formatRupiah = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelection = (option) => {
    setSelectedOption(option.id);
    if (onSelectPrice) {
      onSelectPrice(option); // Kirim seluruh objek paket yang dipilih
    }
  };

  return (
    <div className="col-12 mt-30">
      <div className="row">
        {price?.map((item) => (
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
                    <h5 className="fw-bold">{formatRupiah(item.price)}</h5>
                  </div>
                  <div>
                    <div
                      className={`btn d-flex ${selectedOption === item.id ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => handleSelection(item)}
                    >
                      <input
                        type="radio"
                        name="price"
                        id={`price-${item.id}`} // Unik untuk setiap item
                        checked={selectedOption === item.id}
                        onChange={() => handleSelection(item)}
                        style={{ opacity: 0, position: 'absolute' }} // Lebih baik menggunakan ini daripada display: none
                      />
                      <label htmlFor={`price-${item.id}`}>Pilih</label> {/* Hubungkan dengan id unik */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChoosePackage;
