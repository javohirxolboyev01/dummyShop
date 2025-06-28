import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  tel: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.name = action.payload.name;
      state.tel = action.payload.tel;
    },
    clearUser: () => initialState, // 🧹 foydalanuvchini tozalash
  },
});

export const { setUserInfo, clearUser } = userSlice.actions;
export default userSlice.reducer;
