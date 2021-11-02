import { FETCH_WEATHER } from "./types";

const initialState = {};

export const weatherReducer = (state = initialState, action) => {
  console.log("weather Reducer > ", action);

  switch (action.type) {
    case FETCH_WEATHER:
      const weatherInfo = action.details;
      return {
        ...state,
        weatherInfo,
      };

    default:
      return state;
  }
};
