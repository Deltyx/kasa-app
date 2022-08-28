import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Slideshow from "../../components/slideshow/slideshow";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";

import './location.scss';

export default function Location() {

    const [location, setLocation] = useState({tags:[], equipments:[], pictures:[], rating:'', host:{'name':'', 'picture':''}});

    let { id } = useParams();

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
                for (let i=0; i<data.length; i++){
                    if (data[i].id == id){
                        setLocation(data[i])
                        console.log(data[i])
                    }
                }
                console.log(data)
                console.log(location)
            })
    }, [])

    return (
        <div className="container">
            <Navbar />
                <Slideshow img={location.pictures}/>
            <Footer />
        </div>
    )
}