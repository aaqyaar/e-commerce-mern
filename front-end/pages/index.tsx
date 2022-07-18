import React, { useEffect } from "react";
import { getProducts } from "redux/slices/products.slice";
import { useReduxDispatch } from "hooks/useReduxHooks";
import Main from "layouts/Main/Main";
import Hero from "layouts/Hero/Hero";

const Home: React.FC = () => {
  const dispatch = useReduxDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Main>
      <Hero />
    </Main>
  );
};

export default Home;
