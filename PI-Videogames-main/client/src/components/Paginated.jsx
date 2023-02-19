import React from "react";



export default function Paginado({ gamesPerPage, games, paginated }) {
    const pageNumber = []
    // Va a redondear todos los personajes por la cantidad que quiero por pag
    for (let i = 0; i < Math.ceil(games / gamesPerPage); i++) {
        pageNumber.push(i + 1)
    }
    //si tengo el arreglo pageNumber lo mapeo y duvuevlo cada uno de los numeros que devuelva el paginado ↓↓

    return (
        <nav>
            <div >
                {pageNumber?.map((number) => {
                    return (
                        <button key={number} onClick={() => paginated(number)}>{number}</button>
                    )
                })}
            </div>
        </nav>
    )
}