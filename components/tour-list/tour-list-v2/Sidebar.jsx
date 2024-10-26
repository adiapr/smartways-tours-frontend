"use client";
import CategoryTypes from "../sidebar/CategoryTypes";

// Accept selectedLocations and setSelectedLocations as props
const Sidebar = ({ selectedLocations, setSelectedLocations }) => {
  return (
    <aside className="sidebar y-gap-40">
      {/* Pass the props to CategoryTypes */}
      <CategoryTypes 
        selectedLocations={selectedLocations} 
        setSelectedLocations={setSelectedLocations} 
      />
    </aside>
  );
};

export default Sidebar;
