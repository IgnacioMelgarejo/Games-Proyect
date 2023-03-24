import React from "react";
import { Link } from "react-router-dom";
import { IoLogoGameControllerB } from "react-icons/io";
import Search from "./Search";
import { useSelector } from "react-redux";
import { useState } from "react";
import s from "./CSS/Nav.module.css";
import sb from "./CSS/Search.module.css";


const Nav = ({ handleSort, handleGender }) => {
  const gender = useSelector((state) => state.gender);
  //empieza aca lo del caht
  const [isOpen, setIsOpen] = useState(false);



  return (
    <div className={s.container} >

      <div className={s.logo}>
        <IoLogoGameControllerB />
        <div className={s.toggle} onClick={() => setIsOpen(!isOpen)} >|||</div>
      </div>

    
        <div >
          <Search ></Search>
        </div>

        <nav className={`${s.nav} ${isOpen ? s.prueba: ""}`} >
        
        <div className={` ${!isOpen ? sb.searchNone:sb.searchBurger}`}>
        <Search></Search>
        </div>
        
          <ul className={s.ulStyle}>
          

            <Link to="/favorites">
              <li className={s.create}>FAVORITES</li>
            </Link>
            
            <li className={s.liSel}>
              <select className={s.myselect} onClick={(e) => handleSort(e)}>
                <option value="Order by Name">ORDER BY NAME</option>
                <option value="Asc">FROM A TO Z</option>
                <option value="Desc">FROM Z TO A</option>
              </select>
            </li>

            <li className={s.liSel}>
              <select className={s.myselect} onChange={(e) => handleGender(e)}>
                <option value="Order by Gender">ORDER BY GENDER</option>
                {gender.map((g, id) => (
                  <option key={id} value={g.name}>
                    {g.name}
                  </option>
                ))}
              </select>
            </li>


            <Link to="/create">
              <li className={s.create}>CREATE GAME</li>
            </Link>

          </ul>
        
        </nav>
      </div>
    
  );
};

export default Nav;
