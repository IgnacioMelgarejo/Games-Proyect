import React,{useState} from 'react'
import { getFavorites } from '../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Cards from './Cards'
import s from './CSS/Cards.module.css'
import f from './CSS/Favorites.module.css'
import sB from "./CSS/Button.module.css"
import h from "./CSS/Home.module.css"

const Favorites = () => {

  let favoritos = useSelector((state) => state.favorites)
  const [savedGames, setSavedGames] = useState({});
  const dispatch = useDispatch()
  console.log("FAVORITOS EN COMP FAV",favoritos)

  const handleFavorite = (e)=>{
    e.preventDefault();
    dispatch(getFavorites(e.target.value))
    const gameId = e.target.value;
  setSavedGames({...savedGames, [gameId]: !savedGames[gameId]});
    
  };

  return (
    <div>
      <h1 className={f.favoritesTitle}>
        Favorites
      </h1>

      <Link to="/home">
        <div className={sB.buttonBack}><button >BACK HOME</button></div>

      </Link>

      <div className={f.content}>

        {favoritos?.map((e) => {
          const isFavorite = favoritos.some((f) => f.id === e.id);
          
          return (
            <div   key={e.id}>
               <button className={h.favButton} value={e.id} onClick={(e)=>handleFavorite(e)}>

              {isFavorite?  "❤️":"🤍" }
              </button>

              <Link className={s.linkCard} to={`/game/${e.id}`}>
                <Cards id={e.id} name={e.name} image={e.image} platforms={e.platforms} rating={e.rating} gender={e.gender} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>

  )
}

export default Favorites;