import React, { useState } from "react";
import { StylesDestination } from "./StyleDestination";
import { destinations } from "../../Data/data";
import { PageTitle, StyledPageName } from "../Technology/StyleTechnology";
import { SectionContent, StylesHome, StylesSpace } from "../Home/StyleHome";
import BackgrouDestination from "../../assets/destination/background-destination-desktop.jpg";

export const Destination = () => {
  const [selectedOption, setSelectedOption] = useState("Moon");
  const [selectedOptionColor, setSelectedOptionColor] = useState(0);
  const handleMenuClick = (option, index) => {
    setSelectedOption(option);
    setSelectedOptionColor(index)
  };

  return (
    <StylesHome backgroundImage={BackgrouDestination}>
      <StylesDestination>
        <SectionContent>
          <StylesSpace>
            <StyledPageName>
              <PageTitle number="01" pageName="PICK YOUR DESTINATION" />
            </StyledPageName>


            {selectedOption &&
              destinations.map((destination) => {
                if (destination.name === selectedOption) {
                  return (
                    <div className="infoDestination">
                      <figure>
                        <img src={destination.images.png} alt={destination.name} />
                      </figure>
                      <div className="informacionPlaneta">
                        <nav className="navPlanetas">
                          <ul>
                            {destinations.map((destination, index) => {
                              return (
                                <li onClick={() => handleMenuClick(destination.name, index)}
                                  style={{
                                    borderBottom: selectedOptionColor === index ? '3px solid #fff' : 'none',
                                    paddingBottom: '7px',
                                  }}
                                //className={selectedOptionColor === index ? 'optionSelected' : ''}
                                >

                                  <span>{destination.name}</span>
                                </li>
                              )
                            })
                            }
                          </ul>
                        </nav>
                        <h2 className="title">{destination.name}</h2>
                        <p className="description">{destination.description}</p>
                        <hr />
                        <div className="distanciaTiempo">
                          <div className="distancia">
                            <h4 >AVG. DISTANCE</h4>
                            <h2>{destination.distance}</h2>
                          </div>
                          <div>
                            <h4>Est. travel time</h4>
                            <h2>{destination.travel}</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
                return null;

              })}






            {/* <StyledMainContent>
              <StyledTerm>THE TERMINOLOGY</StyledTerm>
              <StyledHeading3>{"tech.name"}</StyledHeading3>
              <StyledMainText>{"tech.description"}</StyledMainText>
            </StyledMainContent> */}
          </StylesSpace>
        </SectionContent>
      </StylesDestination>

      {/* <div className="titleDestination">
        <span className="titleNumber">01</span>
        <span className="title">PICK YOUR DESTINATION</span>
      </div> */}

    </StylesHome>
  );
};
