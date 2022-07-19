import Main from "layouts/Main/Main";
import React from "react";
import Profile from "views/Profile/Profile";
import { _orders } from "data/FakeOrders";
import type { OrdersType } from "types/OrderTypes";

type Props = {
  orders: OrdersType[];
};

const ProfilePage = ({ orders }: Props) => {
  return (
    <Main>
      <Profile orders={orders} />
    </Main>
  );
};

export async function getStaticProps() {
  const res = _orders;
  return {
    props: {
      orders: res,
    },
  };
}

export default ProfilePage;
