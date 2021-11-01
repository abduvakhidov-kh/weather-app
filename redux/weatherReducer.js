import { FETCH_WEATHER } from "./types";

const initialState = {
  weather: [],
};

export const weatherReducer = (state = initialState, action) => {
  console.log("weather Reducer > ", action);

  switch (action.type) {
    case FETCH_WEATHER:
      const weatherInfo = action.data;
      return {
        ...state,
        weatherInfo,
      };

    default:
      return state;
  }
};
