import React from 'react';
import '../scss/homeAboutUs.scss'
import decoration from '../assets/Decoration.svg';
import signature from '../assets/Signature.svg';

export default function HomeAboutUs() {
    return (
        <div className='home-about-us__content'>
            <div className='home-about-us__text'>
                <h1 className='home-about-us__header'>O nas</h1>
                <img src={decoration} alt='decoration' className='home-about-us__decoration'/>
                <p className='home-about-us__description'>Nori grape silver beet broccoli kombu beet<br/>greens fava bean potato quandong celery.<br/>Bunya nuts black-eyed pea prairie turnip leek<br/>lentil turnip greens parsnip.</p>
                <img src={signature} alt='signature' className='home-about-us__signature'/>
            </div>
            <div className='home-about-us__image'/>
        </div>
    )
}