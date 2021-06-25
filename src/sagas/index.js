import { all } from "redux-saga/effects";
import watchWeatherForecastSaga from "./searchForecast";
import watchWeatherDetailsSaga from "./searchWeather";

export default function* rootSaga() {
  yield all([watchWeatherDetailsSaga(), watchWeatherForecastSaga()]);
}
