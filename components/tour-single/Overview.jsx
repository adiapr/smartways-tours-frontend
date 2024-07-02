const Overview = ({tour}) => {
  return (
    <>
      <div className="row x-gap-40 y-gap-40">
        <div className="col-12">
          <h3 className="text-22 fw-bold text-primary">Jujur, bikin susah move on</h3>

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
          <h5 className="text-16 fw-bold text-primary">Tur Sudah Termasuk</h5>
          <div className="text-15 mt-10">
            <div dangerouslySetInnerHTML={{ __html: tour.packet }} />
          </div>
        </div>

        <div className="col-md-6">
          <h5 className="text-16 fw-bold text-primary">Tur Belum Termasuk</h5>
          <div className="text-15 mt-10">
            <div dangerouslySetInnerHTML={{ __html: tour.no_packet }} />
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Overview;
