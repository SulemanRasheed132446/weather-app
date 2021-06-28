import React from "react";
import ForecastBox from "../ForecastBox";
import WeatherBox from "../WeatherBox";
import styles from "./styles.scss";
import SearchBar from "../SearchBar";
import SearchProgress from "../SearchProgress";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

const WeatherDetails = () => {
  return (
    <div className="container weather-details">
        <SearchBar/>
        <Switch >
          <Route path="/" exact>
            Hello
          </Route>
          <Route path="/city/:cityId">
           Hi
          </Route>
        </Switch>
    </div>
  );
};

export default WeatherDetails;
