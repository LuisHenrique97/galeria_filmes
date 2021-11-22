import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import './favoritos.css'
import { toast } from "react-toastify";

export default function Favoritos(){

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const listaFilmes = localStorage.getItem('filmes');
        setFilmes(JSON.parse(listaFilmes) || []);
    }, [])

    function handleDelete(id){
        let filtroFilmes = filmes.filter((item) => {
            return(item.id !== id)
        })

        setFilmes(filtroFilmes)
        localStorage.setItem('filmes', JSON.stringify(filtroFilmes))
        
        toast.success('Filme Excluido')

    }

    return(
        <div id="favoritos">
            <h1>Favoritos</h1>
            {filmes.length === 0 && 
                <span>Nenhum Filme Salvo</span>
            }

            <ul>
               {filmes.map((item) => {
                   return(
                       <li key={item.id}>
                           <span>{item.nome}</span>

                           <div className="botoes">
                                <Link className="link" to={`/filme/${item.id}`}>Detalhes</Link>
                                <button onClick={() => handleDelete(item.id)}>Excluir</button>
                           </div>
                       </li>
                   )
               })} 
            </ul>
        </div>
    )
}