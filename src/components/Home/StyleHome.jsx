import styled from "styled-components";
import indexBackground from "../../assets/images/indexBackground.png";

export const SectionContent = styled.main`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Message1 = styled.p`
  width: 23.688rem;
  line-height: 2.1rem;
  font-family: "Barlow Condensed";
  font-size: 1.75rem;
  color: white;
  margin: 0;
  padding: 0;
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

export const Message2 = styled.p`
  width: 27.75rem;
  font-size: 1.125rem;
  line-height: 2rem;
  color: white;
  margin: 0;
  padding: 0;
  font-family: "Barlow";
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
  /* position: absolute; */
  /* left: 0%;
  right: 0%;
  top: 0%; */
  bottom: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 60%;
  font-size: 32px;
  font-family: "Bellefair", serif;
  font-weight: 400;
  margin-top: 6rem;
  margin-right: 2rem;
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
