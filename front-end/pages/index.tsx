import React, { useEffect } from "react";
import { getProducts } from "redux/slices/products.slice";
import { useReduxDispatch } from "hooks/useReduxHooks";
import Main from "layouts/Main/Main";
import Home from "views/Home/Home";
import { _products } from "data/FakeProducts";

const HomePage: React.FC = ({ data }: any) => {
  const dispatch = useReduxDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Main>
      <Home latestProducts={data} />
    </Main>
  );
};
export async function getStaticProps() {
  const res = _products;
  return {
    props: {
      data: res,
    },
  };
}

export default HomePage;
