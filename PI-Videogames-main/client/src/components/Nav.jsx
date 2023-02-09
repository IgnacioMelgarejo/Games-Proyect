import React, { useState } from "react";
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

const Nav = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

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
                                    <FaUserAlt />
                                    CREATE GAME
                                </div>
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                <div>
                                    <FaBriefcase />
                                    <select>
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
                    </Menu>
                </IconContext.Provider>
            </Wrapper>
        </Container>
    );
};

export default Nav;