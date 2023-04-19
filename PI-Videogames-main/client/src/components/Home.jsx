import React from "react";
import {
  getGender,
  getVideoGames,
  orderByGender,
  orderByName,
  getFavorites
} from "../redux/actions/index";
import { BiRefresh } from 'react-icons/bi'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Paginated from "./Paginated";
import Cards from "./Cards";
import Nav from "./Nav";
import s from "./CSS/Home.module.css";
import Spinner from "./Spinner"



const Home = () => {
  const games = useSelector((state) => state.games);

  const favorites = useSelector((state) => state.favorites);

  const dispatch = useDispatch();

  const [savedGames, setSavedGames] = useState({});

  const [orden, setOrden] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const [gamesPerPage] = useState(15);

  const indexOfLastGame = currentPage * gamesPerPage;

  const indexOfFirstGame = indexOfLastGame - gamesPerPage;

  const currentGame = games.slice(indexOfFirstGame, indexOfLastGame);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getVideoGames());
    dispatch(getGender());
  }, [dispatch]);

  const handleSort = (e) => {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenando ${e.target.value}`);
  };

  const handleGender = (e) => {
    e.preventDefault();
    dispatch(orderByGender(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenando ${e.target.value}`);
  };

  const handleFavorite = (e) => {
    e.preventDefault();
    dispatch(getFavorites(e.target.value))
    const gameId = e.target.value;
    setSavedGames({ ...savedGames, [gameId]: !savedGames[gameId] });
  };

  const handlerReset = (e) => {
    e.preventDefault();
    setCurrentPage(1)
    dispatch(getVideoGames())
  };


  return (
    <div className={s.container}>
      <Nav handleSort={handleSort} handleGender={handleGender}></Nav>


      <Paginated
        gamesPerPage={gamesPerPage}
        games={games.length}
        paginated={paginado}
      />

      <div className={s.refreshContainer}>
        <button className={s.refresh} onClick={e => handlerReset(e)}><BiRefresh /></button>
      </div>

      {currentGame.length ?

        <div className={s.this}>
          {
            currentGame?.map((e) => {
              const isFavorite = favorites.some((f) => f.id === e.id);

              return (
                <div className={s.cardContent} key={e.id}>
                  <button className={s.favButton} value={e.id} onClick={(e) => handleFavorite(e)}>

                    {isFavorite ? "❤️" : "🤍"}
                  </button>

                  <Link className={s.linkCard} to={`/game/${e.id}`}>
                    <Cards id={e.id} name={e.name} image={e.image} platforms={e.platforms} rating={e.rating} gender={e.gender} genders={e.genders} />
                  </Link>
                </div>
              );
            })

          }

        </div>
        : (
          <Spinner className={s.spinnerContainer}></Spinner>
        ) 
      }

      <div className={s.secondPaginated}>
        <Paginated
          gamesPerPage={gamesPerPage}
          games={games.length}
          paginated={paginado}
        />
      </div>

    </div>
  );
};

export default Home;

/*
Explicacion del button favorites:
Para lograr que el botón solo pinte el corazón seleccionado y no todos los corazones en el código que proporcionó, debe mantener el estado de cada botón individualmente. Actualmente, el botón está utilizando una variable "guardado" que se usa para determinar si debe pintar un corazón rojo o blanco. Pero como está actualizando el estado de "guardado" en cada clic del botón, afecta a todos los botones.

Para mantener el estado de cada botón individualmente, utilize un objeto de estado que contenga una propiedad para cada botón. En este objeto, puede almacenar el estado de cada botón y actualizar solo el estado del botón que se ha hecho clic. Por ejemplo, podría tener un objeto de estado que se vea así:


const [savedGames, setSavedGames] = useState({});

const onCLick = (e) => {
  const gameId = e.target.value;
  setSavedGames({...savedGames, [gameId]: !savedGames[gameId]});
}
En este ejemplo, cada vez que se hace clic en un botón, se actualiza el objeto de estado "savedGames" con una propiedad que corresponde al ID del juego. Si la propiedad no existe todavía, se crea con un valor predeterminado de "false". Si la propiedad ya existe, su valor se invierte. Luego, en el botón, puede determinar si debe pintar un corazón rojo o blanco según el valor correspondiente en el objeto "savedGames" para el ID del juego actual. Por ejemplo:


<button className={s.favButton} value={e.id} onClick={onCLick}>
  {savedGames[e.id] ? "❤️" : "🤍"}
</button>
De esta manera, cada botón mantiene su propio estado individualmente y solo se actualiza el estado del botón que se hizo clic.
*/

