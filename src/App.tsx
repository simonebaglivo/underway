import React from "react";

// Importing: Styles.
import "./App.css";
import "./mobile.css";

// Importing: Constants.
import { roots } from "./commons/constants";

// Importing: Router.
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter(roots);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
