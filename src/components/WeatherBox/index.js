import React from "react";
import wind from "../../assets/wind.svg";
import humidity from "../../assets/humidity.svg";
import "./styles.scss";
import { connect } from "react-redux";
const WeatherBox = ({ weatherData, loading }) => {
  if (JSON.stringify(weatherData) === "{}") {
    return null;
  }
  return (
      <div className="flex-row justify-center align-center container">
        <div className="flex-row align-center justify-between weather-box container ">
          <div className="flex-col align-center">
            <div className="flex-row">
              <img src={wind} width={70} alt="current weather"/>
              <h1 className="title weather-detail">
                <span>{Math.floor(weatherData.temp)}</span>&#8451;
              </h1>
            </div>
            <h2>{weatherData.cityName}</h2>
          </div>
          <div>
            <table>
              <tbody>
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
              </tbody>
            </table>
          </div>
          <div>
            <div className="flex-row container">
              <img src={wind} width={50} alt="wind"/>
              <div className="weather-detail">
                <h2>Wind</h2>
                <p>{weatherData.windSpeed} mph</p>
              </div>
            </div>
            <div
              className="flex-row container
                  "
            >
              <img src={humidity} width={50} alt="humidity"/>
              <div className="weather-detail">
                <h2>Humidity</h2>
                <p>{weatherData.humidity} %</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
const mapStateToProps = ({ weatherData, loading }) => ({
  weatherData,
  loading,
});
export default connect(mapStateToProps, null)(WeatherBox);
