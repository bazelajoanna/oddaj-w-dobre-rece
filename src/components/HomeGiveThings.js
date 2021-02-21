import React from 'react';
import {
    Link,
  } from 'react-router-dom';
import '../scss/homeGiveThings.scss'

export default function HomeGiveThings() {
    return (
        <div className='home-give-things'>
            <Link to='/logowanie' className='home-give-things__text'>oddaj<br/>rzeczy</Link>
        </div>
    )
}