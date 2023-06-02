import React from "react";
import { StylesNotFound } from "./StylesNotFound";
import { NavLink} from "react-router-dom";

export const NotFound = () => {
  return (
    <StylesNotFound>
      <NavLink to='/'>
        <div>
          <button>
            Home
          </button>
        </div>
      </NavLink>

    </StylesNotFound>
  )

};
