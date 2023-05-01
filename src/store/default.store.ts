import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productsAPI } from "api/products";

const rootReducer = combineReducers({
  [productsAPI.reducerPath]: productsAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([productsAPI.middleware]),
});
