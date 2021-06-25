import {call, put, takeLatest, delay} from 'redux-saga/effects'
import { getWeatherForecast, weatherFailed, weatherLoading, weatherUpdate } from '../actions';
import { FETCH_WEATHER_DETAILS, WEATHER_LOADING, WEATHER_UPDATE } from '../actions/types'
import weatherService from '../services/index'
function* getWeatherDetails ({payload}) {
    try {
        yield put(weatherLoading());
        yield delay(1000)
        const data = yield call(weatherService.getWeatherDataByCityName,payload.name);
        yield put(weatherUpdate(data))
        yield put(getWeatherForecast(data.coord));

    }
    catch (err) {
        console.log(err);
        yield put(weatherFailed())
    }
}
function* watchWeatherDetailsSaga () {
    yield takeLatest(FETCH_WEATHER_DETAILS,getWeatherDetails )
}
export default watchWeatherDetailsSaga;