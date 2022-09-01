import React from "react";
import { useParams } from "react-router-dom";
import Slideshow from "../../components/slideshow/slideshow";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import Stars from "../../components/stars/stars";
import Tag from "../../components/tag/tag"
import Avatar from "../../components/avatar/avatar";

import { useEffect, useState } from 'react';

import './location.scss';

export default function Location() {

    const [location, setLocation] = useState([]);  

    let id = useParams();

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
                setLocation(data.find(loc => loc.id === id))
                /*
                for (let i=0; i<data.length; i++){
                    if (data[i].id === id){
                        setLocation(data[i])
                    }
                }
                */
            })
    }, [])

    return (
        <div className="container">
            <Navbar />
            <Slideshow img={location.pictures}/>
            <div className="presentation">
                <div className="location-header">
                    <div>
                        <h2 className="location-header-title">{location.title}</h2>
                        <p className="location-header-subtitle">{location.location}</p>
                    </div>

                    <div className="tag-container">
                        {location.tags.map((tag) => <Tag content={tag} key={tag}/>)}
                    </div>
                </div>
                <div className="location-subheader">
                    <div>
                        <Avatar name={location.host.name} picture={location.host.picture}/>
                    </div>

                    <div className="stars-container">
                        <Stars rating={location.rating} key={location.id}/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}