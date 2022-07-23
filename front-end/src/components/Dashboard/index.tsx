import useAuth from "hooks/useAuth";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import EcommerceOrders from "./E-commerceOrders";
import EcommerceProfit from "./E-commerceProfit";
import EcommerceSale from "./E-commerceSale";

type Props = {};

export default function Dashboard({}: Props) {
  const { user } = useAuth();
  return (
    <Container className="my-5 py-5">
      <Row className="justify-content-center">
        <div className="d-flex justify-content-center">
          <h1 className="display-6 fw-bolder">
            Welcome {user?.name} to{" "}
            <span className="text-primary"> E-commerce Statistics.</span>
          </h1>
        </div>
        <Col className="col-md-3 mb-4 mt-3">
          <EcommerceProfit />
        </Col>
        <Col className="col-md-3 mb-4 mt-3">
          <EcommerceOrders />
        </Col>
        <Col className="col-md-3 mb-4 mt-3">
          <EcommerceSale />
        </Col>
      </Row>
    </Container>
  );
}
