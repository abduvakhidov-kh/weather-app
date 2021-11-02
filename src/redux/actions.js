import { DETAILS_LOADED, DETAILS_LOADING, SET_CITY } from "./types";
const API_KEY = "88c34a8ddb27818051f224236d2df3ea";

export function weatherLoad(selectedCity) {
  return function (dispatch) {
    dispatch({ type: DETAILS_LOADING });
    dispatch({ type: SET_CITY, selectedCity });
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => dispatch({ type: DETAILS_LOADED, weatherDetails: data }));
  };
}
