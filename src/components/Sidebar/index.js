import React from "react";
import { LogoImg } from "../Navbar/NavbarElements";
import {
  CloseIcon,
  Icon,
  Icon2,
  SidebarContainer,
  SideBarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper,
  SideBtnWrap,
} from "./SidebarElements";
import logo from "../../images/logoiac.png";
const Sidebar = ({ isOpen, toggle }) => {
  console.log(isOpen, toggle);
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon2 onClick={toggle}>
        <LogoImg src={logo} />
      </Icon2>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SideBarLink to='About'>About</SideBarLink>
          <SideBarLink to='Langues'>Langues</SideBarLink>
          <SideBarLink to='Immigration'>Immigration</SideBarLink>
          <SideBarLink to='Equipe'>Equipe</SideBarLink>
          <SideBarLink to='Elearning'>E-learning</SideBarLink>
          <SideBarLink to='Partenariat'>Partenariat</SideBarLink>
          <SideBarLink to='Contact'>Contact</SideBarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/inscription'>Inscription</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
