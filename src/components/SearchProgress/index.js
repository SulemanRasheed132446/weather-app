import React from "react";
import { connect } from "react-redux";
import search from "../../assets/search.svg";
import "./styles.scss";
import { CSSTransition } from "react-transition-group";

const SearchProgress = ({ loading, weatherData }) => {
  
  
    return (
      <div
        style={{
          position: "absolute",
          zIndex: 2,
          left: "30vw",
          top: "50vh",
          width: "40vw",
        }}
        className="flex-col justify-center align-center"
      >
        <CSSTransition in={loading} classNames="loading" timeout={300} unmountOnExit appear>
          <div className="justify-center flex-col align-center">
          <img src={search} alt="search icon"/>
          <p>.....</p>

          </div>
        </CSSTransition>
      </div>
    );
 
  
};
const mapStateToProps = ({ loading, weatherData }) => ({
  loading,
  weatherData,
});
export default connect(mapStateToProps)(SearchProgress);
