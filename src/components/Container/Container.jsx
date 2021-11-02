import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import WeatherInfo from "../WeatherInfo/WeatherInfo";

export default function Container() {

  return (
    <div>
      <div className="container">
        <div className="info">
          <h1 className="info-logo">the.weather</h1>
          <WeatherInfo />
        </div>
        <div className="sidebar">
          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  );
}
