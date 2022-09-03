import React from "react";

import { Link } from "react-router-dom";
import './notfound.scss';

export default function NotFound() {
    return (
        <div className="notfound-container">
            <div className="notfound">
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link className="link" to="/">Retourner sur la page d'accueil</Link>
            </div>
        </div>
    )
}