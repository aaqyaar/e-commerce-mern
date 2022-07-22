import React from "react";
import {} from "react-bootstrap";
// import Footer from "./Footer/Footer";
import Header from "./Header/Header";

type Props = {
  children: React.ReactNode;
};

export default function Main({ children, ...other }: Props) {
  return (
    <React.Fragment>
      <Header />
      <main {...other}>{children}</main>
      {/* <Footer /> */}
    </React.Fragment>
  );
}
