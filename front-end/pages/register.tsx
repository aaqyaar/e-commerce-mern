import React from "react";
import Main from "layouts/Main/Main";
import Register from "components/Auth/Register";

type Props = {};

export default function login({}: Props) {
  return (
    <Main>
      <Register />
    </Main>
  );
}
