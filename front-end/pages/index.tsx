import React, { useEffect } from "react";
import { getProducts } from "redux/slices/products.slice";
import { useReduxDispatch } from "hooks/useReduxHooks";

const Home: React.FC = () => {
  const dispatch = useReduxDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return <div>Welcome to redux</div>;
};

export default Home;
