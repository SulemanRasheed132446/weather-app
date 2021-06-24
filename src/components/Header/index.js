import React, { useState } from 'react'
import styles from './styles.module.scss'
import search from '../../assets/search.svg'
const Header = () => {
    const [cityName, setCityName] = useState('');
    const cityNameHandler = (e) => setCityName(e.target.value);
    return (
        <div className={styles.header}>
            <div className="container">
                <div className={styles.searchBox}>
                    <input value={cityName} onChange={cityNameHandler}/>
                    <img src={search} height={25}/>

                </div>
            </div>
            <div className="container"></div>
        </div>
    )
}

export default Header
