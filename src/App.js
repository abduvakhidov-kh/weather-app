import "./App.css";
import Container from "./components/Container/Container";
import { useSelector } from "react-redux";
import Loader from "./components/Loader";

function App() {
  const selectLoading = (state) => state.loading;
  const loading = useSelector(selectLoading);
  console.log("loading", loading);

  var d = new Date();
  const hour = d.getHours();

  if (hour > 5 && hour <= 9) {
    var imageClass = "morning";
  } else if (hour > 9 && hour <= 16) {
    var imageClass = "day";
  } else if (hour > 16 && hour <= 20) {
    var imageClass = "evening";
  } else if (hour > 20 && hour <= 5) {
    var imageClass = "night";
  }

  return (
    <div className={`App ${imageClass}`}>
      {loading ? <Loader /> : <Container />}
    </div>
  );
}

export default App;
