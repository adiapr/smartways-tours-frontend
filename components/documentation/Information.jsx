import React, { useState } from 'react';

function Information({documentatation}) {
  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div>
      <h3 className="fw-bold mt-50 mb-10">Useful information</h3>
        <div className="col-12 mt-10">
          <div className="accordion__item px-20 py-20 border-light rounded-4">
            <div
              className="accordion__button d-flex items-center"
              onClick={() => toggleAccordion(1)}
            >
              <div className="accordion__icon size-40 flex-center bg-light-2 rounded-full mr-20">
                <i className={activeId === 1 ? "icon-minus" : "icon-plus"} />
              </div>
              <div className="button text-dark-1 text-start">Reschedule policy</div>
            </div>
            <div
              className={`accordion-collapse ${activeId === 1 ? 'show' : 'collapse'}`}
              id="1"
            >
              <div className="pt-15 pl-60">
                <p className="text-15">{documentatation.q1}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 mt-10">
          <div className="accordion__item px-20 py-20 border-light rounded-4">
            <div
              className="accordion__button d-flex items-center"
              onClick={() => toggleAccordion(2)}
            >
              <div className="accordion__icon size-40 flex-center bg-light-2 rounded-full mr-20">
                <i className={activeId === 2 ? "icon-minus" : "icon-plus"} />
              </div>
              <div className="button text-dark-1 text-start">Cancellation policy</div>
            </div>
            <div
              className={`accordion-collapse ${activeId === 2 ? 'show' : 'collapse'}`}
              id="2"
            >
              <div className="pt-15 pl-60">
                <p className="text-15">{documentatation.q2}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 mt-10">
          <div className="accordion__item px-20 py-20 border-light rounded-4">
            <div
              className="accordion__button d-flex items-center"
              onClick={() => toggleAccordion(3)}
            >
              <div className="accordion__icon size-40 flex-center bg-light-2 rounded-full mr-20">
                <i className={activeId === 3 ? "icon-minus" : "icon-plus"} />
              </div>
              <div className="button text-dark-1 text-start">Get your photos in 48 hours</div>
            </div>
            <div
              className={`accordion-collapse ${activeId === 3 ? 'show' : 'collapse'}`}
              id="3"
            >
              <div className="pt-15 pl-60">
                <p className="text-15">{documentatation.q3}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 mt-10">
          <div className="accordion__item px-20 py-20 border-light rounded-4">
            <div
              className="accordion__button d-flex items-center"
              onClick={() => toggleAccordion(4)}
            >
              <div className="accordion__icon size-40 flex-center bg-light-2 rounded-full mr-20">
                <i className={activeId === 4 ? "icon-minus" : "icon-plus"} />
              </div>
              <div className="button text-dark-1 text-start">Photographer transportation and entrance fees</div>
            </div>
            <div
              className={`accordion-collapse ${activeId === 4 ? 'show' : 'collapse'}`}
              id="4"
            >
              <div className="pt-15 pl-60">
                <p className="text-15">{documentatation.q4}</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Information;
