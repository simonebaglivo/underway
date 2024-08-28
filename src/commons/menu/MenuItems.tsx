import React from "react";

// Importing: Constants.
import { menuItems } from "../constants";

export default function MenuItems() {
  return (
    <ul className="menu-items">
      {menuItems.map((item) => (
        <li key={item} className="pointer">
          <span onClick={() => window.location.replace(item || "home")}>
            {item || "home"}
          </span>
        </li>
      ))}
    </ul>
  );
}
