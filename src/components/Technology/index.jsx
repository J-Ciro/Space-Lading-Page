import React, { useState } from "react";
// import { useParams, Link, useLocation } from 'react-router-dom';
import { technology } from "../../Data/data";
import { StylesHome, StylesSpace } from "../Home/StyleHome";
 import techBackground from "../../assets/technology/background-technology-desktop.jpg";
 import styled, { keyframes, css } from "styled-components";
import {
  StyledContainerSteps,
  StyledHeading3,
  StyledMainContent,
  StyledMainText,
  StyledPageName,
  StyledSectionPictures,
  StyledSteps,
  StyledSubContent,
  StyledTerm,
   PageTitle
} from "./StyleTechnology";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0%);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateX(0%);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
`;

const AnimatedContent = styled.div`
  display: ${({ active }) => (active ? "flex" : "none")};
  gap: ${({ active }) => (active ? "10px" : "0px")};
  animation: ${({ active }) =>
    active
      ? css`
          ${fadeIn} 0.5s ease-in-out forwards
        `
      : css`
          ${fadeOut} 0.5s ease-in-out forwards
        `};
        
`;






export const Technology = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleSliderChange = (index) => {
    setActiveStep(index);
  };

  return (
    <StylesHome backgroundImage={techBackground}>
    <StylesSpace>
      <StyledMainText>
        <StyledPageName>
        <PageTitle number="03" pageName="SPACE LAUNCH 101"/>  
        </StyledPageName>
        <div >
          <StyledSubContent>
            <StyledContainerSteps>
              {technology.map((tech, index) => (
                <StyledSteps
                  key={tech.id}
                  className={index === activeStep ? "active" : ""}
                  onClick={() => handleSliderChange(index)}
                  active={index === activeStep}
                >
                  {tech.id}
                </StyledSteps>
              ))}
            </StyledContainerSteps>
            {technology.map((tech, index) => (
              <AnimatedContent
                key={tech.id}
                active={index === activeStep}
              >
                <StyledMainContent>
                  <StyledTerm>THE TERMINOLOGY</StyledTerm>
                  <StyledHeading3>{tech.name}</StyledHeading3>
                  <StyledMainText>{tech.description}</StyledMainText>
                </StyledMainContent>
              </AnimatedContent>
            ))}
          </StyledSubContent>
          <StyledSectionPictures>
            <figure>
              <img
                src={technology[activeStep].images.portrait}
                alt={technology[activeStep].title}
              />
            </figure>
          </StyledSectionPictures>
        </div>
      </StyledMainText>
    </StylesSpace>
  </StylesHome>
);
};

