"use client";
import { useEffect, useState } from 'react';
import TopHeaderFilter from '@/components/tour-list/tour-list-v2/TopHeaderFilter';
import TourIndex from '@/components/tour-list/tour-list-v2/TourIndex';
import Sidebar from '@/components/tour-list/tour-list-v2/Sidebar';

const TourMain = () => {
  // Define the state for selected locations
  const [selectedLocations, setSelectedLocations] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const location = params.get('location');
      if (location) {
        setSelectedLocations([location]);
      }
    }
  }, []);

  return (
    <div className="container">
      <div className="row">
        {/* Use custom class instead of Bootstrap's d-none */}
        <div className="col-xl-3 sidebar-desktop-only">
          <Sidebar 
            selectedLocations={selectedLocations} 
            setSelectedLocations={setSelectedLocations} 
          />
        </div>

        {/* Mobile Off-canvas Sidebar */}
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="listingSidebar"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasLabel">
              Filter Tours
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            {/* Sidebar for Mobile Off-canvas */}
            <Sidebar 
              selectedLocations={selectedLocations} 
              setSelectedLocations={setSelectedLocations} 
            />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="col-xl-9">
          <TopHeaderFilter />
          <div className="mt-30"></div>
          <TourIndex selectedLocations={selectedLocations} />
        </div>
      </div>
    </div>
  );
};

export default TourMain;
