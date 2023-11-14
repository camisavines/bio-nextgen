import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./pages";
import {Navbar} from "./components"
import ErrorPage from "./components/Error/error-page";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />
    },
  ]);

  return (
    <>
    <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
