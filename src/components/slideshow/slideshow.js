import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './slideshow.scss';

export default function Slideshow(props) {

    const [slideIdx, setSlideIdx] = useState(0);

    const onNext = () => {
        if(slideIdx === props.img.length - 1){
            setSlideIdx(0)
        } else {
            setSlideIdx(slideIdx + 1)
        }
    }

    const onPrev = () => {
        if(slideIdx === 0){
            setSlideIdx(props.img.length - 1)
        } else {
            setSlideIdx(slideIdx - 1)
        }
    }

    return (
        <div className="slideshow">
            <div className="slideshow-container">
            {props.img.map((picture) => < img className='slideshow-container-img' src={picture} key={picture}/>)}
            </div>
            <div className='slideshow-controls'>
                <FontAwesomeIcon icon={faChevronLeft} className='chevron' onClick={onPrev}/>
                <FontAwesomeIcon icon={faChevronRight} className='chevron' onClick={onNext}/>
            </div>
            <div className='slideshow-idx'>{slideIdx + 1} / {props.img.length}</div>
        </div>
    );
};