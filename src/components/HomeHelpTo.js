import React, {useState, useEffect} from 'react';
import '../scss/homeHelpTo.scss';
import decoration from '../assets/Decoration.svg';
import _ from 'lodash'

export default function HomeHelpTo() {

    const [isActive, setIsActive] = useState({foundation: true, organization: false, local: false, selected: 'foundations'})
    const [data, setData] = useState({'foundations': [], 'organizations': [], 'local collections': []});



    const API = `${process.env.PUBLIC_URL + '/db.json'}`;
    useEffect(() => {
        fetch(`${API}/data`)
            .then(response => response.json())
            .then(data => {setData(data)})
            .catch((error) => {console.log(error)})
    }, [])

    const [page, setPage] = useState({currentPage: 1, itemsPerPage: 3});

    const handleClick = (e) => {
        setPage({currentPage: Number(e.target.id), itemsPerPage: 3});
    }

    const indexOfLastItem = page.currentPage * page.itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - page.itemsPerPage;

    const currentNames = data[isActive.selected].slice(indexOfFirstItem, indexOfLastItem);
    const pageNumbers = [];
    for (let i = 1; i<= Math.ceil((_.map(data[isActive.selected], 'id')).length / page.itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className='home-help-to__content' id='foundations'>
            <h1 className='home-help-to__header'>Komu pomagamy?</h1>
            <img src={decoration} alt='decoration' className='home-help-to__decoration'/>
            <div className='home-help-to__columns'>
                <h2 onClick={() => {setIsActive({foundation: true, organization: false, local: false, selected:'foundations'}); setPage({currentPage: 1, itemsPerPage: 3})}}
                    className={`home-help-to__column${isActive.foundation ? ' home-help-to__column--active' : ''}`}
                >Fundacjom</h2>
                <h2 onClick={() => {setIsActive({foundation: false, organization: true, local: false, selected:'organizations'}); setPage({currentPage: 1, itemsPerPage: 3})}}
                    className={`home-help-to__column${isActive.organization ? ' home-help-to__column--active' : ''}`}
                >Organizacjom<br/>pozarządowym</h2>
                <h2 onClick={() => {setIsActive({foundation: false, organization: false, local: true, selected:'local collections'}); setPage({currentPage: 1, itemsPerPage: 3})}}
                    className={`home-help-to__column${isActive.local ? ' home-help-to__column--active' : ''}`}
                >Lokalnym<br/>zbiórkom</h2>
            </div>
            <div className='home-help-to__description'>
                {currentNames.length && currentNames.map(el => {
                   return <div>
                        <h1 className='home-help-to__description-text'key={el.id}>{el.description}</h1>
                    </div>
                })}
            </div>
            <div className="home-help-to__list-container">
                {!_.isEmpty(data) && currentNames.map((el, id) => {
                    return <>
                            <div className='home-help-to__list'>
                                <div className='home-help-to__name-goal'>
                                    <h1 className='home-help-to__name' key={id} >{el.name}</h1>
                                    <p className='home-help-to__goal' key={id+1}>{el.goal}</p>
                                </div>
                                <div className='home-help-to__items' key={id}>{el.items}</div>
                            </div>
                        </>
                    })}
            </div>
            <ul className='home-help-to__pages'>
                {pageNumbers.length >=2 ? pageNumbers.map(number => {
                    return <li key={number} id={number} onClick={e => handleClick(e)} className={`home-help-to__pages-numbers${number === page.currentPage ? ' home-help-to__pages-numbers--active' : ''}`}>
                        {number}
                    </li>
                }): ''}
            </ul>
        </div>
    )
}
