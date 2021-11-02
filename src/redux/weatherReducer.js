import { DETAILS_LOADING, DETAILS_LOADED, SET_CITY } from "./types";

const initialState = {
  loading: true,
  weatherInfo: {},
  selectedCity: "Tashkent",
};

export const weatherReducer = (state = initialState, action) => {

  switch (action.type) {
    case DETAILS_LOADED:
      return {
        ...state,
        loading: false,
        weatherDetails: action.weatherDetails,
      };
    case DETAILS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_CITY:
      const selectedCity = action.selectedCity;
      return {
        ...state,
        selectedCity,
      };

    default:
      return state;
  }
};
