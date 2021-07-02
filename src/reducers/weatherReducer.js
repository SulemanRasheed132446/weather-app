import { COMPLETED_SEARCH, TOGGLE_SEARCH, WEATHER_FAILED, WEATHER_LOADING, WEATHER_UPDATE } from "../actions/types";

const initialState = {
  loading: false,
  error: null,
  weatherData: {},
  searched:true,
};
const weatherReducer = (state = initialState, { type, payload }) => {
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
    case TOGGLE_SEARCH:
      return {
        ...state,
        searched: !state.searched
      }
    case COMPLETED_SEARCH:
        return  {
            ...state,
            loading: false,
            error: null,
        }
    default:
      return state;
  }
};
export default weatherReducer;
