import { useEffect, useState } from 'react'
import './filme-info.css'
import { useParams, useHistory } from 'react-router-dom'
import api from '../../services/api'
import { toast } from 'react-toastify'

export default function Filme(){

    const {id} = useParams()
    const history = useHistory()

    const [filme, setFilme] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        async function loading(){
            const response = await api.get(`r-api/?api=filmes/${id}`)

            if(response.data.length === 0){
                //Tentou acessar com id inexistente
                history.replace('/') // Retorno para a pagina home
                return
            }

            setFilme(response.data)
            setLoading(false)
        }

        
        loading()

        

    }, [history, id])

    function salvar(){
        
        const lista = localStorage.getItem('filmes')

        let filmeSalvo = JSON.parse(lista) || []

        // Verificar se o filme está salvo
        const hasFilme = filmeSalvo.some((salvo) => salvo.id === filme.id)

        if(hasFilme){
            toast.warn('ESTE FILME JÁ ESTÁ SALVO')
            return
            //Exibe o alerta e para a execução 
        }

        // Salva o filme
        filmeSalvo.push(filme)
        localStorage.setItem('filmes', JSON.stringify(filmeSalvo))
        toast.success('Filme Salvo com sucesso')
    }

    if(loading){
        return(
        <div className="filme-info">
            <h3>Carregando Filme</h3>
        </div>
        )
    }

    return(
        <div className="filme-info">
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={filme.nome}/>

            <h3>Sinopse</h3>
            {filme.sinopse}

            <div className="botoes">
                <button onClick={salvar}>Salvar</button>

                <button>
                    <a target="blank" href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}>
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}