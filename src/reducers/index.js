import { combineReducers } from "redux";
import forecastReducer from "./forecastReducer";
import weatherReducer from "./weatherReducer";

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  forecast: forecastReducer,
  weather: weatherReducer

})
export default rootReducer;