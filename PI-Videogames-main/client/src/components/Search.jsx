import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { getNameGame } from "../redux/actions/index"

import s from "./CSS/Search.module.css"


const Search = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    const handleInputChange = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getNameGame(name));
        setName("")
    }
    return (
        <div  className={s.search}>
            <div >
                <input type="text" placeholder="Search.."   onChange={e => handleInputChange(e)} />
                <button type="submit" onClick={e => handleSubmit(e)}> Search..</button>
            </div>
        </div>
    )
}

export default Search