import Orders from "layouts/Profile/orders";
import UserProfile from "layouts/Profile/userprofile";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { OrdersType } from "types/OrderTypes";

type Props = {
  orders: OrdersType[];
};

function Profile({ orders }: Props) {
  return (
    <Container className="my-5 py-5">
      <Row className="justify-content-center align-items-center">
        <Col className="col-md-4 mb-4">
          <UserProfile />
        </Col>
        <Col className="col-md-8 mb-4">
          <Orders orders={orders} />
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
