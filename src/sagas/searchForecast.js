import {call, put, takeLatest} from 'redux-saga/effects'
import { updateForecast,    } from '../actions';
import {  FETCH_WEATHER_FORECAST,  } from '../actions/types'
import weatherService from '../services/index'
function* getWeatherForecast ({payload}) {
    try {
        const forecastData = yield call(weatherService.getForcastData,payload);
        yield put(updateForecast(forecastData))

    }
    catch (err) {
        throw new Error("Invalid city name")
    }
}
function* watchWeatherForecastSaga () {
    yield takeLatest(FETCH_WEATHER_FORECAST,getWeatherForecast )
}
export default watchWeatherForecastSaga;