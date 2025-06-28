import { configureStore } from "@reduxjs/toolkit";
import wishlistReduser from "./features/wishlistSlice";
import addToCart from "./features/cartSlice";
import selectedLocationReducer from "./features/selectedLocationSlice";
import userReducer from "./features/userSlice";
export const store = configureStore({
  reducer: {
    wishlist: wishlistReduser,
    cart: addToCart,
    selectedLocation: selectedLocationReducer,
    user: userReducer,
  },
});
