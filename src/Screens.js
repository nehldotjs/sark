import React from "react";
import { Routes, Route } from "react-router-dom";
import "./screens.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import CareContext from "../src/components/CareContext";
import DataExchange from "./components/DataExchange";

function Screens() {
  return (
    <div className="ScreenWrapper">
      <Nav />
      <Hero />
      <Cards />
      <CareContext />
      <DataExchange />
    </div>
  );
}

export default Screens;
