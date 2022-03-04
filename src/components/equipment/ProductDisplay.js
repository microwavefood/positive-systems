import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import * as productDisplayStyle from "./ProductDisplay.module.scss";

const ProductDisplay = (props) => {
  return (
    <Container className={productDisplayStyle.productDisplay}>
      <Row>
        <Col></Col>
        <Col>
          <Row>
            <h2 className={productDisplayStyle.title}>{props.title}</h2>
            <p className={productDisplayStyle.text}>{props.text}</p>
          </Row>
        </Col>
      </Row>
      <Row className={productDisplayStyle.buttonContainer}>
        <Button className={productDisplayStyle.button}>Learn more</Button>
      </Row>
    </Container>
  );
};

export default ProductDisplay;
