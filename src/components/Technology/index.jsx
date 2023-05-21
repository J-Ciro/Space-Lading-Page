import React from "react";
import { SectionContent, StylesHome, StylesSpace } from "../Home/StyleHome";
import techBackground from "../../assets/technology/background-technology-desktop.jpg";
import rocket from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import {
  StyledContainerSteps,
  StyledHeading3,
  StyledMainText,
  StyledPageName,
  StyledPageTitle,
  StyledSectionPictures,
  StyledSpanNumber,
  StyledSpanPage,
  StyledSteps,
  StyledSubContent,
  StyledTerm,
  StylesMainText,
} from "./StyleTechnology";

export const Technology = () => {
  return (
    <StylesHome backgroundImage={techBackground}>
      <StylesSpace>
        <StylesMainText>
          <StyledPageName>
            <StyledPageTitle>
              <StyledSpanNumber>03</StyledSpanNumber>
              <StyledSpanPage>SPACE LAUNCH 101</StyledSpanPage>
            </StyledPageTitle>
          </StyledPageName>
          <StyledSubContent>
            <StyledContainerSteps>
              <StyledSteps>1</StyledSteps>
              <StyledSteps>2</StyledSteps>
              <StyledSteps>3</StyledSteps>
            </StyledContainerSteps>
            <div>
              <StyledTerm>THE TERMINOLOGY</StyledTerm>
              <StyledHeading3>LAUNCH VEHICLES</StyledHeading3>
              <StyledMainText>
                A launch vehicle or carrier rocket is a rocket-propelled vehicle
                used to carry a payload from Earth's surface to space, usually
                to Earth orbit or beyond. Our WEB-X carrier rocket is the most
                powerful in operation. Standing 150 metres tall, it's quite an
                awe-inspiring sight on the launch pad!
              </StyledMainText>
            </div>
          </StyledSubContent>
        </StylesMainText>
        <StyledSectionPictures>
          <figure>
            <img src={rocket} alt="" />
          </figure>
        </StyledSectionPictures>
      </StylesSpace>
    </StylesHome>
  );
};
