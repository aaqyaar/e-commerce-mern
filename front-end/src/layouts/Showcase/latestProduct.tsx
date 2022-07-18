import Image from "next/image";
import React from "react";

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
    <div className="card w-96 bg-base-100 shadow-xl">
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
  );
};

export default LatestProduct;
