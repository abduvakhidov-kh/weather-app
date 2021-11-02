import React, { useEffect, useState } from "react";
import "./Citieslist.css";
import { weatherLoad } from "../../redux/actions";
import { useDispatch } from "react-redux";

const regions = ["Samarqand", "Buxoro", "Tashkent", "Fargona", "Nukus"];
export default function Citieslist() {
  const [city, setCity] = useState("Tashkent");
  const dispatch = useDispatch();

  const selectedRegion = (reg) => {
    setCity(reg);
    console.log(reg);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", e.target.value);
  };

  const handleInput = (e) => {
    setCity(e.target.value);
  };
  useEffect(() => {
    dispatch(weatherLoad(city));
  }, [city]);

  console.log(city);
  return (
    <>
      <div className="cities">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Another location"
            name="search"
            value={city}
            onChange={handleInput}
          />
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
