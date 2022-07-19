import React from "react";
import Grid from "utils/Grid";
import LatestProduct from "./latestProduct";

type Props = {
  latestProducts: [];
};

const Showcase = ({ latestProducts }: Props) => {
  return (
    <div className="max-w-screen my-10 mx-10">
      <div className="my-10 px-4">
        <h1 className="mb-5 text-2xl md:text-3xl font-bold font-inter">
          Latest <span className="text-indigo-500">Products.</span>
        </h1>
      </div>
      <Grid>
        {latestProducts &&
          latestProducts.map((product, i) => (
            <LatestProduct key={i} product={product} />
          ))}
      </Grid>
    </div>
  );
};

export default Showcase;
