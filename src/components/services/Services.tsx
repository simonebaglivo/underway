import React from "react";

// Importing: Styles.
import "./services.css";

// Importing: Hooks.
import useIsTablet from "../../commons/isTabletHook";

// Importing: Constants.
import { servicesDetails } from "../../commons/constants";

export default function Services() {
  const isTablet = useIsTablet();

  // Declaring States.
  const [servicesClass, setServicesClass] = React.useState("services");

  const onScroll = () => {
    const defaultServices = isTablet ? "services-mobile" : "services";

    if (window.scrollY >= 60) {
      return setServicesClass(`${defaultServices} scroll-animation`);
    }
  };

  React.useEffect(() => {
    const defaultServices = isTablet ? "services-mobile" : "services";
    setServicesClass(defaultServices);
  }, [isTablet]);

  React.useEffect(() => {
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isTablet]);

  const classes = [
    "mr-auto ml10",
    "ml-auto mr15",
    "mr-auto ml20",
    "ml-auto mr10",
  ];

  return (
    <>
      <div className={servicesClass} id="history">
        <div className="services__banners">
          {servicesDetails.map((item, index) => (
            <div key={index} className={`services__detail ${classes[index]}`}>
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
