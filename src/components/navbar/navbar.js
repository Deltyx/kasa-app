import React, { Link } from "react";
import logo from "../../img/kasa_logo.jpg"
import './navbar.scss';

export default function Navbar() {
    return (
        <nav className="navbar-container">
            <img className="navbar-logo" src={logo} alt={logo}></img>
            <div className="navbar-links">
                <span className="navbar-home">Accueil</span>
                <span className="navbar-about">A Propos</span>
            </div>
        </nav>
    );
};