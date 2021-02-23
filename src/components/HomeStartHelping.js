import React from 'react';
import {
    Link
  } from 'react-router-dom';

import '../scss/homeStartHelping.scss';
import decoration from '../assets/Decoration.svg';

const HomeStartHelping = () => {
    return (
        <div className='home-start-helping'>
            <p className='home-start-helping__text'>Zacznij pomagać!<br/>
            Oddaj niechciane rzeczy w zaufane ręce
            </p>
            <img src={decoration} className='home-start-helping__decoration' alt='decoration'></img>
            <div className='home-start-helping__boxes'>
                <div className='home-start-helping__box'>
                    <Link to={process.env.PUBLIC_URL + '/logowanie'} className='home-start-helping__box-text'>Oddaj<br/>rzeczy</Link>
                </div>
                <div className='home-start-helping__box'>
                    <Link to={process.env.PUBLIC_URL + '/logowanie'} className='home-start-helping__box-text'>Zorganizuj<br/>zbiórkę</Link>
                </div>
            </div>
        </div>
    )
}

export default HomeStartHelping;