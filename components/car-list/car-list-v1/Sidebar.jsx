"use client"
// Sidebar.js
import { useState } from 'react';

const Sidebar = ({ onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    locations: [],
    types: [],
    transmissions: [],
  });

  const getLocationName = (locationCode) => {
    const locationMap = {
      1: 'Jawa Timur',
      2: 'Bali',
      3: 'Lombok',
    };
  
    return locationMap[locationCode] || 'Lokasi Tidak Dikenal'; 
  };

  const filters = {
    locations: [
      { label: getLocationName(1) }, // Menggunakan getLocationName untuk mendapatkan nama lokasi
      { label: getLocationName(2) },
      { label: getLocationName(3) },
    ],
    types: [
      { label: "Mobil" },
      { label: "BUS" },
    ],
    transmissions: [
      { label: "Automatic" },
      { label: "Manual" },
    ],
  };

  const handleCheckboxChange = (type, label) => {
    const updatedFilters = { ...selectedFilters };
    const index = updatedFilters[type].indexOf(label);

    if (index > -1) {
      updatedFilters[type].splice(index, 1);
    } else {
      updatedFilters[type].push(label);
    }

    setSelectedFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <>
      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Lokasi</h5>
        <div className="sidebar-checkbox">
          {filters.locations.map((filter, index) => (
            <div className="row y-gap-10 items-center justify-between" key={index}>
              <div className="col-auto">
                <div className="form-checkbox d-flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedFilters.locations.includes(filter.label)}
                    onChange={() => handleCheckboxChange('locations', filter.label)}
                  />
                  <div className="form-checkbox__mark">
                    <div className="form-checkbox__icon icon-check" />
                  </div>
                  <div className="text-15 ml-10">{filter.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Jenis Kendaraan</h5>
        <div className="sidebar-checkbox">
          {filters.types.map((filter, index) => (
            <div className="row y-gap-10 items-center justify-between" key={index}>
              <div className="col-auto">
                <div className="form-checkbox d-flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedFilters.types.includes(filter.label)}
                    onChange={() => handleCheckboxChange('types', filter.label)}
                  />
                  <div className="form-checkbox__mark">
                    <div className="form-checkbox__icon icon-check" />
                  </div>
                  <div className="text-15 ml-10">{filter.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Transmisi</h5>
        <div className="sidebar-checkbox">
          {filters.transmissions.map((filter, index) => (
            <div className="row y-gap-10 items-center justify-between" key={index}>
              <div className="col-auto">
                <div className="form-checkbox d-flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedFilters.transmissions.includes(filter.label)}
                    onChange={() => handleCheckboxChange('transmissions', filter.label)}
                  />
                  <div className="form-checkbox__mark">
                    <div className="form-checkbox__icon icon-check" />
                  </div>
                  <div className="text-15 ml-10">{filter.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
