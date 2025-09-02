import './SearchPage.scss'
import {BotonComponent, CategoriaComponent} from '../../components/PulsableComponente/PulsableComponent.jsx'
import {v4 as uuidv4} from "uuid";
import OneSearchResult from "../../components/OneSearchResult/OneSearchResult.jsx";
import {useState, useEffect} from "react";
export default function SearchPage({series}) {
    const caracteres = [
        'a','b','c','d','e','f','g','h','i','j','k','l','m',
        'n','o','p','q','r','s','t','u','v','w','x','y','z',
        '1','2','3','4','5','6','7','8','9','0'
    ];
    const categorias = [
        "Solo para bichos raros",
        "Qué ver según tu signo del Zodiaco",
        "Comedia",
        "Acción",
        "Para toda la familia",
        "Terror",
        "Documentales",
        "Animes",
        "Ciencia ficción",
        "Deportes",
        "Dramas",
        "Españoles",
        "Europeas",
        "Extranjeras",
        "Fantásticas",
        "Monólogos de humor",
        "Música y musicales",
        "Premios Emmy de de Netflix",
        "Realities",
        "Románticas",
        "Thrillers",
        "WWE"
    ];
    const [inputValue,setInputValue] = useState('');
    const [seriesLista, setSeries] = useState(series);
    const agregarCaracter = ({letra}) => {
        setInputValue((prev) => prev + letra);
    }

    useEffect(
        () => {
            fetch(`http://localhost:5000/api/series?query=${encodeURIComponent(inputValue)}`)
                .then(
                    response => {
                        if (!response.ok) throw new Error("Error en la solicitud");
                        return response.json();
                    }
                )
                .then(data => setSeries(data))
                .catch(
                    error => {
                        console.error('Error al buscar las series:', error);
                        setSeries([]);
                    }
                );
        }
        , [inputValue]
    );

    return (
        <div className="search-div">
            <div className="buscador-div">
                <div className="seccion-teclado">
                    <svg className="svg-style" width="98" height="30" viewBox="0 0 24 24" fill="white"
                    onClick = {() => setInputValue((prev) => prev+ ' ')}>
                        <path d="M20.5 11V13C20.5 13.1381 20.3881 13.25 20.25 13.25H3.75C3.61193 13.25 3.5 13.1381 3.5 13V11C3.5 10.5858 3.16421 10.25 2.75 10.25C2.33579 10.25 2 10.5858 2 11C2 11.4444 2 12.1111 2 13C2 13.9665 2.7835 14.75 3.75 14.75H20.25C21.2165 14.75 22 13.9665 22 13V11C22 10.5858 21.6642 10.25 21.25 10.25C20.8358 10.25 20.5 10.5858 20.5 11Z" fill="white"/>
                    </svg>
                    <svg className="svg-style" width="98" height="30" viewBox="0 0 512 512" fill="currentColor"
                         onClick = {() => setInputValue((prev) => prev.slice(0, -1))}>
                        <path d="M144,96,32,256,144,416H448V96ZM359.3,322.34,336.67,345l-65-65-65,65L184,322.34l65-65-65-65,22.63-22.63,65,65,65-65,22.63,22.63-65,65Z"/>
                    </svg>
                    {
                        caracteres.map((letra, index) => (<BotonComponent key={index} letra={letra} onClick={agregarCaracter} />))
                    }
                    <div className='categoria-div'>
                        {
                            categorias.map((categor, index) => (<CategoriaComponent key={categor} categoria={categor}/>))
                        }
                    </div>
                </div>
            </div>
            <div className="resultados-div">
                {
                    inputValue.trim() === '' ? (<p className="_p">Recomendaciones basadas en tus búsquedas</p>) : (
                        <>
                            <svg
                                className="lupa-svg"
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z"
                                    fill="currentColor"
                                />
                            </svg>
                            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                        </>
                    )
                }
                <div className="results-list-div">
                    {
                        Array.isArray(seriesLista) && seriesLista.length > 0 ?
                            seriesLista.map((serie, index) => (<OneSearchResult key={serie.title} serie={serie}/>))
                            : (<p>No se pudieron cargar los datos necesarios</p>)
                    }
                </div>
            </div>
        </div>
    );
}