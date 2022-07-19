import Orders from "layouts/Profile/orders";
import UserProfile from "layouts/Profile/userprofile";
import React from "react";
import { OrdersType } from "types/OrderTypes";

type Props = {
  orders: OrdersType[];
};

function Profile({ orders }: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center">
      {/* flex flex-col justify-center items-center */}
      <UserProfile />
      <Orders orders={orders} />
    </div>
  );
}

export default Profile;
