import React from "react";
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import LatestProduct from "./latestProduct";

type Props = {
  latestProducts: [];
};

const category = ["All", "Electronics", "Clothing", "Books"];
const Showcase = ({ latestProducts }: Props) => {
  return (
    <div>
      <Container className="my-5 py-5">
        <Row>
          <Col className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">
              Latest <span className="text-indigo-500">Products.</span>
            </h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <div className="buttons d-flex justify-content-center mb-5 pb-5">
            {category.map((item, index) => (
              <Button variant="outline-secondary me-2" key={index}>
                {item}
              </Button>
            ))}
          </div>
          {latestProducts &&
            latestProducts.map((product, i) => (
              <Col className="col-md-3 mb-4">
                <LatestProduct key={i} product={product} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default Showcase;
