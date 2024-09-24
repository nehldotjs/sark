import React from "react";
import vectorLine from "../assets/Vector 17.png";
import divider from "../assets/Divider.png";
import illustration from "../assets/Illustration.png";
import "../styles/hero.css";
function Hero() {
  return (
    <div className="hero">
      <div className="hero-main">
        <div className="illustrationWrapper">
          <img src={illustration} alt="" className="illustration" />
        </div>

        <div className="heroContext ">
          <p className="hero-header">Ensuring maximum security</p>
          <h1>Protect all your data with strong security access</h1>
          <p className="hero-writeup">
            This is software that protect all your data, including strong
            security access. Use data as needed and provide security
          </p>
          <button className="scanBtn">
            <p>scan your website - free</p>
          </button>
        </div>
      </div>

      <div className="hero-vector-line">
        <img src={divider} alt="" className="divider" />
        <img src={vectorLine} alt="" className="vectorLine" />
      </div>
    </div>
  );
}

export default Hero;
