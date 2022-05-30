import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Restaurant from "../pages/restaurant";
import SitDown from "../pages/sitDown";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="stochastic-system/" element={<Restaurant />} />
        <Route path="/stochastic-system/sitDown" element={<SitDown />} />
      </Routes>
    </BrowserRouter>
  );
}
