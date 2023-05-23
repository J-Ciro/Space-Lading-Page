import { styled } from "styled-components";

export const StyledPageName = styled.div`
  h4 {
    font-family: "Barlow Condensed", serif;
    font-weight: 400;
    color: white;
    font-size: 1.75rem;
  }
`;

 export const PageTitle = ({ number, pageName }) => {
  return (
    <StyledPageTitle>
      <StyledSpanNumber>{number}</StyledSpanNumber>
      <StyledSpanPage>{pageName}</StyledSpanPage>
    </StyledPageTitle>
  );
};

export const StyledSteps = styled.button`
  width: 3em;
  height: 3em;
  border: 1px solid rgba(255, 255, 255, .25);
  border-radius: 100%;
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Bellefair";
  color: ${({ active }) => (active ? "black" : "white")};
background-color: ${({ active }) => (active ? "white" : "transparent")};
  
  &:hover {
    border: 1px solid rgba(255, 255, 255);
    cursor:pointer;
  }
`;

export const StylesMainText = styled.section`
display: ${({ active }) => (active ? "flex" : "none")};
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
  width: 59vw;
`;

export const StyledContainerSteps = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  text-align: center;
  gap: 25px;
  justify-content: center;
  align-items: center;
  text-align: center;
  span {
    font-family: "Bellefair";
  }
`;

export const StyledSubContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 67px;
  width: 52vw;
  align-items: center;
  justify-content: flex-end;
  align-content: center;
`;

export const StyledMainText = styled.p`
  width: 360px;
  word-wrap: break-word;
  /* margin: 0; */
  color: white;
  font-family: "Barlow Condensed", serif;
  font-size: 1rem;
  font-weight: 300;
  line-height: 2rem;
  color: #d0d6f9;
`;

export const StyledHeading3 = styled.h3`
  font-size: 3.5rem;
  color: white;
  font-weight: 400;
  font-family: "Bellefair";
  text-transform: uppercase;
  width:9.3em;
`;

export const StyledTerm = styled.span`
  font-family: "Barlow Condensed", serif;
  color: #d0d6f9;
  font-size: 0.88rem;
  letter-spacing: 2.7px;
  line-height: 19px;
`;

export const StyledPageTitle = styled.h4`
  display: flex;
  gap: 10px;
  position: absolute;
  top: 24vh;
  letter-spacing: 4.75px;
  left: 13vw;
`;

export const StyledSpanPage = styled.span`
  color: white;
`;

export const StyledSectionPictures = styled.section`
position: absolute;
right: 0px;
top: 12vw;
`;

export const StyledSpanNumber = styled.span`
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.25;
  font-family: "Barlow Condensed";
  font-weight: 700;
`;

export const StyledMainContent = styled.div`
display:flex;
flex-direction:column;
gap:20px;
`

export const ColorNumber = styled.div`


`;