import React from "react";

// Importing: Components.
import MenuItems from "./MenuItems";

export default function MenuMobile() {
  const [containerClass, setContainerClass] = React.useState("nav-container");

  const onNavClick = () => {
    if (containerClass === "nav-container") {
      return setContainerClass("nav-container navbar-open");
    }

    return setContainerClass("nav-container");
  };

  return (
    <>
      <nav>
        <div className="navbar">
          <div className={containerClass}>
            <input
              type="button"
              onClick={onNavClick}
              className="navbar__button"
            />

            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>

            <MenuItems />
          </div>
        </div>
      </nav>
    </>
  );
}
