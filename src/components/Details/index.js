import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getWeatherByCity } from "../../actions";
import WeatherBox from "../WeatherBox";
import "./styles.scss";
import {CSSTransition} from 'react-transition-group'

const Details = ({ searchCity, loading }) => {
  let { cityId } = useParams();
  useEffect(() => {
    searchCity(cityId);
  }, [cityId]);
  
  return (
      <CSSTransition in={loading} classNames="loading">
        <div className="details">
        <div>
            <h1 className="title">
            <span>Current</span> Weather
            </h1>
        </div>
        <WeatherBox />
        </div>
     </CSSTransition>
  );
};
const mapDispatchToProps = (dispatch) => ({
  searchCity: (name) => dispatch(getWeatherByCity(name)),
});
const mapStateToProps = ({ loading }) => ({
  loading,
});
export default connect(mapStateToProps, mapDispatchToProps)(Details);
