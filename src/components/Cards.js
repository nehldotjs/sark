import React from "react";
import "../styles/card.css";

import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";

function Cards() {
  const cardArr = [
    {
      id: 1,
      icon: icon1,
      header: "Secured & Safe Payments",
      writeUp:
        "By and large, credit cards are easily the most secure and safe payment method to use when you shop online. credit cards most secure."
    },
    {
      id: 2,
      icon: icon2,
      header: "Secured & Safe Payments",
      writeUp:
        "By and large, credit cards are easily the most secure and safe payment method to use when you shop online. credit cards most secure."
    },
    {
      id: 3,
      icon: icon3,
      header: "24/7 Customer Support",
      writeUp:
        "The biggest benefit of offering 24/7 support is that you provide a more convenient service for your customers providing clock support."
    }
  ];
  return (
    <div className="cardWrapper">
      {cardArr.map((arr) => {
        const { id, icon, header, writeUp } = arr;
        return (
          <div className="card" key={id}>
            <div className="cardIcon">
              <img src={icon} alt="" />
            </div>
            <div className="cardHeader">
              <h3>{header}</h3>
            </div>
            <div className="cardWriteup">
              <p>{writeUp}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
