import React from "react";

import "./styles.scss";
import SearchBar from "../SearchBar";
import Details from '../Details'
import SearchProgress from "../SearchProgress";
import InfoBox from "../InfoBox"
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
          <InfoBox/>
          </Route>
          <Route path="/city">
          <SearchBar/>
           <Details/>
          </Route>
          <Route path="/error">
          <SearchBar/>
          <InfoBox/>

          </Route>
        </Switch>
    </div>
  );
};

export default WeatherDetails;
