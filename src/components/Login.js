import React from 'react';
import HomeHeader from './HomeHeader';
import HomeMenu from './HomeMenu';
import decoration from '../assets/Decoration.svg';

import '../scss/login.scss';

export default function Login() {
    return (
        <div className='login__content'>
            <HomeHeader></HomeHeader>
            <HomeMenu></HomeMenu>
            <div className='login__form'>
                <h1 className='form__header'>Zaloguj się</h1>
                <img src={decoration} alt='decoration' className='login__decoration'/>
                <form className='form'>
                    <div className='form__inputs'>
                        <div className='form__input'>
                            <h1 className='form__title'>Email</h1>
                            <input type='email' className='form__input'/>
                        </div>
                        <div className='form__input'>
                            <h1 className='form__title'>Hasło</h1>
                            <input type='password' className='form__input'/>
                        </div>
                    </div>
                    <div>
                        <button className='form__button'>Załóż konto</button>
                        <button className='form__button form__button--login'>Zaloguj się</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
