import React from "react";
import { Row, Col } from "react-bootstrap";

export const Step = ({
  title,
  date,
  content,
  link,
  linkText,
  subTexts,
  image,
}) => {
  return (
    <>
      <div style={{ padding: "1rem", marginTop: "-1rem" }}>
        <div style={{ display: "flex" }}>
          <div className="tl-dot" />
          <p>{date}</p>
        </div>

        <div className="tl-border">
          <div style={{ padding: "0 2rem 10vh" }}>
            <Row>
              <Col md={6} style={{paddingBottom: "2rem"}}>
                <h1 className="tl-title">{title}</h1>
                <p>{content}</p>
                <p>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {linkText}
                  </a>
                </p>
                <div className="tl-date text-muted mt-1">
                  {subTexts.map((t) => {
                    return (
                      <>
                        {t}
                        <br />
                      </>
                    );
                  })}
                </div>
              </Col>

              <Col md={6}>
                <img src={image} width="100%" />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};
