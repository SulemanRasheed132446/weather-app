import { FORECAST_UPDATE } from "../actions/types";

const initialState = {
  forecastData: [],
};
const forecastReducer = (state = initialState, { type, payload }) => {
  switch (type) { 
    case FORECAST_UPDATE:
      return {
        forecastData:payload.forecastData,
      }
    default:
      return state;
  }
};
export default forecastReducer;
