import { TrashIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
import { Row, Table } from "react-bootstrap";
import { OrdersType } from "types/OrderTypes";
import Order from "./order";

type Props = {
  orders: OrdersType[];
};

const Orders = ({ orders }: Props) => {
  return (
    <>
      {orders.length > 0 && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Order</th>
              <th>Shipping Address</th>
              <th>Total</th>
              <th>Status</th> <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="p-2">
            {orders.map((order) => (
              <Order key={order.orderNumber} order={order} />
            ))}
          </tbody>
        </Table>
      )}

      {orders.length === 0 && (
        <Row className="py-5">
          <h2 className="text-center">No orders yet</h2>
          <p className="text-center">You haven't made any orders yet.</p>
        </Row>
      )}
    </>
  );
};

export default Orders;
