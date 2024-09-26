const TourRight = ({tour}) => {
    return (
        <div className="d-md-block">
            <div className=" y-gap-30 justify-between pt-20">
                <div className="col-md-auto col-6">
                <div className="d-flex">
                    <i className="icon-clock text-22 text-blue-1 mr-10"></i>
                    <div className="text-15 lh-15">
                    Lama Perjalanan:
                    <br /> {tour.duration} jam
                    </div>
                </div>
                </div>
                {/* End .col */}
        
                <div className="col-md-auto col-6">
                <div className="d-flex">
                    <i className="icon-customer text-22 text-blue-1 mr-10"></i>
                    <div className="text-15 lh-15">
                    Maksimal Orang:
                    <br /> 5 - 6 Per Jeep
                    </div>
                </div>
                </div>
                {/* End .col */}
        
                <div className="col-md-auto col-6">
                <div className="d-flex">
                    <i className="icon-route text-22 text-blue-1 mr-10"></i>
                    <div className="text-15 lh-15">
                    Transportasi
                    <br /> {tour.transportation }
                    </div>
                </div>
                </div>
                {/* End .col */}
        
                <div className="col-md-auto col-6">
                <div className="d-flex">
                    <i className="icon-access-denied text-22 text-blue-1 mr-10"></i>
                    <div className="text-15 lh-15">
                    Boleh dibatalkan? <br />
                    <a href="#" className="text-blue-1 underline">
                        {tour.free_cancel }
                    </a>
                    </div>
                </div>
                </div>
                {/* End .col */}
            </div>
        </div>
    );
  };
  
  export default TourRight;
  