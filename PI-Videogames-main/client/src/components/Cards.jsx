import React from "react";

const Cards = ({image}) => {
    return (
        <div>
            <img src={image} alt="img not found" width="240px" height="180px" />
        </div>
    )
}

export default Cards;