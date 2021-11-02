import React from "react";
import Citieslist from "../Citieslist/Citieslist";
import WeatherDetails from "../WeatherDetails/WeatherDetails";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar-container">
        <Citieslist />
        <hr />
        <WeatherDetails />
        <hr />
      </div>
    </>
  );
}
