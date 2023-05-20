import React from "react";
import logo from "../../../assets/shared/logo.svg";
import { NavLink } from "react-router-dom";
import { StyledLine, StyledList, StyledNav } from "./StyleNavbar";

export const NavBar = () => {
  return (
    <StyledNav>
      <figure>
        <img src={logo} alt="" />
      </figure>
      <StyledLine></StyledLine>

      <StyledList>
        <ul>
          <li><NavLink to="/">00 HOME</NavLink></li>
          <li><NavLink to="/destination">01 DESTINATION</NavLink></li>
          <li><NavLink to="/crew">02 CREW</NavLink></li>
          <li><NavLink to="/technology">03 TECHNOLOGY</NavLink></li>
        </ul>
      </StyledList>
    </StyledNav>
  );
};
