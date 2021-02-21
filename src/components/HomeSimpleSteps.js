import React from 'react';
import tshirt from '../assets/Icon-1.svg';
import bag from '../assets/Icon-2.svg';
import magnifier from '../assets/Icon-3.svg';
import rondo from '../assets/Icon-4.svg';
import '../scss/homeSimpleSteps.scss'

export default function HomeSimpleSteps() {
    return (
        <div className='container home-simple-steps'>
            <div className='content home-simple-steps__content'>
                <div className='home-simple-steps__column'>
                    <img src={tshirt} alt='tshirt' className='home-simple-steps__img'></img>
                    <h1 className='home-simple-steps__header'>Wybierz rzeczy</h1>
                    <div className='home-simple-steps__line'></div>
                    <p className='home-simple-steps__description'>ubrania, zabawki,<br/>sprzęt i inne</p>
                </div>
                <div className='home-simple-steps__column'>
                    <img src={bag} alt='tshirt' className='home-simple-steps__img'></img>
                    <h1 className='home-simple-steps__header'>Spakuj je</h1>
                    <div className='home-simple-steps__line'></div>
                    <p className='home-simple-steps__description'>skorzystaj z<br/>worków na śmieci</p>
                </div>
                <div className='home-simple-steps__column'>
                    <img src={magnifier} alt='tshirt' className='home-simple-steps__img'></img>
                    <h1 className='home-simple-steps__header'>Zdecyduj komu<br/>chcesz pomóc</h1>
                    <div className='home-simple-steps__line'></div>
                    <p className='home-simple-steps__description'>wybierz zaufane<br/>miejsce</p>
                </div>
                <div className='home-simple-steps__column'>
                    <img src={rondo} alt='tshirt' className='home-simple-steps__img'></img>
                    <h1 className='home-simple-steps__header'>Zamów kuriera</h1>
                    <div className='home-simple-steps__line'></div>
                    <p className='home-simple-steps__description'>kurier przyjedzie<br/>w dogodnym terminie</p>
                </div>
            </div>
        </div>
    )
}