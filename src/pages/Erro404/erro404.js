import React from "react";
import './erro404.css'
import { Link } from "react-router-dom";

export default function Erro404(){
    return(
        <div className="not-found">
            <h1>Erro 404</h1>
            <h3>Page Not Found</h3>

            <Link to="/">Retornar ao Inicio</Link>
        </div>   
    )
}