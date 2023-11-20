import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavLink,
  NavDropdown,
  Dropdown,
  Container,
  Offcanvas,
  Col,
  Row,
} from "react-bootstrap";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import * as FaIcons from "react-icons/fa"
import * as MdIcons from "react-icons/md"

import { SidebarData, ContactData } from "./navdata";
import "./navbar.css"

export const MyNavbar = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    <>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="/" style={{ fontSize: "1rem", margin: "0 1rem" }}>
            Camisa Vines
          </Navbar.Brand>

          <Navbar.Toggle style={{ border: "none", boxShadow: "none" }}>
            <FaIcons.FaArrowCircleRight size={20} />
          </Navbar.Toggle>

          <Navbar.Offcanvas
            id={`off-canvas-navbar-expand-lg`}
            aria-labelledby={`off-canvas-navbar-label-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`off-canvas-navbar-label-expand-lg`}>
                Camisa Vines
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Dropdown drop="start" className="d-none d-lg-block">
                  <Dropdown.Toggle
                    as={CustomToggle}
                    id="dropdown-custom-components"
                  />

                  <Dropdown.Menu
                    style={{ minWidth: "300px", overflowY: "scroll" }}
                  >
                    <div style={{ width: "100%" }}>
                      <Row style={{padding: "1rem 2rem"}}>
                        {SidebarData.map((item) => (
                          <Col
                            xs={4}
                            style={{ textAlign: "center", padding: ".25rem" }}
                          >
                            <NavLink
                              href={item.path}
                              style={{ padding: "1rem 0" }}
                            >
                              {item.icon}
                              <p className="my-1">{item.title}</p>
                            </NavLink>
                          </Col>
                        ))}
                      </Row>

                      <Dropdown.Divider />

                      <Row style={{padding: "1rem 2rem"}}>
                        {ContactData.map((item) => (
                          <Col
                            xs={6}
                            style={{ textAlign: "center", padding: ".25rem" }}
                          >
                            <NavLink
                              href={item.path}
                              style={{ padding: "1rem 0" }}
                            >
                              {item.icon}
                              <p className="my-1">{item.title}</p>
                            </NavLink>
                          </Col>
                        ))}
                      </Row>

                    </div>
                  </Dropdown.Menu>
                </Dropdown>

                <NavLink href="/projects" className="d-lg-none">Projects</NavLink>
                <NavLink href="/resume" className="d-lg-none">Resume</NavLink>
                <NavLink href="/news" className="d-lg-none">News</NavLink>
                <NavLink href="/store" className="d-lg-none">Store</NavLink>

                <hr/>

                <NavLink href="https://www.linkedin.com/in/camisavines" className="d-lg-none"><FaIcons.FaLinkedin size={20} />LinkedIn</NavLink>
                <NavLink href="https://www.github.com/camisavines" className="d-lg-none">Github</NavLink>

                <hr/>

                <NavLink onClick={toggleTheme}>{theme === "light" ? <MdIcons.MdLightMode /> : <MdIcons.MdDarkMode />}<span className="d-lg-none px-2">Theme</span></NavLink>



              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <NavLink
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {/* Render custom icon here */}
    <CgIcons.CgMenuGridR size={20} />
    {/* &#x25bc; */}
    {children}
  </NavLink>
));
