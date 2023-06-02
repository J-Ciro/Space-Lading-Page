import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../components/Home";
import { Destination } from "../components/Destination";
import { Crew } from "../components/Crew";
import { Technology } from "../components/Technology";
import { NotFound } from "../components/NotFound";
import { Layout } from "../components/Layout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="destination" Component={Destination} />
          <Route path="crew" Component={Crew} />
          <Route path="technology" element={<Technology />} />
          <Route path="/" element={<Navigate to="/Home" />} />
        </Route>
        <Route path="*" Component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
