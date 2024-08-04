import Social from "../../common/social/Social";

const Copyright = () => {
  return (
    <div className="row justify-between items-center y-gap-10">
      <div className="col-auto">
        <div className="row x-gap-30 y-gap-10">
          <div className="col-auto">
            <div className="d-flex items-center">
              © {new Date().getFullYear()} by
              <a
                href="#"
                className="mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b>PT Bagus Bahagia Bersama</b>
              </a>
              All rights reserved.
            </div>
          </div>
          {/* End .col */}

          <div className="col-auto">
            <div className="d-flex x-gap-15">
              {/* <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Site Map</a> */}
            </div>
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}
      </div>
      {/* End .col */}

      {/* End .col */}
    </div>
  );
};

export default Copyright;
