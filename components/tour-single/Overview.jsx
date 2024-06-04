const Overview = ({tour}) => {
  return (
    <>
      <div className="row x-gap-40 y-gap-40">
        <div className="col-12">
          <h3 className="text-22 fw-bold text-primary">Overview</h3>

          <p className="text-dark-1 text-15 mt-20">
            <div dangerouslySetInnerHTML={{ __html: tour.description }} />
          </p>

          {/* <a
            href="#"
            className="d-block text-14 text-blue-1 fw-500 underline mt-10"
          >
            Show More
          </a> */}
        </div>

        <div className="col-md-6">
          <h5 className="text-16 fw-bold text-primary">Paket Termasuk</h5>
          <div className="text-15 mt-10">
            <div dangerouslySetInnerHTML={{ __html: tour.packet }} />
          </div>
        </div>

        <div className="col-md-6">
          <h5 className="text-16 fw-bold text-primary">Paket Belum Termasuk</h5>
          <div className="text-15 mt-10">
            <div dangerouslySetInnerHTML={{ __html: tour.no_packet }} />
          </div>
        </div>

        {/* <div className="col-12">
          <h5 className="text-16 fw-500">Highlights</h5>
          <ul className="list-disc text-15 mt-10">
            <li>
              Travel between the UNESCO World Heritage sites aboard a
              comfortable coach
            </li>
            <li>Explore with a guide to delve deeper into the history</li>
            <li>Great for history buffs and travelers with limited time</li>
          </ul>
        </div> */}
      </div>

      {/* <div className="mt-40 border-top-light">
        <div className="row x-gap-40 y-gap-40 pt-40">
          <div className="col-12">
            <h3 className="text-22 fw-500">What&lsquo;s Included</h3>

            <div className="row x-gap-40 y-gap-40 pt-20">
              <div className="col-md-6">
                <div className="text-dark-1 text-15">
                  <i className="icon-check text-10 mr-10"></i> Entry ticket to
                  Harry Potter Warner Bros Studio Tour London
                </div>
                <div className="text-dark-1 text-15">
                  <i className="icon-check text-10 mr-10"></i> Return transfers
                  in air-conditioned coach
                </div>
              </div>

              <div className="col-md-6">
                <div className="text-dark-1 text-15">
                  <i className="icon-close text-green-2 text-10 mr-10"></i> Food
                  and drinks
                </div>
                <div className="text-dark-1 text-15">
                  <i className="icon-close text-green-2 text-10 mr-10"></i>{" "}
                  Gratuities
                </div>
                <div className="text-dark-1 text-15">
                  <i className="icon-close text-green-2 text-10 mr-10"></i>{" "}
                  Digital guide available in 10 different languages at
                  additional cost
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Overview;
