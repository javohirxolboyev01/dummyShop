import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: {
    lat: 41.3111,
    lng: 69.2797,
    label: "",
  },
};

const selectedLocationSlice = createSlice({
  name: "selectedLocation",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { setLocation } = selectedLocationSlice.actions;
export default selectedLocationSlice.reducer;
