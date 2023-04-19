import React from 'react'
import { Link } from 'react-router-dom'
import img from "./image/page-not-found.png"
import s from "./CSS/NotFound.module.css"

const NotFound = () => {
    return (
        <div className={s["page-container"]}>
            <img src={img} alt="404 not found" width="500px" heigth="300px"/>
            <div className={s["page-title"]}>
                <p>The page you were looking doesn't exist</p>
            <Link to="/home"><button className={s["page-button-back"]}> 🡠 Back to home</button></Link>
            </div>
        </div>
    )
}


export default NotFound