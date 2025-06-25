import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("carts")) || [],
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = state.cart.findIndex((i) => i.id === action.payload.id);
      if (index < 0) {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("carts", JSON.stringify(state.cart));
    },
    InC: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      localStorage.setItem("carts", JSON.stringify(state.cart));
    },
    deC: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      localStorage.setItem("carts", JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((i) => i.id !== action.payload.id);
    },

  },
});

export const { addToCart, InC, deC, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
