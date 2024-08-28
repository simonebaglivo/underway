import React from "react";

// Importing: Constants.
import { qualities } from "../../commons/constants";

// Importing: FontAwesome.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Importing: Styles.
import "./qualities.css";

export default function Qualities() {
  return (
    <>
      {qualities.map((item, index) => (
        <React.Fragment key={item.title}>
          <div className="qualities__card">
            <div className="qualities__icon">
              <FontAwesomeIcon icon={item.icon} />
            </div>

            <div className="qualities__description">{item.title}</div>
          </div>

          {index < qualities.length && <hr />}
        </React.Fragment>
      ))}
    </>
  );
}
