import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

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

interface Product {
  _id: string;
  name: string;
  image: string;
  description: string;
  category: string[];
}

type Props = {
  product: Product;
};

const LatestProduct = ({ product }: Props) => {
  const { name, image, description, category, _id } = product;
  return (
    <motion.div animate={animate} initial={{ opacity: 0, y: 60 }}>
      <div className="card w-96  bg-base-100 shadow-xl">
        <figure>
          <Image src={image} alt={name} width={250} height={200} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{description}?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category.join(" ")}</div>
          </div>
          <div className="card-actions justify-end mt-2">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LatestProduct;
