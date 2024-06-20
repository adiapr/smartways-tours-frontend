"use client"
import CategoryTypes from "../sidebar/CategoryTypes";

const Sidebar = ({ setSelectedLocations }) => {
  return (
    <aside className="sidebar y-gap-40">
      <CategoryTypes setSelectedLocations={setSelectedLocations} />
    </aside>
  );
};

export default Sidebar;
