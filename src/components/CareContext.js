import React from "react";
import "../styles/careContext.css";
import careImg from "../assets/Illustration2.png";
function Context() {
  return (
    <div className="careWrapper">
      <div className="careContext">
        <h1>We take care of <br /> your website</h1>
        <p>
          We secure websites by automatically finding and fixing threats.
          Website security software protects your data website from malicious
          cyber threats.
        </p>
        
      </div>
      <div className="careContextImage">
        <img src={careImg} alt="" />
      </div>
    </div>
  );
}

export default Context;
