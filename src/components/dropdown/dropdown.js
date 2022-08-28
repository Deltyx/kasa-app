import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './dropdown.scss';

export default function Dropdown(props) {

    const [setActive, setActiveState] = useState("");
    const [setRotate, setRotateState] = useState("dropdown-chevron");

    function toggleDropdown() {
        setActiveState(setActive === "" ? "active" : "");
        setRotateState(
          setActive === "active" ? "dropdown-chevron" : "dropdown-chevron rotate"
        );
      }

    return (
        <div className={props.style}>
            <button className={`dropdown-bar ${setActive}`} onClick={toggleDropdown}>
                <p className="dropdown-title">{props.title}</p>
                <FontAwesomeIcon icon={faChevronDown} className={`${setRotate}`}/>
            </button>
            <div className={`dropdown-content ${setActive}`}>
                {props.content}
            </div>
        </div>
    );
};