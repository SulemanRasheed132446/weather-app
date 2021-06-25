import {call, put, takeLatest} from 'redux-saga/effects'
import { weatherFailed, weatherLoading, weatherUpdate } from '../actions';
import { FETCH_WEATHER_DETAILS, WEATHER_LOADING, WEATHER_UPDATE } from '../actions/types'
import weatherService from '../services/index'
function* getWeatherDetails ({payload}) {
    try {
        yield put(weatherLoading());
        const data = yield call(weatherService.getWeatherDataByCityName,payload.name);
        yield put(weatherUpdate(data))

    }
    catch (err) {
        yield put(weatherFailed())
    }
}
function* watchWeatherDetailsSaga () {
    yield takeLatest(FETCH_WEATHER_DETAILS,getWeatherDetails )
}
export default watchWeatherDetailsSaga;