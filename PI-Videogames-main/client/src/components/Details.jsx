import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDetails } from "../redux/actions";
import { Link } from "react-router-dom";
import s from "./CSS/Details.module.css";
import sB from "./CSS/Button.module.css"

const Details = (props) => {

  const dispatch = useDispatch();
  const game = useSelector((state) => state.details);

  const gameRating = game[0] ? game[0].rating : game.rating

  useEffect(() => {
    dispatch(getDetails(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  return (


    <div >

      <Link to="/home">
        <div className={sB.buttonBack}><button >BACK HOME</button></div>

      </Link>


      <div className={s.mainContainerDetail}>
        <h1>{game.name}</h1>

        <img className={s.img} src={game[0] ? game[0].image : game.image} alt="img not found" />

        <div className={s.extras}>


          <div className={s.platformsReleased}>


            <div className={s.starsContainer}>
              <p className="numerSizeFont">{gameRating}</p>{""}

              <i
                className={`far fa-star ${gameRating >= 1 ? "fas fa-star yellow" : ""}`}
              ></i>

              <i
                className={`far fa-star ${gameRating >= 2 ? "fas fa-star yellow" : ""}`}
              ></i>

              <i
                className={`far fa-star ${gameRating >= 3 ? "fas fa-star yellow" : ""
                  }`}
              ></i>

              <i
                className={`far fa-star ${gameRating >= 4 ? "fas fa-star yellow" : ""
                  }`}
              ></i>

              <i
                className={`far fa-star ${gameRating >= 5 ? "fas fa-star yellow" : ""
                  }`}
              ></i>

            </div>
            <p>Gender: {game[0] ? game[0].genders.map(e => e.name).join(", ") : game.gender}</p>
            
            
          </div>


          <div className={s.platformsReleased}>
          <p>Released: {game[0] ? game[0].released : game.released}</p>
          <p>Platforms: {game[0] ? game[0].platforms : game.platforms}</p>
            
          </div>

        </div>
        <br/>
        <p className={s.description}> {game[0] ? game[0].description : game.description}</p>
      </div>
    </div>
  );
};

export default Details;
