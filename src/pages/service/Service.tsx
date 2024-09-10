import React from "react";

// Importing: Styles.
import "./service.css";

// Importing: Copy.
import { service } from "../../copy";

// Importing: Router.
import { useLocation } from "react-router-dom";

// Importing: Components.
import Cover from "../../components/cover/Cover";

// Importing: Hooks.
import useIsMobile from "../../commons/isTabletHook";

// Importing: Constants.
import { accordionItems } from "../../commons/constants";

// Importing: Icons.
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

// Importing: FontAwesome.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu from "../../commons/menu/Menu";
import Footer from "../../commons/footer/Footer";

export default function Service({ id }: ServiceInterface) {
  const isMobile = useIsMobile();
  const { state } = useLocation();
  const introClass = isMobile ? "text-justify" : "text-justify break__line";
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
      <Menu />
      <Cover id={id || state.id} />

      <div className="container">
        <div className={introClass}>{service}</div>
        <div className="accordion">
          {accordionItems.map((item, index) => (
            <div key={item.title}>
              <div
                className="accordion__head"
                onClick={() => onAccordionClick(index)}
              >
                {getHeading(item, accordion[index])}
              </div>

              <p className={accordion[index] ? "show" : "h-0"}>
                <span>{item.content}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
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
