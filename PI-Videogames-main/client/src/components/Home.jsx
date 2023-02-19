import React from "react";
import { getVideoGames, orderByName } from "../redux/actions/index";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import Paginated from "./Paginated"
import Cards from "./Cards"
import Nav from "./Nav"
import "./CSS/Home.css"

const Home = () => {
    const games = useSelector((state) => state.games)
    const dispatch = useDispatch()

    const [orden, setOrden] = useState('')

    const [currentPage, setCurrentPage] = useState(1);

    const [gamesPerPage] = useState(15);

    const indexOfLastGame = currentPage * gamesPerPage;

    const indexOfFirstGame = indexOfLastGame - gamesPerPage;

    const currentGame = games.slice(indexOfFirstGame, indexOfLastGame)


    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getVideoGames())
    }, [dispatch])


    const handleSort = (e) => {
        e.preventDefault()
        dispatch(orderByName(e.target.value))
        setCurrentPage(1)
        setOrden(`Ordenando ${e.target.value}`)
    }

    return (

        <div>
            <Nav handleSort={handleSort} ></Nav>
            
            <Paginated
                gamesPerPage={gamesPerPage}
                games={games.length}
                paginated={paginado}
            />
            <div className="this">
                {currentGame?.map((e) => {
                    return (
                        <div key={e.id}>
                            <Link className="link-card" to={`/game/${e.id}`}>
                                <Cards id={e.id} name={e.name} image={e.image} />
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;



