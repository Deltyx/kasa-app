import React from "react";
import logo from "../../img/logo_white.svg"
import './footer.scss';

export default function Footer() {
    return (
        <footer className="footer-container">
            <img src={logo} alt="Logo KASA blanc"/>
            <span className="footer-reserved">© 2020 Kasa. All rights reserved</span>
        </footer>
    );
};