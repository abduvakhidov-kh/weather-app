import "./weatherInfo.css";

export default function WeatherInfo() {
  return (
    <div className="info-weather">
      <div className="temparature">26</div>
      <div className="additional">
        <h2 className="city">London</h2>
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
