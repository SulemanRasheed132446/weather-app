import React, { useState } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group';
import search from '../../assets/search.svg'
import close from '../../assets/close.svg'
import './styles.scss'
import { useHistory, useParams } from 'react-router-dom';
import { toggleSearch } from '../../actions';
const SearchBar = ({searched, toggleSearchBar}) => {
    let {cityId} = useParams();
    const [cityName, setCityName] =  useState(cityId ? cityId : '')
    const history= useHistory()
    const cityNameHandler =(e) => setCityName(e.target.value)

    const searchCity = () => history.push(`/city?name=${cityName}`);
    return (
        <div>
        <CSSTransition in={!searched} timeout={400} classNames="my-node" unmountOnExit>
        <div className="flex-row justify-center">
            <div className="search-bar flex-row align-center">
                <input value={cityName} onChange={cityNameHandler}/>
                <img src={search} alt="search icon" onClick={searchCity}/>
                <img src={close} alt="search icon" onClick={toggleSearchBar}/>

            </div>
        </div>
      </CSSTransition>
      </div>
        
    )
}
const mapStateToProps =(state) => ({
    searched:state.weather.searched
})
const mapDispatchToProps = (dispatch) => ({
    toggleSearchBar: () => dispatch(toggleSearch())
})
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
