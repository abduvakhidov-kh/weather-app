import { FETCH_WEATHER } from "./types";

export function weatherLoad() {
  return async (dispatch) => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments?_limit=10"
    );
    const jsonData = await response.json();
    dispatch({
      type: FETCH_WEATHER,
      data: jsonData,
    });
  };
}