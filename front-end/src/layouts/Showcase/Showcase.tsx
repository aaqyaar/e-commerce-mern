import React from "react";
import LatestProduct from "./latestProduct";

type Props = {
  latestProducts: Array<{}>;
};

const Showcase = ({ latestProducts }: Props) => {
  return (
    <div className="max-w-screen my-10 mx-10">
      <div className="my-10 px-4">
        <h1 className="mb-5 text-2xl md:text-3xl font-bold font-inter">
          Latest <span className="text-indigo-500">Products.</span>
        </h1>
      </div>
      <div className="max-w-96 mx-8 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-16 gap-8">
        {latestProducts &&
          latestProducts.map((product, i) => (
            <LatestProduct key={i} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Showcase;
