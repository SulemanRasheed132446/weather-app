import React, { useState } from 'react'
import search from '../../assets/search.svg'
import './styles.scss'
import { getWeatherByCity } from '../../actions';
import { connect } from 'react-redux';
const Header = ({fetchWeatherByCity}) => {
    const [cityName, setCityName] = useState('');
    const cityNameHandler = (e) => setCityName(e.target.value);

    const onSearch = () => {
        fetchWeatherByCity(cityName)
    }
    return (
        <div className="flex-row align-center justify-between container header">
            <h1>ARBI <span>WEATHER</span></h1>
            <img src={search} />
        </div>
    )
}
const mapDispatchToProps = (dispatch) => ({
    fetchWeatherByCity : (name) => dispatch(getWeatherByCity(name))
})
export default connect(null, mapDispatchToProps)(Header)
