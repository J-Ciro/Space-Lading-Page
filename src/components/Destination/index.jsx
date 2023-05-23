import React from "react";
import { StylesDestination } from "./StyleDestination";
import { destinations } from "../../Data/data";
import { NavBar } from "../Home/Navbar/NavBar";
import { ImgCrew } from "../Crew/StyleCrew";


export const Destination = () => {
  
  return (
    <StylesDestination>
      <div className="titleDestination">
        <span className="titleNumber">01</span>
        <span className="title">PICK YOUR DESTINATION</span>
      </div>
      <nav className="navPlanetas">
        <ul>
          {destinations.map((destination, index) => {
            return (
              <li key={index}>
                <a href={destination.link}>{destination.name}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </StylesDestination>
  )


};
