import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameGame } from "../redux/actions/index";
import s from "./CSS/Search.module.css";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getNameGame(name));
    setName("");
  };


  return (
    <div className={s.searchBox}>

      <input
        className={s.searchInput}
        type="text"
        placeholder="Search.."
        onChange={(e) => handleInputChange(e)}
      />
      
      <button
        className={s.searchButton}
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        <AiOutlineSearch className={s.materialIcons}></AiOutlineSearch>
      </button>

    </div>
  );
};

export default Search;
