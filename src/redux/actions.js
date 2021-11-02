import { FETCH_WEATHER } from "./types";

export function weatherLoad(city) {
  const API_KEY = "88c34a8ddb27818051f224236d2df3ea";
  return async (dispatch) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then((res) => {
        const resp = res.json();
        return resp;
      })
      .then((data) => {
        console.log(data);
        dispatch({
          type: FETCH_WEATHER,
          details: data,
        });
        // const details = data;
        // return details;
      });
  };
}
