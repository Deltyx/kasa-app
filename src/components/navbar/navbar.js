import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/kasa_logo.jpg"
import './navbar.scss';

export default function Navbar() {
    return (
        <nav className="navbar-container">
            <img className="navbar-logo" src={logo} alt={logo}></img>
            <div className="navbar-links">
                <Link to={"/"} className="navbar-home">Accueil</Link>
                <Link to={"/a_propos"} className="navbar-about">A Propos</Link>
            </div>
        </nav>
    );
};