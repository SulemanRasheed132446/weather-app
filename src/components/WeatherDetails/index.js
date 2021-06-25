import React from "react";
import WeatherBox from "../WeatherBox";
import styles from "./styles.module.scss";

const WeatherDetails = () => {
  return (
    <div className={styles.weatherDetails}>
        <WeatherBox/>
    <div></div>
    </div>
  );
};

export default WeatherDetails;
