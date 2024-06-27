import Map from "../sidebar/Map";
import LocationFilters from "../sidebar/LocationFilters";
// import PirceSlider from "../sidebar/PirceSlider";
import CategorieFilters from "../sidebar/CategorieFilters";
import SupplierFilters from "../sidebar/SupplierFilters";
import SpecificationsFilter from "../sidebar/SpecificationsFilter";
import MileageFilter from "../sidebar/MileageFilter";
import TransmissionFilter from "../sidebar/TransmissionFilter";
import FuelPolicyFilter from "../sidebar/FuelPolicyFilter";

const Sidebar = () => {
  return (
    <>
      {/* <div className="sidebar__item -no-border position-relative">
        <Map />
      </div> */}
      {/* End find map */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Lokasi</h5>
        <div className="sidebar-checkbox">
          <LocationFilters />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End Location filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Kategori Mobil</h5>
        <div className="sidebar-checkbox">
          <CategorieFilters />
        </div>
      </div>
      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Transmisi</h5>
        <div className="sidebar-checkbox">
          <TransmissionFilter />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
