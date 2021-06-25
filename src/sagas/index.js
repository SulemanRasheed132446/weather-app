import { all } from "redux-saga/effects";
import watchWeatherDetailsSaga from "./searchWeather";

export default function* rootSaga() {
  yield all([watchWeatherDetailsSaga()]);
}
