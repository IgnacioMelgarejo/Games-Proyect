import React from "react";
import s from "./CSS/Cards.module.css"

const Cards = ({ image,name }) => {
    return (
        <div className={s.mainContainerCard}>
            <div className={s.imageDogCard}>
                <img src={image} alt="img not found" width="240px" height="180px" />
            </div>
            <div className={s.linkToDetails}>
                <h3>{name}</h3>
            </div>
        </div>
    )
}

export default Cards;