import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getWeatherByCity } from "../../actions";
import "./styles.scss";
const Details = ({ searchCity, searched }) => {
  let { cityId } = useParams();
  useEffect(() => {
    searchCity(cityId);
  }, [cityId]);
  if (!searched) {
    return null;
  }
  return (
    <div className="details">
      <div className="flex-row justify-between align-center">
        <div>
          <div>
            <h1 className="title">
              <span>Weather</span> Details
            </h1>
          </div>
        </div>
        <div>Forecast</div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  searchCity: (name) => dispatch(getWeatherByCity(name)),
});
const mapStateToProps = ({ searched }) => ({
  searched,
});
export default connect(mapStateToProps, mapDispatchToProps)(Details);
