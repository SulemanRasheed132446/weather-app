import React, { useEffect, useMemo } from "react";
import { connect } from "react-redux";
import {   useLocation } from "react-router-dom";
import { getWeatherByCity } from "../../actions";
import WeatherBox from "../WeatherBox";
import ForecastBox from "../ForecastBox";
import {CSSTransition} from 'react-transition-group'
import "./styles.scss";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Details = ({ searchCity, searched }) => {
  let query = useQuery(searchCity);
  const cityName = useMemo(() => query.get('name'), [query.get('name')])
  useEffect(() => {
    if(cityName) {
      searchCity(cityName);

    }
  }, [cityName, searchCity]);
  
  if(!cityName) {
    return null;
  }
  return (
      <CSSTransition in={searched} timeout={300} classNames="">

    <div className="details">
      <div>
        <h1 className="title">
          <span>Current</span> Weather
        </h1>
      </div>
      <WeatherBox />
     <ForecastBox />
     </div>
      </CSSTransition>
  );
};
const mapDispatchToProps = (dispatch) => ({
  searchCity: (name) => dispatch(getWeatherByCity(name)),
});
const mapStateToProps = (state) => ({
  searched: state.weather.searched,
});
export default connect(mapStateToProps, mapDispatchToProps)(Details);
