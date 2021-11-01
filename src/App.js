import "./App.css";
import Sidebar from "./components/Sidebar";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  return (
    <div className="App">
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

export default App;
