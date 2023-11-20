import * as React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages";
import { Navbar } from "./components";
import "./index.css"

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
