import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showMenu: false,
};

const showMenuSlice = createSlice({
  name: "showMenu",
  initialState,
  reducers: {
    showMenu(state) {
      state.showMenu = true;
    },
    hideMenu(state) {
      state.showMenu = false;
    },
  },
});

export const { showMenu, hideMenu } = showMenuSlice.actions;

export default showMenuSlice.reducer;
