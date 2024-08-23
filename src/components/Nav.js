import React from "react";
import "../styles/nav.css";

import { Link } from "react-router-dom";

import logoteal from "../assets/sark-logo-teal.png";
import logoindigo from "../assets/sark-logo-indigo.png";

function Nav() {
  return (
    <div className="nav">
      <div className="logo">
        <div className="logoImageWrapper">
          <img src={logoindigo}  className="logoimage" alt="" />
          <img src={logoteal} className="logoimage logo2"  alt="" />
        </div>
        Sark
      </div>

      <div className="links">
        <Link className="links">Demos</Link>
        <Link className="links">About</Link>
        <Link className="links">Blog</Link>
        <Link className="links">Pages</Link>
        <Link className="links">Contact</Link>
      </div>
    </div>
  );
}

export default Nav;
