import { FETCH_WEATHER_DETAILS, WEATHER_FAILED, WEATHER_LOADING, WEATHER_UPDATE } from "./types";

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