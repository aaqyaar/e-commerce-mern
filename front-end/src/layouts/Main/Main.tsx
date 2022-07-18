import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

type Props = {
  children: React.ReactNode;
};

export default function Main({ children, ...other }: Props) {
  return (
    <div className="w-screen h-screen font-publicSans overflow-x-hidden">
      <Header />
      <main {...other}>{children}</main>
      <Footer />
    </div>
  );
}
