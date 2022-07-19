import { TrashIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
import { OrdersType } from "types/OrderTypes";
import Order from "./order";

type Props = {
  orders: OrdersType[];
};

const Orders = ({ orders }: Props) => {
  return (
    <div className="card px-4 overflow-x-auto w-full mr-0 lg:mr-48 mt-4">
      <div>
        <h1 className="mb-5 text-2xl md:text-3xl font-bold font-inter">
          Orders
        </h1>
      </div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Shipping Add</th>
            <th>Order Status</th>
            <th>Order Total</th>
            <th>Order Date</th>
            <th></th>
          </tr>
        </thead>
        {orders && orders.length > 0 ? (
          orders.map((order, i) => <Order order={order} key={i} />)
        ) : (
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-center">No orders yet</h2>
            <p className="text-center">You haven't made any orders yet.</p>
          </div>
        )}
      </table>
    </div>
  );
};

export default Orders;
