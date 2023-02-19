import React, { useState, useEffect } from "react";
import {
    Container,
    LogoContainer,
    Wrapper,
    Menu,
    MenuItem,
    MenuItemLink,
    MobileIcon,
} from "./CSS/Nav.element";
import {
    FaBars,
    FaTimes,
    FaHome,
    FaUserAlt,
    FaBriefcase,
    FaGlasses,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import { IoLogoGameControllerB } from "react-icons/io";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";


const Nav = ({handleSort}) => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const dispatch = useDispatch()
    const [orden, setOrden] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const games = useSelector(state => state.games)
    
   
    

    return (
        <Container>
            <Wrapper>
                <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
                    <LogoContainer>
                        <IoLogoGameControllerB />
                        <p>Games -</p>
                        <p>X</p>
                    </LogoContainer>

                    <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        {showMobileMenu ? <FaTimes /> : <FaBars />}
                    </MobileIcon>

                    <Menu open={showMobileMenu}>
                                <div>
                                    <Search></Search>
                                </div>
                        <MenuItem>
                            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>

                                <div>
                                    <FaHome />
                                    HOME
                                </div>
                            </MenuItemLink>
                        </MenuItem>

                        <MenuItem>
                            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                <div>
                                    <FaBriefcase />
                                    <select onClick={e => handleSort(e)}>
                                        <option value="Order by Name">ORDER BY NAME</option>
                                        <option value="Asc">FROM A TO Z</option>
                                        <option value="Desc">FROM Z TO A</option>
                                    </select>
                                </div>
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                <div >
                                    <FaGlasses />
                                    ORDER BY WEIGHT
                                </div>
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                <div>
                                    <FaUserAlt />
                                    CREATE GAME
                                </div>
                            </MenuItemLink>
                        </MenuItem>
                    </Menu>
                </IconContext.Provider>
            </Wrapper>
        </Container>
    );
};

export default Nav;