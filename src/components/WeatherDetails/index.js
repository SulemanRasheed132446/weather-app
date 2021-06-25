import React from "react";
import WeatherBox from "../WeatherBox";
import styles from "./styles.module.scss";

const WeatherDetails = () => {
  return (
    <div className={styles.weatherDetails}>
        <WeatherBox/>
    <div>
    <h2 className="title secondary">
          Weather <span>Forecast</span>
      </h2>
      
    </div>
    </div>
  );
};

export default WeatherDetails;
