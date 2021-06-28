import React from 'react'
import { connect } from 'react-redux'
import search from '../../assets/search.svg'
const InfoBox = () => {
    return (
        <div>
            <img src={search} alt="search image"/>
            <ul>
                
            </ul>
        </div>
    )
}
const mapStateToProps = ({weatherData, loading}) => ({
    weatherData,loading
})
export default connect(mapStateToProps, null)(InfoBox)
