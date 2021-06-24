import { WEATHER_FAILED, WEATHER_LOADING, WEATHER_UPDATE } from "../actions/types";

const initialState = {
  loading: false,
  error: null,
  weatherData: {},
  forecastData: {},
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
        loading: false,
        error: null,
        weatherData: payload.weatherData
      };

    default:
      return state;
  }
};
export default reducer;
