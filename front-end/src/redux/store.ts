import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import persistedReducer from "./rootReducer";

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }),
});
const persistor = persistStore(store);

export { store, persistor };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
