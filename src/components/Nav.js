import React, { useState } from "react";
import "../styles/nav.css";

import { Link } from "react-router-dom";

import logoteal from "../assets/sark-logo-teal.png";
import logoindigo from "../assets/sark-logo-indigo.png";

function Nav() {
  const [animation, setAnimation] = useState(false);
  const menuAnimation = () => {
    setAnimation(!animation);
  };

  return (
    <div className="nav">
      <div className="navWrapper">
        <div className="logo">
          <div className="logoImageWrapper">
            <img src={logoindigo} className="logoimage" alt="" />
            <img src={logoteal} className="logoimage logo2" alt="" />
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

        <button className="burgerMenuIcon" onClick={menuAnimation}>
          <div
            className={
              !animation ? "bm-line-1" : "bm-line-1 bm-line-1-animation"
            }></div>
          <div
            className={
              !animation ? "bm-line-2" : "bm-line-2 bm-line-2-animation"
            }></div>
          <div
            className={
              !animation ? "bm-line-3" : "bm-line-3 bm-line-3-animation"
            }></div>
        </button>
      </div>
      <div className="mobileMenu">
        <div className={  animation ?  "mm-links" : "mm-links navLinksAnimation"}>
          <Link className="mobileLinks">Demos</Link>
          <Link className="mobileLinks">About</Link>
          <Link className="mobileLinks">Blog</Link>
          <Link className="mobileLinks">Pages</Link>
          <Link className="mobileLinks">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
