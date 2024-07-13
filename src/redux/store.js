import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import cartReducer from "./slices/cartSlice";
import contactReducer from "./slices/contactSlice"; // Importa el reducer de contacto

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    contact: contactReducer, // Añade el reducer de contacto
  },
});
