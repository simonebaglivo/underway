import React from "react";

// Importing: Commons.
import MenuItems from "./MenuItems";

// Importing: Components.
import MenuMobile from "./MenuMobile";

// Importing: Hooks.
import useIsMobile from "../isMobileHook";

// Importing: Styles.
import "./menu.css";

export default function Menu() {
  const isMobile = useIsMobile();
  const [navClass, setNavClass] = React.useState("menu");

  const onScroll = () => {
    if (window.scrollY >= 200) return setNavClass("menu scrolled");
    return setNavClass("menu");
  };

  React.useEffect(() => {
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (isMobile) return <MenuMobile />;

  return (
    <>
      <nav className={navClass}>
        <MenuItems />
      </nav>
    </>
  );
}
