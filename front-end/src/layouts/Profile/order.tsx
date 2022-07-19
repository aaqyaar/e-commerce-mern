import { TrashIcon } from "@heroicons/react/outline";
import { OrdersType } from "types/OrderTypes";
import Image from "next/image";
import React from "react";

type Props = {
  order: OrdersType;
};

const Order = ({ order }: Props) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <tbody>
      <tr>
        <th>
          <label>
            <input
              type="checkbox"
              className="checkbox"
              onClick={() => setChecked(!checked)}
            />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <Image
                  width={"160px"}
                  height={"160px"}
                  src={order.userAvatar}
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{order.userName}</div>
              <div className="text-sm opacity-50">{order.userPhone}</div>
            </div>
          </div>
        </td>
        <td>{order.shippingAddress}</td>
        <td>
          <span className="badge badge-ghost badge-lg">
            {order.orderStatus}
          </span>
        </td>
        <td>{order.orderTotal}</td>
        <td>{order.orderDate}</td>

        <th>{checked && <TrashIcon className="w-6 h-6 text-error" />}</th>
      </tr>
    </tbody>
  );
};

export default Order;
