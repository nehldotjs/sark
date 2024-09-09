import React from "react";
import "../styles/dataEx.css";

import borderCurve from "../assets/Divider.png";
import illustration from "../assets/Illustration3.png";

import slack from "../assets/slack.png";
import trivago from "../assets/trivago.png";

function DataExchange() {
  const rating = 5;
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
            <h1>Data exchange is the most secured</h1>
            <p>
              Data security refers to the process of protecting all data from
              unauthorized access and data corruption throughout its lifecycle.
            </p>
          </div>
        </div>
      </div>

      <div className="dataEx-content2Wrapper">
        <div className="de-content2">
          <h1>Trusted by 1200+ world class businesses</h1>
          <div className="de-con-1">
            <div className="de-crd">
              <div>
                {[1, 2, 3, 4].map((star) => (
                  <span
                    key={star}
                    style={{
                      color: star <= rating ? "#FFD700" : "#E0E0E0",
                      fontSize: "30px"
                    }}>
                    ★
                  </span>
                ))}
              </div>
              <p>
                “I just wanted to share a quick note and let you know that you
                guys do a really good job. I'm glad I decided to work with you.
                It's really great how easy your websites are to update and
                manage."
              </p>
              <img src={slack} alt="" className="cardLogo" />
            </div>

            <div className="de-crd">
              <div>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    style={{
                      color: star <= rating ? "#FFD700" : "#E0E0E0",
                      fontSize: "30px"
                    }}>
                    ★
                  </span>
                ))}
              </div>
              <p>
                “I just wanted to share a quick note and let you know that you
                guys do a really good job. I'm glad I decided to work with you.
                It's really great how easy your websites are to update and
                manage."
              </p>
              <img src={trivago} alt="" className="cardLogo" />
            </div>
          </div>
        </div>
      </div>

      <div className="curve2">
        <img src={borderCurve} alt="" />
      </div>
    </div>
  );
}

export default DataExchange;
