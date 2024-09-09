import React from "react";
import "../styles/footer.css";

function Footer() {
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
        {/* ___________________________________________ */}

        {footerData.map((x) => {
          const { id, header, link } = x;
          return (
            <div className="f-link-sections" key={id}>
              <h4 className="f-links-header">{header}</h4>
              <div className="f-main-link-wrapper">
                {link.map((y) => {
                  return <p>{y}</p>;
                })}
              </div>
            </div>
          );
        })}

        {/* ___________________________________________ */}
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
