import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// type Product = Array<object> | null;
interface ProductsType {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
  category: string;
  createdAt: string | Date;
  updatedAt: string | Date;
}
[];

type StateType = {
  products: ProductsType[];
  loading: boolean;
  error: unknown | null | string;
};

const initialState: StateType = {
  products: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "products",
  initialState,
  reducers: {
    isLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    getProductsSuccess: (state, action: PayloadAction<ProductsType[]>) => {
      state.products = action.payload;
      state.loading = false;
      state.error = null;
    },
    hasError: (state: any, action: PayloadAction<string>) => {
      state.products = [];
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default slice.reducer;

export const getProducts = () => {
  return async (dispatch: any) => {
    try {
      dispatch(slice.actions.isLoading());
      const response = await fetch("/api/products");
      const data = await response.json();
      dispatch(slice.actions.getProductsSuccess(data));
    } catch (error) {
      dispatch(slice.actions.hasError(error as string));
    }
  };
};
