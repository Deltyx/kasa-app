import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Slideshow from "../../components/slideshow/slideshow";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import Stars from "../../components/stars/stars";
import Tag from "../../components/tag/tag"

import './location.scss';

export default function Location() {

    const [location, setLocation] = useState({tags:[], equipments:[], pictures:[], rating:'', host:{'name':'', 'picture':''}});

    let { id } = "c67ab8a7"; //useParams();

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
            <div className="presentation">
                <div className="location_header">
                    <div>
                        <h2 className="title_locationpage">{location.title}</h2>
                        <p className="subtitle_locationpage">{location.location}</p>
                    </div>

                    <div className="main-container-tag">
                        {location.tags.map((tag) => <Tag content={tag} key={tag}/>)}
                    </div>
                </div>
                <div className="stars-container">
                    <Stars rating={3} key={1}/>
                </div>
            </div>
            <Footer />
        </div>
    )
}