import React from 'react'
import styles from "./styles.module.scss";
import rain from "../../assets/rain.svg";
import humidity from "../../assets/humidity.svg";
import wind from "../../assets/wind.svg";
const WeatherBox = () => {
    return (
        <div style={{ color: "black" }}>
        <h2 className={styles.title}>
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
            <h1 className="title">21</h1>
            <span>&#8451;</span>
          </div>
          <div>
            <h1>Lahore</h1>
          </div>
          <div className="flex-row justify-between container">
            <p className="container">
              Feels like: <span>32</span>
            </p>
            <p className="container">
              Min Temp: <span> 45</span>
            </p>
            <p className="container">
              Max Temp: <span>28</span>
            </p>
          </div>
          <div className="flex-row justify-between container">
            <div className="flex-row justify-between">
              <div>
                <img src={wind} width={80} />
              </div>
              <div className="container">
                <h2>Wind</h2>
                <p>13 mph</p>
              </div>
            </div>
            <div className="flex-row justify-between">
                <div>
                  <img src={humidity} width={80} />
                </div>
                <div className="container">
                  <h2>Humidity</h2>
                  <p>46%</p>
                </div>
              
            </div>
          </div>
        </div>
      </div>
      
    )
}

export default WeatherBox
