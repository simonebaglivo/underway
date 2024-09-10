import React from "react";

// Importing: Pages.
import Home from "../pages/Home";
import Service from "../pages/service/Service";

// Importing: Router.
import { Navigate } from "react-router-dom";

// Importing: Copy.
import { history2, underHistory } from "../copy";

// Importing: Icons.
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";

export const roots = [
  { path: "/", element: <Home /> },
  { path: "/pool", element: <Service id="pool" /> },
  { path: "*", element: <Navigate to={"/"} replace /> },
  { path: "/hospital", element: <Service id="hospital" /> },
];

export const qualities = [
  { icon: faMicrochip, title: "passione" },
  { icon: faMicrochip, title: "esperienza" },
  { icon: faMicrochip, title: "innovazione" },
];

export const coverItems = [
  {
    id: "pool",
    title: "riprese subacquee",
  },
  {
    id: "hospital",
    title: "servizi tv ospedalieri",
  },
];

export const accordionItems = [
  { title: "attivita 1", content: "contenuto 1" },
  { title: "attivita 2", content: "contenuto 2" },
  { title: "attivita 3", content: "contenuto 3" },
  { title: "attivita 4", content: "contenuto 4" },
];

export const servicesDetails = [
  {
    copy: underHistory,

    image: (
      <div className="services__circle mr-auto l-10">
        30<span>+</span>
      </div>
    ),
  },
  {
    copy: history2,

    image: (
      <img
        alt="RAI"
        className="services__circle r-80"
        src={require("../assets/rai.png")}
      />
    ),
  },
  {
    copy: underHistory,

    image: (
      <div className="services__circle mr-auto l-10">
        30<span>+</span>
      </div>
    ),
  },
  {
    copy: history2,

    image: (
      <img
        alt="RAI"
        className="services__circle r-80"
        src={require("../assets/rai.png")}
      />
    ),
  },
];

export const menuItems = [
  { text: "", to: "/#home" },
  { text: "servizi", to: "" },
  { text: "chi siamo", to: "/#history" },
  { text: "contatti", to: "#contacts" },
];

export const tabletItems = [
  { text: "", to: "" },
  { text: "servizi tv ospedalieri", to: "/hospital" },
  { text: "riprese subacquee", to: "/hospital" },
  { text: "chi siamo", to: "/#history" },
  { text: "contatti", to: "#contacts" },
];
