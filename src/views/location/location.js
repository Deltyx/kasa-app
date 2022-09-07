import React from "react";
import { Navigate, useParams } from "react-router-dom";
import Slideshow from "../../components/slideshow/slideshow";

import Stars from "../../components/stars/stars";
import Tag from "../../components/tag/tag"
import Avatar from "../../components/avatar/avatar";
import Dropdown from "../../components/dropdown/dropdown";

import { useEffect, useState } from 'react';

import './location.scss';

export default function Location() {

    const [location, setLocation] = useState([]);  

    let params = useParams(); // retroune un objet avec id 

    useEffect(() => {
        
        fetch('../logements.json', 
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
              
                const filteredLocation = data.find(loc => loc.id === params.id)
                setLocation(filteredLocation)
            })
    }, [])

    if(location == undefined ) {
        console.log(location)
        return <Navigate to="/notfound" />
    }

    return (
        <div className="location-container">
            <Slideshow img={location.pictures && location.pictures}/>
            <div className="presentation">
                <div className="location-header">
                    <div>
                        <h2 className="location-header-title">{location.title && location.title}</h2>
                        <p className="location-header-subtitle">{location.location && location.location}</p>
                    </div>

                    <div className="tag-container">
                        {location.tags && location.tags.map((tag) => <Tag content={tag} key={tag}/>)}
                    </div>
                </div>
                <div className="location-subheader">
                    <div>
                        <Avatar name={location.host && location.host.name} picture={location.host && location.host.picture}/>
                    </div>

                    <div className="stars-container">
                        <Stars rating={location.rating && location.rating} key={location.id && location.id}/>
                    </div>
                </div>
            </div>
            <div className="dropdown-section">
                <Dropdown style="dropdown-container" title="Description" content={location.description && location.description}/>
                <Dropdown 
                    style="dropdown-container" title="Équipements" 
                    content={
                        <ul>
                            {location.equipments && location.equipments.map((equipments) => <li key={equipments}>{equipments}</li>)}
                        </ul>
                }/>
            </div>
        </div>
    )
}