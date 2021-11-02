import "./weatherInfo.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

const selectWeatherDetails = (state) => state.weatherReducer.weatherDetails;

export default function WeatherInfo() {
  var today = new Date();

  const [iconUrl, setIconUrl] = useState("");
  const [description, setDescription] = useState("");
  const [temp, setTemp] = useState(0);
  const [cityName, setCityName] = useState("");

  const weatherDetails = useSelector(selectWeatherDetails);

  // useEffect(() => {
  //   fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${API_KEY}&units=metric`
  //   )
  //     .then((res) => res.json())
  //     .then((data) =>
  //       store.dispatch({ type: DETAILS_LOADED, weatherDetails: data })
  //     );
  // }, [selectedCity]);
  console.log("WeatherDetails", weatherDetails);

  useEffect(() => {
    setTemp(Math.round(weatherDetails?.main.temp));
    setCityName(weatherDetails?.name);
    setIconUrl(weatherDetails?.weather[0].icon);
    setDescription(weatherDetails?.weather[0].description);
  }, [weatherDetails]);
  return (
    <div className="info-weather">
      <div className="temparature">{temp}&#176;</div>
      <div className="additional">
        <h2 className="city">{cityName}</h2>
        <div className="date">{`${today} `}</div>
      </div>
      <div className="weather-condition">
        <img
          src={`http://openweathermap.org/img/w/${iconUrl}.png`}
          alt="weather condition icon"
        />
        <br />
        <span className="condition">{description}</span>
      </div>
    </div>
  );
}
