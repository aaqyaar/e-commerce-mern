import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Button, Card, Container } from "react-bootstrap";
import useAuth from "hooks/useAuth";

type Props = {};

let easing = [0.6, -0.05, 0.01, 0.99];
const animate = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: easing,
    delay: 0.16,
  },
};

function UserProfile({}: Props) {
  const { user } = useAuth();

  return (
    <motion.div animate={animate} initial={{ opacity: 0, y: 60 }}>
      <Container>
        <Card style={{ width: "22rem" }} className="h-100 text-center">
          <Card.Img variant="top" />
          <Image
            height={"250px"}
            width={"350px"}
            // className="rounded-circle"
            src={
              "https://turkishactors.net/wp-content/uploads/2021/01/burak-ozcivit-4-1024x684.jpg"
            }
            alt={user?.name}
          />
          <Card.Body>
            <Card.Title>{user?.name}</Card.Title>
            <Card.Text>{user?.email}</Card.Text>
            <Card.Text className="lead  fw-bold">{user?.createdAt}</Card.Text>
            <Button variant="outline-secondary">Buy Now</Button>
          </Card.Body>
        </Card>
      </Container>
    </motion.div>
  );
}

export default UserProfile;
