import React from "react";
import { getVideoGames } from "../redux/actions/index";
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

    return (

        <div>
            <Nav></Nav>
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



/*import react from react
import {useState, useEffect} from "react-dom"
import {useSelector, useDispatch} from"react-redux"
const home =()=>{
    const getGames=useSelector((state)=>state.games)

    const [currentGame, setCurrentGame]= useState(1)
    const [gamesPerPage] = useState(15)
    const indexForLastGame = currentGame * gamesPerPage
    const indexForFirstGame = indexOfLastGame - gamesPerPage
    currentPage = getGames.slice(indexFirstGame,indexforlastGame)

    useEffect(=>{
       dispatch(getGames())
    },[dispatch])

   const paginado = (pageNumber)=>{
    setCurrenpage(pagenumber)

   }
   return(
    <>
    <paginated
    pageNumber={pagenumber}
    games={games.length}
    paginado={paginado}
    />
    {
currentPage?.map(game=>{
    <Link>
    <cards>
        game.name,
    game.image
    <cards>
    <Link/>

})
    }
    </>
   )
}


*/