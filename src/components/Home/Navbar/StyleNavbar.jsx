import { styled } from "styled-components";

export const StyledList = styled.div`
  z-index: 1;
  width: 60%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(30px);
  justify-content: space-around;

  .list{
    display:flex;
    gap:5px;
  }

  @media screen and (max-width: 426px) {
    width: 450px;
    height: 96px;
    display: ${(props) => (props.open ? "block" : "none")};
  }
  @media screen and (max-width: 426px) {
    position: absolute;
    top: 0%;
    height: 100vh;
    width: 300px;
    left: 27%;
  }

  ul {
    display: flex;
    gap: 2.5rem;
    font-family: "Barlow Condensed", sans-serif;
    color: #ffff;
    height: 100%;
    align-items: center;
    box-sizing: border-box;
    @media screen and (max-width: 426px) {
      flex-direction: column;
      position: absolute;
      height: 667px;
      left: 121px;
      top: 20%;
      left: 15%;
    }
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
    @media screen and (max-width: 426px) {
      height: 0%;
    }
    a {
      color: white;
      text-decoration: none;
      
    }
    .navNumber {
      color: white;
      text-decoration: none;
      @media screen and (max-width: 768px) {
        display: none;
      }
    }

    .navName {
      font-family: "Barlow Condensed", sans-serif;
      font-size: 1rem;
      letter-spacing: 2.7px;
      box-sizing: border-box;
      font-weight: 400;
      @media screen and (max-width: 768px) {
        font-size: 1rem;
        letter-spacing: 2.36px;
        visibility: visible;
      }
      @media screen and (max-width: 426px) {
        font-size: 1.2rem;
      }
    }
    &:hover {
      border-bottom: solid 3px #ffffff;
      mix-blend-mode: normal;
      cursor: pointer;
      @media screen and (max-width: 426px) {
        border-bottom: 0px
      }
      
    }
  }
  .active {
    //  border-bottom: 2px solid white;
    border-bottom: solid 3px #8a8b90;
    mix-blend-mode: normal;
    cursor: pointer;
    padding-bottom: 35px;
    transform: translateY(21px);

    @media screen and (max-width: 426px) {
      border-right: solid 3px #8a8b90;
      border-bottom:0px;
      height:10%;
      padding-right: 100%;
      transform: translateY(0px);
      
      
    }
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 40px;
  left: 3.82%;
  width: 96.2%;
  text-align: left;
  height: 96px;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
   
    width: 95vw;
    top: 0px;
  }
  @media screen and (max-width: 426px) {
    width: 93vw;
  }

  img {
    @media screen and (max-width: 768px) {
      width: 48px;
      height: 48px;
    }
    @media screen and (max-width: 426px) {
      width: 40px;
      height: 40px;
    }
  }
`;

export const StyledLine = styled.span`
  position: absolute;
  left: 6.94%;
  border-top: 1px solid #fff;
  width: 35%;
  z-index: 2;
  

  span {
    margin: 1rem 0;
    color: inherit;
    background-color: currentColor;
    border: 0;
    opacity: 0.25;
   
    
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const StyledHamburger = styled.div`
  visibility: hidden;
  display: none;
  @media screen and (max-width: 426px) {
    visibility: visible;
    display: unset;
  }
`;
