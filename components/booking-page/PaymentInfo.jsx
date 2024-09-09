
'use client'

import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PricingSummary from "./sidebar/PricingSummary";
import PaymentSchedule from "./sidebar/PaymentSchedule";
import PromoCode from "./sidebar/PromoCode";
import RatingInfo from "./RatingInfo";

const PaymentInfo = ({searchParams}) => {
  console.log(searchParams);
  const [itemsTabs, setItemsTabs] = useState(1);
  const cardTabs = [
    { id: 1, name: "Credit/Debit Card" },
    { id: 2, name: "Digital Payment" },
  ];

  return (
      <>
        <div className="col-xl-7 col-lg-8">
          <RatingInfo />
          <div className="mt-40">
            <label htmlFor="" className="fw-bold">Date<span className="text-danger">*</span></label>
            <input type="date" name="" id="" className="form-control border-1" />
          </div>
          <div className="mt-20">
            <label htmlFor="" className="fw-bold">Time<span className="text-danger">*</span></label>
            <input type="time" name="" id="" className="form-control border-1" />
          </div>
          <div className="mt-20">
            <label htmlFor="" className="fw-bold">PAX</label>
            <input type="text" name="" id="" className="form-control border-1" />
          </div>
          {/* End mt-40 */}

          <div className="w-full h-1 bg-border mt-40 mb-40" />

          <h3 className="fw-bold">
            More Details of Your Photo Shoot
          </h3>
          <div className="mt-20">
            <label htmlFor="" className="fw-bold">Meeting Location<span className="text-danger">*</span></label>
            <select name="" id="" className="form-control">
              <option value="">- Select -</option>
              <option value="Airport">Airport</option>
              <option value="Hotel">Hotel</option>
              <option value="Landmark">Landmark</option>
              <option value="Attaraction">Attaraction</option>
              <option value="Don't know yet">Don't know yet</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mt-20 mb-20">
            <label htmlFor="" className="fw-bold">Location Detail<span className="text-danger">*</span></label>
            <input type="text" placeholder="eg. Lobby, park etc" name="" id="" className="form-control border-1" />
          </div>
          {/* End terms and conditons */}
        </div>
        {/* End payment details */}

        <div className="col-xl-5 col-lg-4">
          <div className="sticky-div">
            <div className="booking-sidebar">
              <div className="px-30 py-30 border-light rounded-4 mt-30">
                <div className="text-20 fw-500 mb-20">Your price summary</div>
                <hr />
                <i className="bi bi-pin-angle-fill text-blue-1"></i> {searchParams.location} <br />
                <i className="bi bi-clock-fill text-blue-1"></i> 2 Hour Photoshoot

                <div className="px-20 py-20 bg-blue-2 rounded-4 mt-20">
                  <div className="row y-gap-5 justify-between">
                    <div className="col-auto d-flex align-items-center">
                      <div className="text-18 lh-13 fw-bold">Price</div>
                    </div>
                    <div className="col-auto">
                      <div className="text-12"><s>Rp.10.000,-</s></div>
                      <div className="text-18 lh-13 fw-bold">US$4,046.81</div>
                    </div>
                  </div>
                </div>
                
                <button type="submit" className="btn btn-primary mt-20 bg-blue-1 w-100">Checkout</button>
              </div>
              {/* <PaymentSchedule /> */}
              {/* <PromoCode /> */}
            </div>
          </div>
        </div>
        {/* payment sidebar info */}
      </>
  );
};

export default PaymentInfo;
