import React from "react";
import LatestProduct from "layouts/Showcase/latestProduct";
import Grid from "utils/Grid";

interface Product {
  _id: string;
  name: string;
  description: string;
  image: string;
  category: string[];
}

type Props = {
  products: Product[];
};

function Products({ products }: Props) {
  return (
    <div>
      <div className="my-10 px-4">
        <h1 className="mb-5 text-2xl md:text-3xl font-bold font-inter">
          Latest <span className="text-indigo-500">Products.</span>
        </h1>
      </div>

      <Grid>
        {products &&
          products.map((product, i) => (
            <LatestProduct product={product} key={i} />
          ))}
      </Grid>
    </div>
  );
}

export default Products;
