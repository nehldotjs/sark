import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Screens from "./Screens";

function App() {
  return (
    <BrowserRouter>
      <Screens />
    </BrowserRouter>
  );
}

export default App;
