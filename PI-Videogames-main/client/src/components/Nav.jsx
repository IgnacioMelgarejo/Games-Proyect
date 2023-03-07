import React from "react";
import { Link } from "react-router-dom";
import { IoLogoGameControllerB } from "react-icons/io";
import Search from "./Search";
import { useSelector } from "react-redux";
import s from "./CSS/Nav.module.css";



const Nav = ({ handleSort, handleGender }) => {
  const gender = useSelector((state) => state.gender);

  // const [clicked,setClicked] = useState(false)

  return (
    <div className={s.container}>
      <div className={s.logo}>
        <IoLogoGameControllerB />
        <div className={s.toggle}>|||</div>
      </div>

      <div className={s.search}>
        <Search ></Search>
      </div>

      <nav className={s.nav}>
        <ul className={s.r}>
          <li className={s.rSel}>
            <select className={s.myselect} onClick={(e) => handleSort(e)}>
              <option value="Order by Name">ORDER BY NAME</option>
              <option value="Asc">FROM A TO Z</option>
              <option value="Desc">FROM Z TO A</option>
            </select>
          </li>

          <li className={s.rSel}>
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
            <li className={s.h}>CREATE GAME</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
