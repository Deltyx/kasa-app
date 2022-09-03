import Thumb from '../../components/thumb/thumb.js';
import Banner from '../../components/banner/banner.js';

import Home_Banner from '../../img/home_banner.png'

import './home.scss'

import { useEffect, useState } from 'react';

export default function Home() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetch('logements.json',
        {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data)
                setLocations(data)
            })
    }, [])

    return (
        <div className='home-container'>
            <Banner img={Home_Banner} title="Chez vous, partout et ailleurs"/>
            <div className='thumbnail-grid'>
                {locations.map((location) => <Thumb key={location.id} location={location}/>)}
            </div>
        </div>
    );
}