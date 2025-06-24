import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: JSON.parse(localStorage.getItem("wishlist")) || [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    wishlist: (state, action) => {
      const index = state.item.findIndex(
        (value) => value.id === action.payload.id
      );
      if (index < 0) {
        state.item.push(action.payload);
      } else {
        state.item = state.item.filter(
          (value) => value.id !== action.payload.id
        );
      }
      localStorage.setItem("wishlist", JSON.stringify(state.item));
    },
  },
});
export const { wishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
