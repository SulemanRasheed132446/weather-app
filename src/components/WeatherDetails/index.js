import React from "react";
import ForecastBox from "../ForecastBox";
import WeatherBox from "../WeatherBox";
import styles from "./styles.module.scss";

const WeatherDetails = () => {
  return (
    <div className={styles.weatherDetails}>
        <WeatherBox/>
        <ForecastBox/>
    </div>
  );
};

export default WeatherDetails;
