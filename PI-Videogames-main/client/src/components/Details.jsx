import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDetails } from "../redux/actions";
import { Link } from "react-router-dom";
import s from "./CSS/Details.module.css";
import sB from "./CSS/Button.module.css"

const Details = (props) => {
  console.log(props.match.params.id);
  const dispatch = useDispatch();
  const game = useSelector((state) => state.details);
  console.log(game);

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

        <img className={s.img} src={game.image} alt="img not found" />

        <div className={s.extras}>


          <div className={s.platformsReleased}>


            <p className={s.starsContainer}>
              <p className="numerSizeFont">{game.rating}{"   "}</p>

              <i
                className={`far fa-star ${game.rating >= 1 ? "fas fa-star yellow" : ""
                  }`}
              ></i>

              <i
                className={`far fa-star ${game.rating >= 2 ? "fas fa-star yellow" : ""
                  }`}
              ></i>

              <i
                className={`far fa-star ${game.rating >= 3 ? "fas fa-star yellow" : ""
                  }`}
              ></i>

              <i
                className={`far fa-star ${game.rating >= 4 ? "fas fa-star yellow" : ""
                  }`}
              ></i>

              <i
                className={`far fa-star ${game.rating >= 5 ? "fas fa-star yellow" : ""
                  }`}
              ></i>

            </p>

            <p>Gender: {game.gender}</p>

          </div>


          <div className={s.platformsReleased}>
            <p>Platforms: {game.platforms}</p>
            <p>Released: {game.released}</p>
          </div>

        </div>
        
        <p  className={s.description}> {game.description}</p>
      </div>
    </div>
  );
};

export default Details;
