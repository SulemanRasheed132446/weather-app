import { FETCH_WEATHER_DETAILS, FETCH_WEATHER_FORECAST, WEATHER_FAILED, WEATHER_LOADING, WEATHER_UPDATE , FORECAST_UPDATE, TOGGLE_SEARCH, COMPLETED_SEARCH} from "./types";

export const weatherLoading = () => ({
    type:WEATHER_LOADING
})

export const weatherFailed = (message) => ({
    type:WEATHER_FAILED,
    payload:{
        error: message
    }
})

export const weatherUpdate = (weatherData) => ({
    type:WEATHER_UPDATE,
    payload:{
        weatherData: weatherData
    }
})

export const getWeatherByCity = (name) => ({
    type:FETCH_WEATHER_DETAILS,
    payload:{
        name
    }
})

export const getWeatherForecast = (payload) => ({
    type:FETCH_WEATHER_FORECAST,
    payload
})

export const updateForecast = (forecastData) => ({
    type:FORECAST_UPDATE,
    payload:{
        forecastData
    }
})
export const toggleSearch = () => ({
    type:TOGGLE_SEARCH
})
export const completeSearch = () => ({
    type:COMPLETED_SEARCH
})