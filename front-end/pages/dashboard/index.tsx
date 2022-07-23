import DashboardApp from "components/Drawer/DashboardApp";
import Main from "layouts/Main/Main";
import React from "react";

type Props = {};

const DashboardPage = (props: Props) => {
  return (
    <Main>
      <DashboardApp />
    </Main>
  );
};

export default DashboardPage;
