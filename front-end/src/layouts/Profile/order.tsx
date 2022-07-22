import { TrashIcon } from "@heroicons/react/outline";
import { OrdersType } from "types/OrderTypes";
import Image from "next/image";
import React from "react";
import { Button } from "react-bootstrap";

type Props = {
  order: OrdersType;
};

const Order = ({ order }: Props) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <tr>
      <td>{order.orderNumber}</td>
      <td>{order.shippingAddress}</td>
      <td>{order.orderTotal}</td>
      <td>{order.orderStatus}</td>
      <td>{order.orderDate}</td>
      <td>
        <Button
          variant="outline-danger "
          size="sm"
          onClick={() => setChecked(!checked)}
        >
          <TrashIcon
            style={{
              width: "1.5rem",
              height: "1.5rem",
            }}
          />
        </Button>
      </td>
    </tr>
  );
};

export default Order;
