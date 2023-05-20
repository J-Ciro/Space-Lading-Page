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
          <li>
            <NavLink to="/">
              {" "}
              00 <span>HOME</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/destination">
              01 <span>DESTINATION</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/crew">
              {" "}
              02 <span>CREW</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/technology">
              03 <span>TECHNOLOGY</span>
            </NavLink>
          </li>
        </ul>
      </StyledList>
    </StyledNav>
  );
};
