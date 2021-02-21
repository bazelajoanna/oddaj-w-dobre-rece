import React from 'react';
import {
    Link,
  } from 'react-router-dom';

import '../scss/homeHeader.scss'

const HomeHeader = () => {
    return (
        <div>
            <Link to={process.env.PUBLIC_URL + '/logowanie'} className='home-header__text'>Zaloguj się</Link>
            <Link to={process.env.PUBLIC_URL + '/rejestracja'} className='home-header__text home-header__register'>Załóż konto</Link>
        </div>
    )
}

export default HomeHeader;