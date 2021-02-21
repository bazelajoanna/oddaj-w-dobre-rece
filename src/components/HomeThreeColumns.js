import React from 'react';

import '../scss/homeThreeColumns.scss';

const HomeThreeColumns = () => {
    return (
        <div className='container home-three-columns' id='threeColumns'>
            <div className='content home-three-columns__content'>
                <div className='home-three-columns__column'>
                    <h1 className='home-three-columns__number'>10</h1>
                    <p className='home-three-columns__item'>oddanych worków</p>
                    <p className='home-three-columns__decsription'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
                <div className='home-three-columns__column'>
                    <h1 className='home-three-columns__number'>5</h1>
                    <p className='home-three-columns__item'>wspartych organizacji</p>
                    <p className='home-three-columns__decsription'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
                <div className='home-three-columns__column'>
                    <h1 className='home-three-columns__number'>7</h1>
                    <p className='home-three-columns__item'>zorganizowanych zbiórek</p>
                    <p className='home-three-columns__decsription'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
            </div>
        </div>
    )
}

export default HomeThreeColumns;