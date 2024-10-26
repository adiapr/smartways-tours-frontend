"use client";
import { useEffect, useState } from "react";

// Accept selectedLocations and setSelectedLocations as props
const CategoryTypes = ({ selectedLocations, setSelectedLocations }) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/location`);
        const data = await response.json();
        setLocations(data);
      } catch (error) {
        console.log('Error saat ambil data', error);
      }
    };
    fetchData();
  }, []);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setSelectedLocations((prevSelectedLocations) => {
      if (prevSelectedLocations.includes(value)) {
        return prevSelectedLocations.filter((location) => location !== value);
      } else {
        return [...prevSelectedLocations, value];
      }
    });
  };

  return (
    <>
      {locations.map((category) => (
        <div
          className="row y-gap-10 items-center justify-between"
          key={category.id}
        >
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input
                type="checkbox"
                name="locations"
                value={category.id}
                onChange={handleCheckboxChange}
                checked={selectedLocations.includes(category.id.toString())}
              />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-15 ml-10">{category.location}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CategoryTypes;
