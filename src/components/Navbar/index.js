import React, { useState, useEffect } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  LogoImg,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import logo from "../../images/logoiac.png";
const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 300) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/">
            <LogoImg src={logo} />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="About">About</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="Langues">Langues</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Immigration">Immigration</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="Equipe">E-learning</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="Partenariat">Partenariat</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="Contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/inscription">Inscription</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
