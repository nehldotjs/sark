import React from "react";
// import { Routes, Route } from "react-router-dom";
import "./screens.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import CareContext from "../src/components/CareContext";
import DataExchange from "./components/DataExchange";
import Plan from "./components/Plan";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";

function Screens() {
  return (
    <div className="ScreenWrapper">
      <Nav />
      <Hero />
      <Cards />
      <CareContext />
      <DataExchange />
      <Plan />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default Screens;
