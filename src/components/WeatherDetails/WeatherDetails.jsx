import React from "react";
import "./WeatherDetails.css";

export default function WeatherDetails() {
  return (
    <>
      <div className="weather-details">
        <h3>Weather Details</h3>
        <ul className="details-list">
          <li className="details-list-item">
            <div>Cloudy </div>
            <div className="details-num">12%</div>
          </li>
          <li className="details-list-item">
            <div>Humidity </div> <div className="details-num">78%</div>
          </li>
          <li className="details-list-item">
            <div>Wind </div>
            <div className="details-num">1km/h</div>
          </li>
          <li className="details-list-item">
            <div>Rain </div> <div className="details-num">0mm</div>
          </li>
        </ul>
      </div>
    </>
  );
}
