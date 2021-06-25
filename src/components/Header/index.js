import React, { useState } from 'react'
import styles from './styles.module.scss'
import search from '../../assets/search.svg'
import { getWeatherByCity } from '../../actions';
import { connect } from 'react-redux';
const Header = ({fetchWeatherByCity}) => {
    const [cityName, setCityName] = useState('');
    const cityNameHandler = (e) => setCityName(e.target.value);

    const onSearch = () => {
        fetchWeatherByCity(cityName)
    }
    return (
        <div className={styles.header}>
            <div className="container">
                <div className={styles.searchBox}>
                    <input value={cityName} onChange={cityNameHandler}/>
                    <img src={search} height={25} onClick={onSearch}/>

                </div>
            </div>
            <div className="container ">
                <h1 style={{textAlign: 'right', color: '#F3FBFF', fontWeight: 200, }}>Arbi <span style={{fontWeight:600}}>Weather</span></h1>
            </div>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => ({
    fetchWeatherByCity : (name) => dispatch(getWeatherByCity(name))
})
export default connect(null, mapDispatchToProps)(Header)
