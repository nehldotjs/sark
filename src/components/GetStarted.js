import React from "react";
import "../styles/getStarted.css";
import borderCurve from "../assets/Divider.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
function GetStarted() {
  return (
    <div className="getStarted-wrapper">
      <div className="borderCurve">
        <img src={borderCurve} alt="" />
      </div>
      <div className="gs-contentWrapper">
        <div className="gs-box1">
          <h1>Ready to get started?</h1>
          <p>
            Create custom landing pages with Rare blocks that converts more
            visitors than any website. With lots of unique blocks, you can
            easily build a page.
          </p>
          <button>Try 14 days for free</button>
        </div>

        <div className="gs-box2">
          <div className="gs-icon">
            <img src={icon4} alt="" />
          </div>
          <div className="boxHeader">
            <h3>Store data on cloud</h3>
            <p>
              Create beautiful landing pages with Rare blocks that converts.
            </p>
          </div>
        </div>
        <div className="gs-box2">
          <div className="gs-icon">
            <img src={icon5} alt="" />
          </div>
          <div className="boxHeader">
            <h3>Connect dots smartly</h3>
            <p>
              Create beautiful landing pages with Rare blocks that converts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
