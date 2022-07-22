import React from "react";
import LatestProduct from "layouts/Showcase/latestProduct";
import Grid from "utils/Grid";
import type { ProductsType } from "types/ProductsType";
import { Button, Col, Container, Row } from "react-bootstrap";

type Props = {
  products: ProductsType[];
};

const category = ["All", "Electronics", "Clothing", "Books"];

function Products({ products }: Props) {
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
          {products &&
            products.map((product, i) => (
              <Col className="col-md-3 mb-4">
                <LatestProduct key={i} product={product} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
}

export default Products;
