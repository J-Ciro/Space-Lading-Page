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
          <li>00 HOME</li>
          <li>01 DESTINATION</li>
          <li>02 CREW</li>
          <li>03 TECHNOLOGY</li>
        </ul>
      </StyledList>
    </StyledNav>
  );
};
