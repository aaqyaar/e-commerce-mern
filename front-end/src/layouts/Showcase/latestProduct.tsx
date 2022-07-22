import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { ProductsType } from "types/ProductsType";
import { Button, Card } from "react-bootstrap";
import { fCurrency } from "utils/formatNumber";

///

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

type Props = {
  product: ProductsType;
};

const LatestProduct = ({ product }: Props) => {
  const { name, image, category, price, _id } = product;
  return (
    <motion.div animate={animate} initial={{ opacity: 0, y: 60 }}>
      <Card className="h-100 text-center">
        <Card.Img variant="top" />
        <Image height={"250px"} width={"250px"} src={image} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{category}</Card.Text>
          <Card.Text className="lead  fw-bold">{fCurrency(price)}</Card.Text>
          <Button variant="outline-secondary">Buy Now</Button>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default LatestProduct;
