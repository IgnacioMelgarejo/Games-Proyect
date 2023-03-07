import React from "react";
import { getGender, getVideoGames, orderByGender, orderByName } from "../redux/actions/index";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import Paginated from "./Paginated"
import Cards from "./Cards"
import Nav from "./Nav"
import s from "./CSS/Home.module.css"

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
        dispatch(getGender())
    }, [dispatch])


    const handleSort = (e) => {
        e.preventDefault()
        console.log(e)
        dispatch(orderByName(e.target.value))
        setCurrentPage(1)
        setOrden(`Ordenando ${e.target.value}`)
    }
    const handleGender = (e) => {
        e.preventDefault()
        dispatch(orderByGender(e.target.value))
        setCurrentPage(1)
        setOrden(`Ordenando ${e.target.value}`)
    }

    return (

        <div className={s.marginTop}>
            <Nav handleSort={handleSort} handleGender={handleGender} ></Nav>
            
            <Paginated
                gamesPerPage={gamesPerPage}
                games={games.length}
                paginated={paginado}
            />
            <div className={s.this}>
                {currentGame?.map((e) => {
                    return (
                        <div key={e.id}>
                            <Link className={s.linkCard} to={`/game/${e.id}`}>
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



/*bueno hagamos un codiguito para practicar 
import react from react 
import ]{Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'


const Home = ()=>{
    [order, SetOrder]= useState(0)
}
*/
