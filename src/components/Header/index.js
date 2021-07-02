import React from 'react'
import search from '../../assets/search.svg'
import './styles.scss'
import {toggleSearch } from '../../actions';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

const Header = ({toggleSearchBar, searched }) => {
    useEffect(() => {toggleSearchBar()},[toggleSearchBar])
    return (
        <div className="flex-row align-center justify-between container header">
            <h1>ARBI <span>WEATHER</span></h1>
            <CSSTransition in={searched} timeout={400} classNames="my-node" unmountOnExit>

                <img src={search} onClick={toggleSearchBar} alt="search icon"/>
            </CSSTransition>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => ({
    toggleSearchBar: () => dispatch(toggleSearch())
})
const mapStateToProps = (state) => ({
    searched:state.weather.searched
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)
