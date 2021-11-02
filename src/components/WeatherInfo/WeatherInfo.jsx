import "./weatherInfo.css";
import { useSelector } from "react-redux";

export default function WeatherInfo() {
  const weatherDeatails = useSelector((state) => {
    return state.weatherReducer.weatherInfo;
  });

  console.log("weather details is: ", weatherDeatails);
  
  const temp = Math.round(weatherDeatails.main.temp);
  const city_name = weatherDeatails.name



  return (
    <div className="info-weather">
      <div className="temparature">{temp}&#176;</div>
      <div className="additional">
        <h2 className="city">{city_name}</h2>
        <div className="date">10:22 Monday 29 Oct 2021</div>
      </div>
      <div className="weather-condition">
        <img src="/" alt="weather condition icon" />
        <br />
        <span className="condition">Sunny</span>
      </div>
    </div>
  );
}
