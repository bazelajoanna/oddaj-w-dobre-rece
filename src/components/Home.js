import React from 'react';
import HomeHeader from './HomeHeader';
import HomeMenu from './HomeMenu';
import HomeStartHelping from './HomeStartHelping';
import HomeThreeColumns from './HomeThreeColumns';
import HomeSimpleStepsText from './HomeSimpleStepsText';
import HomeSimpleSteps from './HomeSimpleSteps';
import HomeGiveThings from './HomeGiveThings';
import HomeAboutUs from './HomeAboutUs';
import HomeHelpTo from './HomeHelpTo';
import HomeContact from './HomeContact';

import HomeHeroImage from '../assets/Home-Hero-Image.jpg';
import '../scss/home.scss'

const Home = () => {
    return (
        <div className='container'>
            <div className='top-section'>
                <img className='top-section__img'src={HomeHeroImage} alt='HomeHeroImage'></img>
                <div className='top-section__menu'>
                    <HomeHeader/>
                    <HomeMenu/>
                    <HomeStartHelping/>
                </div>
            </div>
            <HomeThreeColumns/>
            <HomeSimpleStepsText/>
            <HomeSimpleSteps/>
            <HomeGiveThings/>
            <HomeAboutUs/>
            <HomeHelpTo/>
            <HomeContact/>
        </div>
    )
}

export default Home;