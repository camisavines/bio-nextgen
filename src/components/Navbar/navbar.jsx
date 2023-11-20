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
import * as CgIcons from "react-icons/cg"
import { SidebarData } from "./navdata";

export const MyNavbar = () => {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <Navbar expand="false">
        <Container fluid>
          <Navbar.Brand href="/">Camisa Vines</Navbar.Brand>
          <Navbar.Toggle style={{ border: "none", boxShadow: "none" }}><CgIcons.CgMenuGridR size={30}/></Navbar.Toggle>

          <Navbar.Offcanvas
            id={`offcanvas-Navbar-expand-lg`}
            aria-labelledby={`offcanvas-NavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvas-NavbarLabel-expand-lg`}>
                Camisa Vines
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {/* 
                <NavLink href="/projects" className="">Projects</NavLink>
                <NavLink href="/resume"  className="d-lg-none">Resume</NavLink>
                <NavLink href="/resume"  className="d-lg-none">News</NavLink>
                <NavLink href="/resume"  className="d-lg-none">Store</NavLink> */}
              </Nav>

              <div className="d-sm-block px-1">
                <Row>
                  {SidebarData.map((item) => (
                    <Col
                      xs={6}
                      style={{ textAlign: "center", padding: ".25rem" }}
                    >
                      <NavLink href={item.path} style={{ padding: "1rem 0" }}>
                        {item.icon}
                        <p className="my-1">{item.title}</p>
                      </NavLink>
                    </Col>
                  ))}
                </Row>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};
