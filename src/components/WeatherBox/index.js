import React from 'react'
import styles from "./styles.module.scss";
import rain from "../../assets/rain.svg";
import humidity from "../../assets/humidity.svg";
import wind from "../../assets/wind.svg";
import { connect } from 'react-redux';
const WeatherBox = ({weatherData}) => {
  if(JSON.stringify(weatherData) == "{}") {
    return(
    <div style={{ color: "#110D3C" }}>
      <h2 className="title primary">
          Weather <span>Details</span>
      </h2>
      
    </div>)
  }
    return (
        <div style={{ color: "#110D3C" }}>
        <h2 className="title primary">
          Weather <span>Details</span>
        </h2>
        <div className="flex-col justify-between align-center container">
          <div className="flex-row justify-between container align-center">
            <div>
              <img src={rain} width={80} />
            </div>
            <div className="container">
              <h2>Today</h2>
              <p>Sat, 3 Aug</p>
            </div>
          </div>
          <div className={`flex-row align-center ${styles.temp}`}>
            <h1 className="title">{Math.round(weatherData.temp)}</h1>
            <span>&#8451;</span>
          </div>
          <div>
            <h1>{weatherData.cityName}</h1>
          </div>
          <div className="flex-row justify-between container">
            <p className="container">
              Feels like: <span>{Math.round(weatherData.feels_like)}</span>
            </p>
            <p className="container">
              Min Temp: <span> {Math.round(weatherData.temp_max)}</span>
            </p>
            <p className="container">
              Max Temp: <span>{Math.round(weatherData.temp_min)}</span>
            </p>
          </div>
          <div className="flex-row justify-between container">
            <div className="flex-row justify-between">
              <div>
                <img src={wind} width={80} />
              </div>
              <div className="container">
                <h2>Wind</h2>
                <p>{weatherData.windSpeed} mph</p>
              </div>
            </div>
            <div className="flex-row justify-between">
                <div>
                  <img src={humidity} width={80} />
                </div>
                <div className="container">
                  <h2>Humidity</h2>
                  <p>{weatherData.humidity}%</p>
                </div>
              
            </div>
          </div>
        </div>
      </div>
      
    )
}
const mapStateToProps = ({weatherData}) => ({weatherData})
export default connect(mapStateToProps, null)(WeatherBox)
