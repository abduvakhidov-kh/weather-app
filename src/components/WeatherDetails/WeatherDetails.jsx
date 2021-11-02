import React, { useState, useEffect } from "react";
import "./WeatherDetails.css";
import { useSelector } from "react-redux";

const selectWeatherDetails = (state) => state.weatherReducer.weatherDetails;

export default function WeatherDetails() {
  const [cloudy, setCloudy] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);
  const [pressure, setPressure] = useState(0);

  const weatherDetails = useSelector(selectWeatherDetails);

  useEffect(() => {
    setCloudy(weatherDetails?.clouds.all);
    setHumidity(weatherDetails?.main.humidity);
    setWind(weatherDetails?.wind.speed);
    setPressure(weatherDetails?.main.pressure);
  }, [weatherDetails]);

  return (
    <>
      <div className="weather-details">
        <h3>Weather Details</h3>
        <ul className="details-list">
          <li className="details-list-item">
            <div>Cloudy </div>
            <div className="details-num">{cloudy}%</div>
          </li>
          <li className="details-list-item">
            <div>Humidity </div> <div className="details-num">{humidity}%</div>
          </li>
          <li className="details-list-item">
            <div>Wind </div>
            <div className="details-num">{wind}km/h</div>
          </li>
          <li className="details-list-item">
            <div>Pressure </div> <div className="details-num">{pressure}mm</div>
          </li>
        </ul>
      </div>
    </>
  );
}
