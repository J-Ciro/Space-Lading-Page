import styled from "styled-components";
import indexBackground from "../../assets/home/background-home-desktop.jpg";

export const SectionContent = styled.main`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Message1 = styled.p`
  width: 23.688em;
  line-height: 1em;
  font-family: "Barlow Condensed";
  font-size: 1.75rem;
  color: #d0d6f9;
  margin: 0;
  padding: 0;
  letter-spacing: 4.75px;
`;

export const Message2 = styled.p`
  width: 27.75rem;
  font-size: 1.125rem;
  line-height: 2rem;
  color: #d0d6f9;
  margin: 0;
  padding: 0;
  font-family: "Barlow Condensed";
  font-weight: 200;
`;

export const MessageSpace = styled.h1`
  width: 27.813rem;
  font-family: "Bellefair", serif;
  font-weight: 400;
  font-size: 9.375rem;
  color: white;
  margin: 0;
  padding: 0;
`;

export const StylesHome = styled.div`
  display: flex;
  background-image: url(${indexBackground});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;

export const StylesDivExplore = styled.span`
  background-color: #fff;
  width: 17.125rem;
  height: 17.125rem;
  bottom: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 60%;
  font-size: 32px;
  font-family: "Bellefair", serif;
  font-weight: 400;
  /* margin-top: 50px; */
  /* margin-right: 2rem; */
  visibility: visible;
  top: 50%;
`;

export const StylesOuterCircle = styled.div`
  width: 27.125rem;
  height: 27.125rem;
  border-radius: 60%;
  background-color: red;
  visibility: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: center;
  transition: transform 0.3s;
  cursor: pointer;

  :hover::before {
    width: 270px;
    height: 270px;
    content: "";
    border-radius: 60%;
    position: absolute;
    animation: hoverExplore 0.3s forwards;
  }

  @keyframes hoverExplore {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
      border: 40px solid white;
    }
  }
`;

export const StylesSpace = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 7.5rem;
  margin-left: 5rem;
  margin-right: 5rem;
`;
