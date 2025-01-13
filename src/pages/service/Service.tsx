// Importing: Styles.
import "./service.css";

// Importing: Copy.
import { service, service2, service3 } from "../../copy";

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
import { binaryItems, subItems } from "../../commons/constants";

export default function Service({ id }: ServiceInterface) {
  const isXl = useIsXl();
  const isTablet = useIsTablet();
  const { state } = useLocation();

  const getAnimationClass = () => {
    if (isTablet) return "binary break";
    if (isXl) return "binary binary-large";
    return "binary";
  };

  return (
    <>
      <Menu />
      <Cover id={id || state.id} />
      <Section copy={service} items={subItems} />

      <div className={getAnimationClass()}>
        <svg
          className="topshape"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,128L30,133.3C60,139,120,149,180,138.7C240,128,300,96,360,117.3C420,139,480,213,540,234.7C600,256,660,224,720,181.3C780,139,840,85,900,74.7C960,64,1020,96,1080,101.3C1140,107,1200,85,1260,80C1320,75,1380,85,1410,90.7L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
        <div className="binary__head">
          <svg
            className="bottomshape"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#fff"
              fill-opacity="1"
              d="M0,64L48,58.7C96,53,192,43,288,74.7C384,107,480,181,576,176C672,171,768,85,864,64C960,43,1056,85,1152,106.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          BINARI SUBACQUEI
        </div>
      </div>

      <Section copy={service2} negative items={binaryItems} />
      <Section copy={service3} items={[]} />
      <Footer />
    </>
  );
}

interface ServiceInterface {
  id: string;
}
