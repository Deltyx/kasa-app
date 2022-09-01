import React from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import { Link } from "react-router-dom";
import './notfound.scss';

export default function NotFound() {
    return (
        <div className="container">
            <Navbar />
            <div className="notfound">
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link className="link" to="/">Retourner sur la page d'accueil</Link>
            </div>
            <Footer />
        </div>
    )
}