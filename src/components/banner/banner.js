import React from "react";
import './banner.scss';

export default function Banner(props) {
    return (
        <div className='banner-container'>
            <img src={props.img} alt='Home Img' className='banner-img' />
            <div className='banner-title'>{props.title}</div>
            <div className="banner-bg"></div>
        </div>
    );
};
