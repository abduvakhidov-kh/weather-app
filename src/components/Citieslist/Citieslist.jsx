import React, { useState } from "react";
import "./Citieslist.css";

const regions = ["Samarqand", "Buxoro", "Tashkent", "Fargona", "Nukus"];
export default function Citieslist() {
  const [city, setCity] = useState("Tashkent");

  const selectedRegion = (reg) => {
    setCity(reg);
    console.log(reg);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="cities">
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Another location" name="search" />
          <button type="submit" className="btn">
            <img
              className="search-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"
            />
          </button>
        </form>
        <ul className="cities-list">
          {regions.map((region) => {
            return (
              <li
                onClick={() => {
                  selectedRegion(region);
                }}
              >
                {region}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
