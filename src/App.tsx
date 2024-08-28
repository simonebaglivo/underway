import React from "react";

// Importing: Styles.
import "./App.css";

// Importing: Constants.
import { roots } from "./commons/constants";

// Importing: Commons.
import Menu from "./commons/menu/Menu";
import Footer from "./commons/footer/Footer";

// Importing: Router.
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter(roots);

  return (
    <div className="App">
      <Menu />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
