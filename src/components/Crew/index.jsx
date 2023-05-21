// import React from "react";
// import { NavBar } from "../Home/Navbar/NavBar";
// import { crew } from "../../Data/data.js";

// export const Crew = () => {

//   return (
//     <>
//       <NavBar />
//       {crew.map((person) => (
//         <div key={person.id}>
//             <h3>{person.role}</h3>
//             <h1>{person.name}</h1>
//           <img src={person.image.png} alt={person.name} />
//           <p>{person.bio}</p>
//         </div>
// ))}
//     </>
//   );
// }

import React, { useState } from "react";
import { NavBar } from "../Home/Navbar/NavBar";
import { crew } from "../../Data/data.js";
import styled from "styled-components";
import { StylesCrew, ContentText, Slider, SliderItem, ImgCrew, RolePerson, NamePerson, BioPerson, DivBtnSlider, Btn, MeetCrew, DivMeetCrew, CarouselContainer } from "./StyleCrew";


export const Crew = () => {
  const [activeSlider, setActiveSlider] = useState(0);

  const handleSliderChange = (index) => {
    setActiveSlider(index);
  };

  const handlePrevSlide = () => {
    setActiveSlider(prevActive => (prevActive === 0 ? crew.length - 1 : prevActive - 1));
  };

  const handleNextSlide = () => {
    setActiveSlider(prevActive => (prevActive === crew.length - 1 ? 0 : prevActive + 1));
  };

  return (
    <>
      <StylesCrew>
        <NavBar />
        
        <CarouselContainer>
          
          <Slider>
          
            {crew.map((person, index) => (
              <SliderItem key={person.id} active={index === activeSlider}>
                
                <ContentText>
                <DivMeetCrew>
                <MeetCrew>02 MEET YOUR CREW</MeetCrew>
                </DivMeetCrew>
               
                  <RolePerson>{person.role}</RolePerson>
                  <NamePerson>{person.name}</NamePerson>
                  <BioPerson>{person.bio}</BioPerson>
                </ContentText>
                <ImgCrew>
                <img src={person.image.png} alt={person.name} width={380}/>
                </ImgCrew>
                
              </SliderItem>
            ))}
          </Slider>

          <div className="slider-buttons">
            {/* <button onClick={handleNextSlide}>Next</button> */}
          </div>
          <DivBtnSlider className="static-buttons">
            {crew.map((person, index) => (
              <Btn
                key={person.id}
                className={index === activeSlider ? "active" : ""}
                onClick={() => handleSliderChange(index)}
              >
              </Btn>
            ))}
          </DivBtnSlider>
        </CarouselContainer>
      </StylesCrew>
    </>
  );
};
