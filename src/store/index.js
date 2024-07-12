import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./reducers/contactReducer";
import productReducer from "./reducers/productReducer";

const store = configureStore({
  reducer: {
    contact: contactReducer,
    product: productReducer,
  },
});

export default store;
