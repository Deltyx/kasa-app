import React from "react";
import './thumb.scss';
import { Link } from "react-router-dom";

export default function Thumb(props) {
    return (
        <Link className="thumbnail-box" to={"/locations/"+props.location.id}>
            <img className="thumbnail-img" src={props.location.pictures[0]} alt={props.location.pictures[0]} />
            <h5 className="thumbnail-title">{props.location.title}</h5>
            <div className="thumbnail-bg"></div>
        </Link>
    );
};