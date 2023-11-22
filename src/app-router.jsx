import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import { Home, ComingSoon, Resume, Projects, About } from "./pages";
import { Navbar, Footer } from "./components";

import "bootstrap/dist/css/bootstrap.min.css";
import "./theme.scss";
import "./index.css";

function App() {
  const maintainence = false;
  const [theme, setTheme] = useState("light");

  return (
    <>
      {maintainence ? (
        <ComingSoon />
      ) : (
        <HashRouter className={`app-router theme-${theme}`}>
          <div className={`${theme === "light" ? "theme-light" : "theme-dark"}`}>
            <Navbar theme={theme} setTheme={setTheme} />

            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/#/resume" element={<Resume />} />
              <Route path="/#/projects" element={<Projects />} />
              <Route path="/#/about" element={<About />} />
            </Routes>
            <Footer />
          </div>
        </HashRouter>
      )}
    </>
  );
}

export default App;
