import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("carts")) || [],
  userInfo: null,
  location: null,
};

const cartSlice = createSlice({
  name: "cart",
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
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      localStorage.setItem("carts", JSON.stringify(state.cart));
    },

    deCFromProduct: (state, action) => {
      state.cart = state.cart
        .map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
      localStorage.setItem("carts", JSON.stringify(state.cart));
    },

    deCFromCart: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      localStorage.setItem("carts", JSON.stringify(state.cart));
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((i) => i.id !== action.payload.id);
      localStorage.setItem("carts", JSON.stringify(state.cart));
    },
    clearCart: (state) => {
      state.cart = [];
      localStorage.setItem("carts", JSON.stringify(state.cart));
    },
    setCart: (state, action) => {
      state.cart = action.payload;
    },

    setLocation: (state, action) => {
      state.location = action.payload;
    },
    clearLocation: (state) => {
      state.location = null;
    },
  },
});

export const {
  addToCart,
  InC,
  deCFromProduct,
  deCFromCart,
  removeFromCart,
  clearCart,
  clearLocation,
  setLocation,
  setCart,
} = cartSlice.actions;

export default cartSlice.reducer;
