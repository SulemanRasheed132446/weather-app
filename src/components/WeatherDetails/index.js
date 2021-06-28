import React from "react";

import "./styles.scss";
import SearchBar from "../SearchBar";
import Details from '../Details'
import SearchProgress from "../SearchProgress";
import {
  Switch,
  Route,
} from "react-router-dom";

const WeatherDetails = () => {
  return (
    <div className="container weather-details">
        
        <SearchProgress/>
        <Switch >
          <Route path="/" exact>
          <SearchBar/>
          </Route>
          <Route path="/city/:cityId">
          <SearchBar/>
           <Details/>
          </Route>
        </Switch>
    </div>
  );
};

export default WeatherDetails;
