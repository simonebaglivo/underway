// Importing: Styles.
import "./service.css";

// Importing: Copy.
import {
  service2,
  service3,
  poolService,
  hospitalService,
  hospitalService2,
  hospitalService3,
} from "../../copy";

// Importing: Router.
import { useLocation } from "react-router-dom";

// Importing: Components.
import Cover from "../../components/cover/Cover";

// Importing: Hooks.
import useIsXl from "../../commons/isXlHook";
import useIsTablet from "../../commons/isTabletHook";

// Importing: Commons.
import Menu from "../../commons/menu/Menu";
import Footer from "../../commons/footer/Footer";
import Section from "../../components/section/Section";

// Importing: Constants.
import {
  subItems,
  multiItems,
  binaryItems,
  hospitalItems,
} from "../../commons/constants";

export default function Service({ id }: ServiceInterface) {
  const isXl = useIsXl();
  const isTablet = useIsTablet();
  const { state } = useLocation();

  const getAnimationClass = () => {
    if (isTablet) return "binary break";
    if (isXl) return "binary binary-large";
    return "binary";
  };

  const services = {
    pool: {
      sectionItems: subItems,
      secondService: service2,
      sectionCopy: poolService,
      secondItems: binaryItems,
      banner: "BINARI SUBACQUEI",
      lastService: <Section copy={service3} items={[]} />,
    },
    hospital: {
      secondItems: multiItems,
      sectionItems: hospitalItems,
      sectionCopy: hospitalService,
      banner: "SERVIZI MULTIMEDIALI",
      secondService: hospitalService2,
      lastService: (
        <div className="container lastservice">{hospitalService3}</div>
      ),
    },
  };

  const service = services[id];

  return (
    <>
      <Menu />
      <Cover id={id || state.id} />
      <Section copy={service.sectionCopy} items={service.sectionItems} />

      <div className={getAnimationClass()}>
        <div className="binary__head">{service.banner}</div>
      </div>
      <Section
        copy={service.secondService}
        negative
        items={service.secondItems}
      />
      {service.lastService}
      <Footer />
    </>
  );
}

interface ServiceInterface {
  id: "pool" | "hospital";
}
