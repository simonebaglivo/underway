import React from "react";

// Importing: Constants.
import { servicesDetails } from "../../commons/constants";

// Importing: Styles.
import "./services.css";

export default function Services() {
  return (
    <>
      <div className="services">
        <div className="history">La mia storia</div>
        <div className="services__banners">
          {servicesDetails.map((item, index) => (
            <div key={index} className="services__detail">
              {item.image}
              <div className="services__description ml-auto mr-20">
                {item.copy}
              </div>
            </div>
          ))}

          <div className="space"></div>
        </div>
      </div>
    </>
  );
}
