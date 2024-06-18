import CategoryTypes from "../sidebar/CategoryTypes";
import OthersFilter from "../sidebar/OthersFilter";
import Duration from "../sidebar/Duration";
import Languages from "../sidebar/Languages";
import PirceSlider from "../sidebar/PirceSlider";
import MainFilterSearchBox from "./MainFilterSearchBox";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar__item -no-border">
        <h5 className="text-18 fw-bold mb-10">Cari Berdasarkan Lokasi</h5>
        <div className="sidebar-checkbox">
          <CategoryTypes />
        </div>
      </div>
     
    </>
  );
};

export default Sidebar;
