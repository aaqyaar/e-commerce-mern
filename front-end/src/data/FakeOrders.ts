import type { OrdersType } from "types/OrderTypes";

const _orders: OrdersType[] = [
  {
    _id: "1",
    userName: "John Doe",
    shippingAddress: "New York, NY 10012",
    userPhone: "618977249",
    orderStatus: "Pending",
    orderDate: "2019-07-01",
    orderTotal: "$999",
    orderNumber: "4500W",
  },
  {
    _id: "2",
    userName: "John Doe",
    userPhone: "618977249",
    shippingAddress: "New York, NY 10012",
    orderStatus: "Pending",
    orderDate: "2019-07-01",
    orderTotal: "$999",
    orderNumber: "4500W",
  },
  {
    _id: "3",
    userName: "John Doe",
    userPhone: "618977249",
    shippingAddress: "New York, NY 10012",
    orderStatus: "Pending",
    orderDate: "2019-07-01",
    orderTotal: "$999",
    orderNumber: "4500W",
  },
  {
    _id: "4",
    userName: "John Doe",
    userPhone: "618977249",
    shippingAddress: "New York, NY 10012",
    orderStatus: "Pending",
    orderDate: "2019-07-01",
    orderTotal: "$999",
    orderNumber: "4500W",
  },
];

export { _orders };
export type { OrdersType };
