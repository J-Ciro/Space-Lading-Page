import React from "react";
import hamburger from "../../../../assets/shared/icon-hamburger.svg";
import hamburgerClosed from '../../../../assets/shared/icon-close.svg'
import { StyledHamburgerContainer } from "./StyledHamburger";

export const Hamburger = ({ open, handleClick }) => {
  return (
    <StyledHamburgerContainer
      className={`hamburger ${open ? "open" : ""}`}
      onClick={handleClick}
    >
      <figure>
        <img src={open ? hamburgerClosed : hamburger} alt=""/>
      </figure>
    </StyledHamburgerContainer>
  );
};
