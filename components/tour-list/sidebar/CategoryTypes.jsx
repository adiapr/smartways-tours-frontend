"use client"
import { useEffect, useState } from "react";

const CategoryTypes = () => {
  
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchData =  async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/location`);
        const data = await response.json();
        setLocations(data);

      } catch (error) {
        console.log('Error saat ambil data', error)
      }
    }
    // console.log(fetchData);
    fetchData(); // stop fetching data 
  }, []) //arary kososng agar cuma berjalan sekali

  return (
    <>
      {locations.map((category) => (
        <div
          className="row y-gap-10 items-center justify-between"
          key={category.id}
        >
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input type="checkbox" name="locations" value={category.id} />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-15 ml-10">{category.location}</div>
            </div>
          </div>
          <div className="col-auto">
          </div>
        </div>
      ))}
    </>
  );
};

export default CategoryTypes;
