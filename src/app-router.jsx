import * as React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import { Home, ComingSoon } from "./pages";
import { Navbar } from "./components";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const maintainence = false;
  return (
    <>
      {maintainence ? (
        <ComingSoon />
      ) : (
        <HashRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </HashRouter>
      )}
    </>
  );
}

export default App;
