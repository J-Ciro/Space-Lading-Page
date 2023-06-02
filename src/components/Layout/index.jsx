import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../Home/Navbar/NavBar";

export const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};
