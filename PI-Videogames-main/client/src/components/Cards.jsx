import React from "react";
import "./CSS/Cards.css"

const Cards = ({ image,name }) => {
    return (
        <div className="main-container-card">
            <div className="image-dog-card">
                <img src={image} alt="img not found" width="240px" height="180px" />
            </div>
            <div className="link-to-details">
                <h3>{name}</h3>
            </div>
        </div>
    )
}

export default Cards;