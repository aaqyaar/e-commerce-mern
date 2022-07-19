interface ProductsType {
  _id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
  category: string;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export type { ProductsType };
