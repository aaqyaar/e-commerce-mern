import Dashboard from "components/Dashboard";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

type Props = {};

function DashboardApp({}: Props) {
  return (
    <Container>
      {/* <Row className="flex-xl-nowrap"> */}
      {/* <Col xs={12} sm={4} md={3} lg={2} /> */}
      {/* <Col xs={12} sm={8} md={9} lg={10}> */}
      <Dashboard />
      {/* </Col> */}
      {/* </Row> */}
    </Container>
  );
}

export default DashboardApp;
