import { styled } from "styled-components";

export const StyledPageName = styled.div`
  h4 {
    font-family: "Barlow Condensed", serif;
    font-weight: 400;
    color: white;
    font-size: 1.75rem;
    @media screen and (max-width: 426px){
      font-size: 1rem;
      }
    
  }
  @media screen and (max-width:768px){
  position: relative;
    left: -30vw;    
  }
  @media screen and (max-width: 426px){
      position:unset;
      
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
  @media screen and (max-width: 426px){
      font-size: 1rem;
      
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
  @media screen and (max-width: 768px){
    display:flex;
    flex-direction: row;
    width: 100%;
    gap: 10px;
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
  @media screen and (max-width: 768px){
     
      display: flex;
      flex-direction: column;
      margin: 10px 50px 50px 50px;
      }
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
  @media screen and (max-width: 768px){
      display:flex;
      flex-direction: column;
      align-items: center;
      align-content: center;
      gap:10vh;
    
      }
  @media screen and (max-width: 426px){
   font-size: 0.938rem;
   font-weight: 400;
   gap:5vh;
   width:327px;
   /* height:175px; */
 }   
`;

export const StyledHeading3 = styled.h3`
  font-size: 3.5rem;
  color: white;
  font-weight: 400;
  font-family: "Bellefair";
  text-transform: uppercase;
  width:9.3em;
  @media screen and (max-width: 768px){
      font-size: 2.5rem;
      }
   @media screen and (max-width: 426px){
   font-size: 1.5rem;
   font-weight: 400;
 }
`;

export const StyledTerm = styled.span`
  font-family: "Barlow Condensed", serif;
  color: #d0d6f9;
  font-size: 0.88rem;
  letter-spacing: 2.7px;
  line-height: 19px;
  @media screen and (max-width: 768px){
      font-size:1rem ;
      letter-spacing: 2.7px;
      
      }

      @media screen and (max-width: 426px){
      font-size: 0.875rem;
      letter-spacing:2.36px;
      font-weight: 400;
 }
`;

export const StyledPageTitle = styled.h4`
  display: flex;
  gap: 10px;
  position: absolute;
  top: 24vh;
  letter-spacing: 4.75px;
  left: 13vw;
  @media screen and (max-width: 768px){
 left:5vw; 
 position:unset;
}
`;

export const StyledSpanPage = styled.span`
  color: white;
  font-family: 'Barlow Condensed';
  @media screen and (max-width: 768px){
  font-size: 1.25rem;
  letter-spacing: 3.38px;
  @media screen and (max-width: 426px){
  font-size: 1rem;
   letter-spacing: 2.7px;
   font-weight: 400;
 }
}

`;

export const StyledSectionPictures = styled.section`
position: absolute;
right: 0px;
top: 12vw;
img{
  @media screen and (max-width: 768px){
   width: 100vw;
}
}
@media screen and (max-width: 768px){
  position: unset;
  display:block;
  width: 100vw;
}

`;

export const StyledSpanNumber = styled.span`
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.25;
  font-family: "Barlow Condensed";
  font-weight: 700;
  @media screen and (max-width: 768px){
  font-size: 1.25rem;
  letter-spacing: 3.38px;
}
@media screen and (max-width: 426px){
      font-size: 1rem;
      letter-spacing: 2.7px;
      font-weight: 700;
 }
`;

export const StyledMainContent = styled.div`
display: flex;
    flex-direction: column;
    gap: 20px;
    //align-items: center;
@media screen and (max-width: 768px){
  text-align: center;
  align-items: center;
}
`

export const StyledMain = styled.div`
@media screen and (max-width: 768px){
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap:50px;
}

@media screen and (max-width: 426px){
  gap:30px;
}

`