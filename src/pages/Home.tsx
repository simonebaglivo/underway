import React from "react";

// Importing: Components.
import Menu from "../commons/menu/Menu";
import Cover from "../components/cover/Cover";
import Footer from "../commons/footer/Footer";
import Services from "../components/services/Services";

export default function Home() {
  return (
    <>
      <Menu />
      <Cover full />
      <Services />
      <Footer />
    </>
  );
}
