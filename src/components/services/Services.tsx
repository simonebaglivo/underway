import React from "react";

// Importing: Styles.
import "./services.css";

// Importing: Hooks.
import useIsTablet from "../../commons/isTabletHook";

// Importing: Constants.
import { servicesDetails } from "../../commons/constants";

export default function Services() {
  const isTablet = useIsTablet();
  const historyClass = isTablet ? "history-mobile" : "history";

  // Declaring States.
  const [servicesClass, setServicesClass] = React.useState("services");

  const onScroll = () => {
    if (servicesClass === "services" && isTablet) {
      setServicesClass("services-mobile");
      return;
    }

    if (window.scrollY >= 60) {
      return setServicesClass("services scroll-animation");
    }

    return setServicesClass("services");
  };

  React.useEffect(() => {
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className={servicesClass} id="history">
        <div className={historyClass}>La mia storia</div>
        <div className="services__banners">
          {servicesDetails.map((item, index) => (
            <div key={index} className="services__detail">
              {item.image}
            <div className="services__description ml-auto mr-45">
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
