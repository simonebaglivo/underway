import React from "react";

// Importing: Commons.
import MenuItems from "./MenuItems";

// Importing: Components.
import MenuMobile from "./MenuMobile";

// Importing: Hooks.
import useIsTablet from "../isTabletHook";

// Importing: Styles.
import "./menu.css";

export default function Menu() {
  const isTablet = useIsTablet();
  const { href } = window.location;
  const [navClass, setNavClass] = React.useState("menu");
  const isService = href.includes("hospital") || href.includes("pool");

  const onScroll = () => {
    const maxHeight = isService ? 120 : 200;
    if (window.scrollY >= maxHeight) return setNavClass("menu scrolled");
    return setNavClass("menu");
  };

  React.useEffect(() => {
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (isTablet) return <MenuMobile />;

  return (
    <>
      <nav className={navClass}>
        <MenuItems />
      </nav>
    </>
  );
}
