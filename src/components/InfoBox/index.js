import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import search from '../../assets/search.svg'
import "./styles.scss"
const InfoBox = () => {
    const history = useHistory()
    
    return (
        <div className="flex-col align-center info-box justify-center">
            <img src={search} alt="search" width="100"/>
            <ul>
                {history.location.pathname === "/" ? (
                    <>
                    <li>You can get the  city weather</li>
                    <li>You can get the forecast of city weather</li>
                    </>
                    
                ): <li>You entered an invalid city name</li>}
            </ul>
        </div>
    )
}
const mapStateToProps = (state) => ({
    weatherData:state.weather.weatherData,loading: state.weather.loading
})
export default connect(mapStateToProps, null)(InfoBox)
