import React, { useEffect } from "react";
import "../styles/footer.css";

import AOS from "aos";
import "aos/dist/aos.css";
 

function Footer() {

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


  const footerData = [
    {
      id: 1,
      header: "company",
      link: ["about", "features", "works", "career"]
    },
    {
      id: 2,
      header: "help",
      link: [
        "customer support",
        "delivery details",
        "terms and condition",
        "privacy policy"
      ]
    },
    {
      id: 3,
      header: "resources",
      link: [
        "free eBooks",
        "development tutorial",
        "how to-blog",
        "youtube playlist"
      ]
    },
    {
      id: 4,
      header: "extra links",
      link: [
        "customer support",
        "delivery details",
        "terms and condition",
        "privacy policy"
      ]
    }
  ];

  return (
    <div className="footer-wrapper">
      <div className="footerLinks-wrapper">
        {footerData.map((x) => {
          const { id, header, link } = x;
          return (
            <div className="f-link-sections" key={id} data-aos="zoom-in-up">
              <h4 className="f-links-header">{header}</h4>
              <div className="f-main-link-wrapper">
                {link.map((y,index) => {
                  return <p key={index}>{y}</p>;
                })}
              </div>
            </div>
          );
        })}
      </div>
      <hr />
      <div className="sub-footer">
        <div className="logoHere"> Sark</div>
        <p>© Copyright 2021, All Rights Reserved</p>
        <div className="socialLinks">Lorem ipsum dolor sit.</div>
      </div>
    </div>
  );
}

export default Footer;
