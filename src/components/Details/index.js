import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getWeatherByCity } from "../../actions";
import WeatherBox from "../WeatherBox";
import {CSSTransition} from 'react-transition-group'
import "./styles.scss";
const Details = ({ searchCity, searched }) => {
  let { cityId } = useParams();
  useEffect(() => {
    searchCity(cityId);
  }, [cityId, searchCity]);
  
  return (
      <CSSTransition in={searched} timeout={300} classNames="">

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
const mapStateToProps = ({ searched }) => ({
  searched,
});
export default connect(mapStateToProps, mapDispatchToProps)(Details);
