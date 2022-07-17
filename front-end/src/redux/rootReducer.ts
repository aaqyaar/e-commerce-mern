import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import productsSlice from "./slices/products.slice";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["product"],
};

const reducer = combineReducers({
  // ...your reducers here
  product: productsSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export default persistedReducer;
