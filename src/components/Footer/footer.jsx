import React from "react";
import { Container } from "react-bootstrap";

export const Footer = () => {
  return (
    <div
      style={{
        height: 44,
        // background: "#203"
      }}
    >
      <Container fluid>
        <div
          style={{
            height: 44,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "0 1rem"
          }}
        >
          <p style={{ margin: 0, padding: 0 }}>Footer</p>
        </div>
      </Container>
    </div>
  );
};
