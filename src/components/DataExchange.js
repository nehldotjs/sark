import React from "react";
import "../styles/dataEx.css";

import borderCurve from "../assets/Divider.png";
import illustration from "../assets/Illustration3.png";
function DataExchange() {
  return (
    <div className="dataExWrapper">
      <div className="curve1">
        <img src={borderCurve} alt="" />
      </div>
      <div className="dataEx-content1Wrapper">
        <div className="de-content1">
          <div className="de-illustrationWrapper">
            <img src={illustration} alt="" />
          </div>
          <div className="de-writeUp">
            <h1>
              Data exchange is   the most secured
            </h1>
            <p>Data security refers to the process of protecting all data from unauthorized access and data corruption throughout its lifecycle.</p>
          </div>
        </div>
      </div>

      <div className="dataEx-content2Wrapper">
        <div className="de-content2">
          <h1>world</h1>
        </div>
      </div>
      
      <div className="curve2">
        <img src={borderCurve} alt="" />
      </div>
    </div>
  );
}

export default DataExchange;
