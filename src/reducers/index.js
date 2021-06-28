import { FORECAST_UPDATE, TOGGLE_SEARCH, WEATHER_FAILED, WEATHER_LOADING, WEATHER_UPDATE } from "../actions/types";

const initialState = {
  loading: false,
  error: null,
  weatherData: {},
  forecastData: [],
  searched:true,
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case WEATHER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case WEATHER_FAILED:
      return {
        ...state,
        loading: false,
        error: payload.error
      };

    case WEATHER_UPDATE:
      return {
        ...state,
        error: null,
        weatherData: payload.weatherData
      };
    case FORECAST_UPDATE:
      return {
        ...state,
        loading: false,
        forecastData:payload.forecastData,
        searched: true
      }
    case TOGGLE_SEARCH:
      return {
        ...state,
        searched: !state.searched
      }
    default:
      return state;
  }
};
export default reducer;
