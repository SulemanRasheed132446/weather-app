import {call, put, takeLatest} from 'redux-saga/effects'
import { updateForecast, completeSearch   } from '../actions';
import {  FETCH_WEATHER_FORECAST,  } from '../actions/types'
import {restructureForecastData} from '../utils'
import weatherService from '../services/index'
function* getWeatherForecast ({payload}) {
    try {
        const data = yield call(weatherService.getForcastData,payload);
        const forecastData = restructureForecastData(data);
        yield put(updateForecast(forecastData))
        yield put(completeSearch())
    }
    catch (err) {
        throw new Error("Invalid city name")
    }
}
function* watchWeatherForecastSaga () {
    yield takeLatest(FETCH_WEATHER_FORECAST,getWeatherForecast )
}
export default watchWeatherForecastSaga;