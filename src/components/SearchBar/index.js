import React, { useState } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group';
import search from '../../assets/search.svg'
import close from '../../assets/close.svg'
import './styles.scss'
import { getWeatherByCity } from '../../actions';
const SearchBar = ({searched, searchCityWeather}) => {
    const [cityName, setCityName] =  useState('')
    const cityNameHandler =(e) => setCityName(e.target.value)

    const clearCityName = () => setCityName('');
    const searchCity = () => searchCityWeather(cityName);
    return (
        <div>
        <CSSTransition in={!searched} timeout={400} classNames="my-node" unmountOnExit>
        <div className="flex-row justify-center">
            <div className="search-bar flex-row align-center">
                <input value={cityName} onChange={cityNameHandler}/>
                <img src={search} alt="search icon" onClick={searchCity}/>
            </div>
        </div>
      </CSSTransition>
      </div>
        
    )
}
const mapStateToProps =({searched}) => ({
    searched
})
const mapDispatchToProps = (dispatch) =>({
 searchCityWeather: (name) => dispatch(getWeatherByCity(name))
})
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
