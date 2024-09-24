import React, { useEffect } from "react";
import "../styles/careContext.css";
import careImg from "../assets/Illustration2.png";

import AOS from "aos";
import "aos/dist/aos.css";
function Context() {
   useEffect(() => {
     AOS.init({
       offset: 100,
       delay: 100,
       duration: 1000,
       easing: "ease-in-out",
       once: true,
       mirror: false
     });
     AOS.refresh();
   }, []);
  return (
    <div className="careWrapper">
      <div className="careContext"  data-aos="zoom-in-up">
        <h1>We take care of <br /> your website</h1>
        <p>
          We secure websites by automatically finding and fixing threats.
          Website security software protects your data website from malicious
          cyber threats.
        </p>
        
      </div>
      <div className="careContextImage"  data-aos="zoom-in-up">
        <img src={careImg} alt="" />
      </div>
    </div>
  );
}

export default Context;
