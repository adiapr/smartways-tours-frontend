"use client"
import TourProperties from './TourProperties';

const TourIndex = ({ selectedLocations }) => {
  return (
    <div className="row y-gap-30">
      <div className="col-xl-12">
        <div className="mt-30"></div>
        <div className="row y-gap-30">
          <TourProperties selectedLocations={selectedLocations} />
        </div>
      </div>
    </div>
  );
};

export default TourIndex;
