import React, { useState } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group';
import search from '../../assets/search.svg'
import './styles.scss'
import { useHistory, useParams } from 'react-router-dom';
const SearchBar = ({searched}) => {
    let {cityId} = useParams();
    const [cityName, setCityName] =  useState(cityId ? cityId : '')
    const history= useHistory()
    const cityNameHandler =(e) => setCityName(e.target.value)

    const searchCity = () => history.push(`/city/${cityName}`);
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

export default connect(mapStateToProps, null)(SearchBar)
