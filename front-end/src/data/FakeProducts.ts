type ProductsType = {
  _id: string;
  name: string;
  description: string;
  image: string;
  category: string[];
};

const _products: ProductsType[] = [
  {
    _id: "1",
    image: "/images/macbook.png",
    name: "Macbook Pro",
    description: "Macbook Pro M2 Chip 3.4GHZ Apple Silicon, 2022",
    category: ["Electronics"],
  },
  {
    _id: "2",
    image: "/images/image-1.jpg",
    name: "Macbook Pro",
    description: "Macbook Pro M2 Chip 3.4GHZ Apple Silicon, 2022",
    category: ["Electronics"],
  },
  {
    _id: "3",
    image: "/images/image-2.jpg",
    name: "Macbook Pro",
    description: "Macbook Pro M2 Chip 3.4GHZ Apple Silicon, 2022",
    category: ["Electronics"],
  },
  {
    _id: "4",
    image: "/images/image-3.jpg",
    name: "Macbook Pro",
    description: "Macbook Pro M2 Chip 3.4GHZ Apple Silicon, 2022",
    category: ["Electronics"],
  },
];

export { _products };
