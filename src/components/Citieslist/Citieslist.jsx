import React, { useEffect, useState } from "react";
import "./Citieslist.css";
import { weatherLoad } from "../../redux/actions";
import { useDispatch} from "react-redux";

const cities = ["Samarqand", "Bukhara", "Tashkent", "Fargona", "Nukus"];
export default function Citieslist() {
  const [inputCity, setInputCity] = useState("");
  const dispatch = useDispatch();
  const [selectedCity, setSelectedCity] = useState("Tashkent");

  const selectedRegion = (clickedCity) => {
    setSelectedCity(clickedCity);
  };

  useEffect(() => {
    dispatch(weatherLoad(selectedCity));
  }, [selectedCity]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSelectedCity(inputCity);
  };

  return (
    <>
      <div className="cities">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Another location"
            name="search"
            onChange={(e) => setInputCity(e.target.value)}
          />
          <button type="submit" className="btn">
            <img
              className="search-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"
            />
          </button>
        </form>
        <ul className="cities-list">
          {cities.map((city) => {
            return (
              <li
                onClick={(city) => {
                  console.log("cityis", city);
                  selectedRegion(city.target.innerText);
                }}
              >
                {city}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
