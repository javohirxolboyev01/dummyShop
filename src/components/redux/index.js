import { configureStore } from "@reduxjs/toolkit";
import wishlistReduser from "./features/wishlistSlice";
import addToCart from "./features/cartSlice";

export const store = configureStore({
  reducer: {
    wishlist: wishlistReduser,
    cart: addToCart,
  },
});
