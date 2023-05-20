import React from "react";
import { NavBar } from "../Home/Navbar/NavBar";
import { crew } from "../../Data/data.js";

export const Crew = () => {

  return (
    <>
      <NavBar />
      {crew.map((person) => (
        <div key={person.id}>
            <h3>{person.role}</h3>
            <h1>{person.name}</h1>
          <img src={person.image.png} alt={person.name} />
          <p>{person.bio}</p>
        </div>
))}
    </>
  );
}