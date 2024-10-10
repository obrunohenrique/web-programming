import { useState } from "react";
import Header from "../components/Header";
import instrumentoslist from "../data/instrumentos-list.ts";

function Instrumentos() {

    const [index, setIndex] = useState(0)
    const [mostrar, setMostrar] = useState(false)

    function handleClick() {
        setIndex(index + 1)
    }

    function handleClicktwo() {
        setMostrar(!mostrar)
    }

    let instrumento = instrumentoslist[index]

    return(
        <>
            <Header/>

            <img src={instrumento.url} alt={instrumento.nome} 
            width={300}
            />
            <h1>{instrumento.nome}</h1>
            <h2>R$ {instrumento.preco}</h2>
            
            <button onClick={handleClicktwo}>Mostrar {mostrar ? "menos" : "mais"}</button> <br />
            {mostrar && instrumento.descricao} <br />

            <button onClick={handleClick}>
                Próximo
            </button>
        </>
    )
}

export default Instrumentos;