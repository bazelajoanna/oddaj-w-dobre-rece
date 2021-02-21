import React from 'react';
import HomeHeader from './HomeHeader';
import HomeMenu from './HomeMenu';
import decoration from '../assets/Decoration.svg';

import '../scss/login.scss';

export default function Logout() {
    return (
        <div className='login__content'>
            <HomeHeader></HomeHeader>
            <HomeMenu></HomeMenu>
            <div className='login__form'>
                <h1 className='form__header'>Wylogowanie nastąpiło pomyślnie!</h1>
                <img src={decoration} alt='decoration' className='login__decoration'/>
                <button className='form__button form__button--login button--homePage'>Strona główna</button>
            </div>
        </div>
    )
}
