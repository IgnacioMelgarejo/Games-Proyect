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

const Cards = ({ image, name, platforms, rating, gender }) => {
  // const icons = [];
  const platformIcons = {
    Xbox: <IoLogoXbox />,
    Linux: <DiLinux />,
    PlayStation: <IoLogoPlaystation />,
    "PS Vita": <SiPlaystationvita />,
    "Nintendo Switch": <SiNintendoswitch />,
    PC: <RiComputerLine />,
    Android: <AiFillAndroid />,
    macOS: <AiFillMacCommand />,
    iOS: <AiFillApple />,
  };

  const uniquePlatforms = {};
  const renderedIcons = platforms.split(", ").map((platform) => {
    const platformName = Object.keys(platformIcons).find((name) =>
      platform.includes(name)
    );
    if (platformName && !uniquePlatforms[platformName]) {
      uniquePlatforms[platformName] = true;
      return platformIcons[platformName];
    } else {
      return null;
    }
  });

  return (
    <div className={s.mainContainerCard}>
      <div className={s.imageDogCard}>
        <img src={image} alt="img not found" width="240px" height="180px" />
      </div>
      <div className={s.linkToDetails}>
        <h3>{name}</h3>

        <p>{renderedIcons}</p>

        <div className={s.starsContainer}>
          <i
            className={`far fa-star ${rating >= 1 ? "fas fa-star yellow" : ""}`}
          ></i>
          <i
            className={`far fa-star ${rating >= 2 ? "fas fa-star yellow" : ""}`}
          ></i>
          <i
            className={`far fa-star ${rating >= 3 ? "fas fa-star yellow" : ""}`}
          ></i>
          <i
            className={`far fa-star ${rating >= 4 ? "fas fa-star yellow" : ""}`}
          ></i>
          <i
            className={`far fa-star ${rating >= 5 ? "fas fa-star yellow" : ""}`}
          ></i>
        </div>
        <p>{gender}</p>
      </div>
    </div>
  );
};

export default Cards;

/*
 mi solucion, no funciona porque repite iconos, ademas ensucia  el codigo dentro del componente
 {platforms.split(", ").map((e) => {
          return e.includes(`Xbox One`) ? (
            <IoLogoXbox />
          ) : e.includes("Linux") ? (
            <DiLinux />
          ) : e.includes("PlayStation") ? (
            <IoLogoPlaystation />
          ) : e.includes("PS Vita") ? (
            <SiPlaystationvita />
          ) : e.includes("Nintendo Switch") ? (
            <SiNintendoswitch />
          ) : e.includes("PC") ? (
            <RiComputerLine />
          ) : e.includes("Android") ? (
            <AiFillAndroid />
          ) : e.includes("macOS") ? (
            <AiFillMacCommand />
          ) : e.includes("iOS") ? (
            <AiFillApple />
          ) : null;
        })} */
