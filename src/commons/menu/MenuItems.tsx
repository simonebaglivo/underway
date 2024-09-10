import React from "react";

// Importing: Router.
import { HashLink } from "react-router-hash-link";

// Importing: Hooks.
import useIsTablet from "../isTabletHook";

// Importing: Constants.
import { menuItems, tabletItems } from "../constants";

function Dropdown({ item }: { item: itemsInterface }) {
  return (
    <li key={item.text} className="pointer dropdown">
      <span>{item.text}</span>

      <div className="dropdown__items">
        <p onClick={() => window.location.replace("/hospital")}>
          Servizi tv ospedalieri
        </p>
        <p onClick={() => window.location.replace("/pool")}>
          Riprese subacquee
        </p>
      </div>
    </li>
  );
}

export default function MenuItems() {
  const isTablet = useIsTablet();
  const items = isTablet ? tabletItems : menuItems;

  return (
    <ul className="menu-items">
      {items.map((item) => {
        if (item.text === "servizi" && !isTablet) {
          return <Dropdown key={item.text} item={item} />;
        }

        return (
          <li key={item.text} className="pointer">
            <span>
              <HashLink to={item.to}>{item.text || "home"}</HashLink>
            </span>
          </li>
        );
      })}
    </ul>
  );
}

interface itemsInterface {
  to: string;
  text: string;
}
