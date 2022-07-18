import Hero from "layouts/Hero/Hero";
import Showcase from "layouts/Showcase/Showcase";
import React from "react";

type Props = {
  latestProducts: Array<{}>;
};

const Home = ({ latestProducts }: Props) => {
  return (
    <React.Fragment>
      <Hero />
      <Showcase latestProducts={latestProducts} />
    </React.Fragment>
  );
};

export default Home;
