import React, { useEffect } from "react";
import "../styles/plan.css";

import AOS from "aos";
import "aos/dist/aos.css";
function Plan() {
  const planCardDetails = [
    {
      id: 1,
      amount: "4",
      less: "1",
      lessPeriod: "day",
      period: "Week"
    },
    {
      id: 2,
      amount: "19",
      less: "5",
      lessPeriod: "month",
      period: "Month"
    },
    {
      id: 3,
      amount: "99",
      less: "2",
      lessPeriod: "year",
      period: "Year"
    }
  ];

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
    <div className="plan-Wrapper">
      <h1>
        Affordable plans for <br /> our customers
      </h1>
      <p>Try free for 30 Days</p>
      <div className="plan-cards-container">
        {planCardDetails.map((x) => {
          const { id, amount, less, period, lessPeriod } = x;
          return (
            <div key={id} className="p-card-main" data-aos="zoom-in-up">
              <div className="p-card-writeup">
                <p>1 {period}</p>
                <h1>${amount}</h1>
                <h5>
                  Less than ${less} a {lessPeriod}
                </h5>
                <p>Billed every {period} </p>
                <p>Cancel any time</p>
              </div>
              <button>Get started now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Plan;