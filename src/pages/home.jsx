import React from "react";
import { Form, Button } from "react-bootstrap";

export const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "50vh"
      }}
    >
      <div>
        <h1>Camisa</h1>
        <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
        <div>
          <button>Google Search</button>
          <button>Download Resume</button>
        </div>
      </div>
    </div>
  );
};
