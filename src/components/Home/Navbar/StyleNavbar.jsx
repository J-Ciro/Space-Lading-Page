import { styled } from "styled-components";

export const StyledList = styled.div`
  width: 830px;
  height: 96px;
  left: 710px;
  overflow: hidden;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.7742px);
  justify-content: space-around;

  ul {
    display: flex;
    gap: 2.5rem;
    font-family: "Barlow Condensed", sans-serif;
    color: #ffff;
  }
  li {
    list-style: none;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: center;
  justify-content: space-between;
  color: white;
  position: absolute;
  width: 95vw;
  height: 96px;
  left: 55px;
  top: 40px;
`;

export const StyledLine = styled.span`
  position: absolute;
  width: 473px;
  height: 1px;
  left: 200px;
  /* top: 88px; */
  background: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.25;
  z-index: 1;
`;
