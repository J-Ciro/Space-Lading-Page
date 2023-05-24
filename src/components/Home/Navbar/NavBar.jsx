import React from "react";
import logo from "../../../assets/shared/logo.svg";
import { NavLink } from "react-router-dom";
import { StyledLine, StyledList, StyledNav,StyledHamburger } from "./StyleNavbar";
import { Hamburger } from "./Hamburger/Hamburger";

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
              <span className="navNumber">00</span> <span className="navName">HOME</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/destination">
            <span className="navNumber">01</span> <span className="navName">DESTINATION</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/crew">
              {" "}
              <span className="navNumber">02</span> <span className="navName">CREW</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/technology">
            <span className="navNumber">03</span> <span className="navName">TECHNOLOGY</span>
            </NavLink>
          </li>
        </ul>
      </StyledList>
      <StyledHamburger>
        <Hamburger/>
      </StyledHamburger>
    </StyledNav>
  );
};
