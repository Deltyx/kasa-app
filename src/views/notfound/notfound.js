import React from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
//import { BrowserRouter as Router, Link } from "react-router-dom";
import './notfound.scss';

export default function NotFound() {
    return (
        <div className="container">
            <Navbar />
            <div className="notfound">
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <div>Retourner sur la page d'accueil</div>
            </div>
            <Footer />
        </div>
    )
}