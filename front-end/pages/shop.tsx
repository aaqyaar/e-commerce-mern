import React from "react";
import { _products } from "data/FakeProducts";
import Products from "views/Products/Products";
import Main from "layouts/Main/Main";

type Props = {
  products: [];
};

function Shop({ products }: Props) {
  return (
    <Main>
      <Products products={products} />
    </Main>
  );
}

export async function getStaticProps() {
  return {
    props: {
      products: _products,
    },
  };
}

export default Shop;
