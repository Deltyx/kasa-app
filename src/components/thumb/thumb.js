import React from "react";
import './thumb.scss';
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Thumb(props) {
    return (
        <article className="thumbnail-box">
            <img className="thumbnail-img" src={props.location.pictures[0]}/>
            <h5 className="thumbnail-title">{props.location.title}</h5>
            <div className="thumbnail-bg"></div>
        </article>
    );
};