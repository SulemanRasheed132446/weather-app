import React from "react";
import ForecastBox from "../ForecastBox";
import WeatherBox from "../WeatherBox";
import styles from "./styles.scss";
import SearchBar from "../SearchBar";
const WeatherDetails = () => {
  return (
    <div className="container weather-details">
        <SearchBar/>
    </div>
  );
};

export default WeatherDetails;
