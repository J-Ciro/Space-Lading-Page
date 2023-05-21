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
    height: 100%;
    align-items: center;
    box-sizing: border-box;
  }
  li {
    list-style: none;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    border-bottom: 2px solid transparent;
    font-weight: 700;
    letter-spacing: 2.7px;
    a {
      color: white;
      text-decoration: none;
    }

    span {
      font-family: "Barlow Condensed", sans-serif;
      font-size: 1rem;
      letter-spacing: 2.7px;
      box-sizing: border-box;
      font-weight: 400;
    }
    &:hover {
      border-bottom: solid 3px #ffff;
      mix-blend-mode: normal;
      cursor: pointer;
    }
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
  left: 5vw;
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
