import React, { useEffect, useState } from "react";
import './home.css'
import api from '../../services/api'
import { Link } from "react-router-dom";

export default function Home() {

  const [filmes, setFilmes] = useState([])

  useEffect(() => {

    async function loading(){
      const response = await api.get('r-api/?api=filmes')
      
      setFilmes(response.data)
    }

    loading()
  }, [])

  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme) => {
          return(
            <article key={filme.id}>
              <strong>{filme.nome}</strong>
              <img alt="imagem" src={filme.foto}/>

              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          )
        })

        }
      </div>
    </div>
  );
}