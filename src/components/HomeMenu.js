import React from 'react';
import {
    Link
} from 'react-scroll';

import '../scss/homeMenu.scss';

const HomeMenu = () => {
    return (
        <nav className='home-menu'>
            <Link to='/' className='home-menu__text home-menu__start'>Start</Link>
            <Link className='home-menu__text' to='simpleSteps' duration='1000' smooth={true}>O co chodzi?</Link>
            <Link className='home-menu__text' to='threeColumns' duration='1000' smooth={true}>O nas</Link>
            <Link className='home-menu__text' to='foundations' duration='1000' smooth={true}>Fundacja i organizacje</Link>
            <Link className='home-menu__text' to='contact' duration='1000' smooth={true}>Kontakt</Link>
        </nav>
    )
}

export default HomeMenu;