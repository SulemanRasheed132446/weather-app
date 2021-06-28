import React from "react";
import wind from "../../assets/wind.svg";
import humidity from "../../assets/humidity.svg";
import "./styles.scss";
import { connect } from "react-redux";
import {CSSTransition} from 'react-transition-group'
const WeatherBox = ({weatherData, loading}) => {
  return (
      <CSSTransition in={loading} classNames="loading">
    <div className="flex-row justify-center align-center container">
      <div
        className="flex-row align-center justify-between weather-box container "
        
      >
        <div className="flex-col align-center">
          <div className="flex-row">
            <img src={wind} width={70} />
            <h1 className="title weather-detail">
              <span>{Math.floor(weatherData.temp)}</span>&#8451;
            </h1>
          </div>
          <h2>{weatherData.cityName}</h2>
        </div>
        <div>
            <table>
                <tr>
                    <td>Feels like</td>
                    <td>{Math.floor(weatherData.feels_like)} &#8451;</td>
                </tr>
                <tr>
                    <td>Max Temp</td>
                    <td>{Math.floor(weatherData.temp_max)} &#8451;</td>

                </tr>
                <tr>
                    <td>Min Temp</td>
                    <td>{Math.floor(weatherData.temp_min)} &#8451;</td>

                </tr>
            </table>
         
        </div>
        <div>
          <div className="flex-row container">
            <img src={wind} width={50} />
            <div className="weather-detail">
              <h2>Wind</h2>
              <p>{weatherData.windSpeed} mph</p>
            </div>
          </div>
          <div
            className="flex-row container
                  "
          >
            <img src={humidity} width={50} />
            <div className="weather-detail">
              <h2>Humidity</h2>
              <p>{weatherData.humidity} %</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </CSSTransition>
  );
};
const mapStateToProps = ({weatherData, loading}) => ({
    weatherData
})
export default connect(mapStateToProps)(WeatherBox);
