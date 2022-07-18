import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import productReducer from "./slices/products.slice";
import authReducer from "./slices/auth.slice";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["product"],
};

const reducer = combineReducers({
  // ...your reducers here
  auth: authReducer,
  product: productReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export default persistedReducer;
