import React, { useState } from "react";
import "./sidebar.css";

const regions = ["Samarqand", "Buxoro", "Tashkent", "Fargona", "Nukus"];
export default function Sidebar() {
  const [city, setCity] = useState("Tashkent");

  const selectedRegion = (reg) => {
    setCity(reg);
    console.log(reg);
  };

  return (
    <div className="sidebar-container">
      <div className="cities">
        <form className="example">
          <input type="text" placeholder="Another location" name="search" />
          <button type="submit" className="btn">
            <i className="fa fa-search"></i>
          </button>
        </form>
        <ul className="cities-list">
          {regions.map((region) => {
            return (
              <li
                onClick={(e) => {
                  e.preventDefault();
                  selectedRegion(region);
                }}
              >
                {region}
              </li>
            );
          })}
        </ul>
        <hr />
      </div>
      <div className="weather-details">
        <h3>Weather Details</h3>
        <ul className="details-list">
          <li>
            Cloudy <span className="details-num">12%</span>
          </li>
          <li>
            Humidity <span className="details-num">78%</span>
          </li>
          <li>
            Wind <span className="details-num">1km/h</span>
          </li>
          <li>
            Rain <span className="details-num">0mm</span>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
}
