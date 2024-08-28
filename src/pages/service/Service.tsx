import React from "react";

// Importing: Styles.
import "./service.css";

// Importing: Copy.
import { service } from "../../copy";

// Importing: Router.
import { useLocation } from "react-router-dom";

// Importing: Components.
import Cover from "../../components/cover/Cover";

// Importing: Constants.
import { accordionItems } from "../../commons/constants";

// Importing: Icons.
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

// Importing: FontAwesome.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Service({ id }: ServiceInterface) {
  const { state } = useLocation();
  const [accordion, setAccordion] = React.useState([true, false, false, false]);

  const getHeading = (item: accordionItemInterface, index: boolean) => {
    const heading = (
      <>
        <span>{item.title}</span>
        <FontAwesomeIcon icon={index ? faArrowUp : faArrowDown} />
      </>
    );

    return heading;
  };

  const onAccordionClick = (index: number) => {
    const newAccordion = accordion;
    newAccordion[index] = !accordion[index];
    setAccordion([...newAccordion]);
  };

  return (
    <>
      <Cover id={id || state.id} />

      <div className="container">
        <div className="service__intro">{service}</div>
        <div className="accordion">
          {accordionItems.map((item, index) => (
            <div key={item.title}>
              <div
                className="accordion__head"
                onClick={() => onAccordionClick(index)}
              >
                {getHeading(item, accordion[index])}
              </div>

              <p className={accordion[index] ? "show" : "hide"}>
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

interface ServiceInterface {
  id: string;
}

interface accordionItemInterface {
  title: string;
  content: string;
}
