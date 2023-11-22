import React from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { Timeline } from "../components";

export const Home = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          height: "calc(100vh - 100px)",
          padding: "20vh 0 40vh"
        }}
      >
        <div style={{ width: "100%" }}>
          <div style={{ maxWidth: "800px", margin: "auto" }} className="px-5">
            <h1 style={{ fontSize: "5em" }}>Camisa</h1>

            <Form style={{ width: "100%" }} className="py-1">
              <InputGroup
                className="mb-3"
                style={{
                  border: "1px solid gray",
                  borderRadius: "25px",
                  width: "100%",
                }}
              >
                <InputGroup.Text
                  style={{ background: "transparent", border: "none" }}
                >
                  <FaSearch />
                </InputGroup.Text>
                <Form.Control
                  autoFocus
                  style={{
                    background: "transparent",
                    border: "none",
                    paddingLeft: "0",
                  }}
                  placeholder="projects"
                />
              </InputGroup>
            </Form>

            <div>
              <Button variant="secondary" className="mx-3">
                Google Search
              </Button>
              <Button variant="secondary">Download Resume</Button>
            </div>
          </div>
        </div>
      </div>

      

      {/* <Timeline /> */}
    </>
  );
};
