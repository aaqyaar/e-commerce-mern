import Login from "components/Auth/Login";
import Main from "layouts/Main/Main";
import React from "react";

type Props = {};

export default function LoginPage({}: Props) {
  return (
    <Main>
      <Login />
    </Main>
  );
}
