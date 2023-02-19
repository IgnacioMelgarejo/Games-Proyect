import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { getNameGame } from "../redux/actions/index"


const Search = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    const handleInputChange = (e) => {
        e.preventDefault()
        setName(e.target.value)
        console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getNameGame(name));
        setName("")
    }
    return (
        <div>
            <input type="text" placeholder="Search.." onChange={e=>handleInputChange(e)} />
            <button type="submit" onClick={e => handleSubmit(e)}>Search</button>
        </div>
    )
}

export default Search