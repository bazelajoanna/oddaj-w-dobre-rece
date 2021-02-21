import React from 'react';
import decoration from '../assets/Decoration.svg';
import '../scss/homeSimpleStepsText.scss'

export default function HomeSimpleStepsText() {
    return (
        <div className='home-simple-steps-text' id='simpleSteps'>
            <h1 className='home-simple-steps-text__header'>Wystarczą 4 proste kroki</h1>
            <img src={decoration} alt='decoration' className='home-simple-steps-text__decoration'></img>
        </div>
    )
}