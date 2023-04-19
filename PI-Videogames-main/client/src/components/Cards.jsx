import React from "react";
import { IoLogoPlaystation } from "react-icons/io";
import { AiFillAndroid } from "react-icons/ai";
import { AiFillMacCommand } from "react-icons/ai";
import { AiFillApple } from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";
import { IoLogoXbox } from "react-icons/io";
import { DiLinux } from "react-icons/di";
import { SiNintendoswitch } from "react-icons/si";
import { SiPlaystationvita } from "react-icons/si";
import s from "./CSS/Cards.module.css";

const Cards = ({ image, name, platforms, rating, gender, genders }) => {


  const platformIcons = {
    "Xbox": <IoLogoXbox />,
    "Linux": <DiLinux />,
    "PlayStation": <IoLogoPlaystation />,
    "PS Vita": <SiPlaystationvita />,
    "Nintendo Switch": <SiNintendoswitch />,
    "PC": <RiComputerLine />,
    "Android": <AiFillAndroid />,
    "macOS": <AiFillMacCommand />,
    "iOS": <AiFillApple />,
  };

  const uniquePlatforms = {};

  const renderedIcons = platforms.split(", ").map((platform) => {

    const platformName = Object.keys(platformIcons).find((name) =>
      platform.includes(name)
    );
    if (platformName && !uniquePlatforms[platformName]) {
      uniquePlatforms[platformName] = true;
      return <span key={platformName}>{platformIcons[platformName]}</span>; //lo meti dentro de un span para ponerle la key id y que funcione sin lanzar error
    } else {
      return null;
    }
  });


  return (

    <div className={s.mainContainerCard}>

      <div className={s.gameCard}>
        
            <img src={image} alt="img not found" /> 
      </div>

      <div className={s.detailsContent}>

        <h3>{name}</h3>

        <div className={s.cardContent}>

          <p className={s.platIcons}> {renderedIcons}</p>


          <div className={s.starsContainer}>

            {rating}{" "}
            <i
              className={`far fa-star ${rating >= 1 ? `fas fa-star ${s.fuchsia}` : ""}`}
            ></i>
            <i
              className={`far fa-star ${rating >= 2 ? `fas fa-star ${s.fuchsia}` : ""}`}
            ></i>
            <i
              className={`far fa-star ${rating >= 3 ? `fas fa-star ${s.fuchsia}` : ""}`}
            ></i>
            <i
              className={`far fa-star ${rating >= 4 ? `fas fa-star ${s.fuchsia}` : ""}`}
            ></i>
            <i
              className={`far fa-star ${rating >= 5 ? `fas fa-star ${s.fuchsia}` : ""}`}
            ></i>
          </div>


          <p> {genders ? genders.map(e => e.name).join(", ") : gender}</p>

        </div>

      </div>


      <button className={s.buttonDetails}>More</button>

    </div>
  );
};

export default Cards;

