import React from "react";
import logo from "../../../assets/shared/logo.svg";
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
            00 <span>HOME</span>
          </li>
          <li>
            01 <span>DESTINATION</span>
          </li>
          <li>
            02 <span>CREW</span>
          </li>
          <li>
            03 <span>TECHNOLOGY</span>
          </li>
        </ul>
      </StyledList>
    </StyledNav>
  );
};
