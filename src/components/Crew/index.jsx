import React, { useState } from "react";
import { NavBar } from "../Home/Navbar/NavBar";
import { crew } from "../../Data/data";
import {
  StylesCrew,
  ContentText,
  Slider,
  SliderItem,
  ImgCrew,
  RolePerson,
  NamePerson,
  BioPerson,
  DivBtnSlider,
  Btn,
  MeetCrew,
  DivMeetCrew,
  CarouselContainer,
  TitleMeetCrew,
  DivBtnSliderTablet,
} from "./StyleCrew";

export const Crew = () => {
  const [activeSlider, setActiveSlider] = useState(0);

  const handleSliderChange = (index) => {
    setActiveSlider(index);
  };

  return (
    <>
      <StylesCrew>
        {/* <NavBar /> */}

        <CarouselContainer>
          <Slider>
            {crew.map((person, index) => (
              <SliderItem
                key={person.id}
                active={index === activeSlider}
              >
                <ContentText>
                  <DivMeetCrew>
                    <MeetCrew>
                      <p>02</p>
                      <TitleMeetCrew>MEET YOUR CREW</TitleMeetCrew>
                    </MeetCrew>
                  </DivMeetCrew>
                  <RolePerson>{person.role}</RolePerson>
                  <NamePerson>{person.name}</NamePerson>
                  <BioPerson>{person.bio}</BioPerson>
                  <DivBtnSlider className="static-buttons">
                    {crew.map((person, index) => (
                      <Btn
                        key={person.id}
                        className={index === activeSlider ? "active" : ""}
                        onClick={() => handleSliderChange(index)}
                      ></Btn>
                    ))}
                  </DivBtnSlider>
                </ContentText>

                <div className="slider-controls">
                  <DivBtnSliderTablet className="static-buttons">
                    {crew.map((person, index) => (
                      <Btn
                        key={person.id}
                        className={index === activeSlider ? "active" : ""}
                        onClick={() => handleSliderChange(index)}
                      ></Btn>
                    ))}
                  </DivBtnSliderTablet>

                  <ImgCrew>
                    <img src={person.image.png} alt={person.name} />
                  </ImgCrew>
                </div>
              </SliderItem>
            ))}
          </Slider>
        </CarouselContainer>
      </StylesCrew>
    </>
  );
};
