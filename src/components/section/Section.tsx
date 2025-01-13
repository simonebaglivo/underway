import React from "react";

// Importing: Hooks.
import useIsTablet from "../../commons/isTabletHook";

// Importing: FontAwesome.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Importing: Icons.
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { accordionItemsInterface } from "../../commons/constants";

export default function Section({ copy, items, negative }: SectionInterface) {
  const isTablet = useIsTablet();
  const [accordion, setAccordion] = React.useState([true, false, false, false]);

  const introClass = isTablet ? "text-justify" : "text-justify break__line";

  const onAccordionClick = (index: number) => {
    const newAccordion = accordion;
    newAccordion[index] = !accordion[index];
    setAccordion([...newAccordion]);
  };

  const getHeading = (item: accordionItemInterface, index: boolean) => (
    <>
      <span>{item.title}</span>
      <FontAwesomeIcon icon={index ? faArrowUp : faArrowDown} />
    </>
  );

  const getContainerClass = () => {
    const containerClass = "container scroll-animation";
    if (!negative) return containerClass;
    return `${containerClass} m-negative`;
  };

  return (
    <>
      <div className={getContainerClass()}>
        <div className={introClass}>{copy}</div>
        <div className="accordion">
          {items.map((item, index) => (
            <div className="accordion__shadow" key={item.title}>
              <div
                className="accordion__head"
                onClick={() => onAccordionClick(index)}
              >
                {getHeading(item, accordion[index])}
              </div>

              <div className={accordion[index] ? "show" : "h-0"}>
                <div>{item.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

interface accordionItemInterface {
  title: string;
  content: string | JSX.Element;
}

interface SectionInterface {
  copy: string;
  negative?: boolean;
  items: accordionItemsInterface[];
}
