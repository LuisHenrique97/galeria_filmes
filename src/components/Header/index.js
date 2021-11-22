import React from "react";
import './header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
        <Link className="logo" to="/">Filmes</Link>
        <Link className="favoritos" to="/favoritos">Favoritos</Link>
    </header>
  );
}