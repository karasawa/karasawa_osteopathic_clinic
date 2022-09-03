import { createSlice } from "@reduxjs/toolkit";

export type BurgerMenuState = {
  isOpen: boolean;
};

export const burgerMenuSlice = createSlice({
  name: "burgerMenu",
  initialState: {
    isOpen: false,
  } as BurgerMenuState,
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeMenu: (state) => {
      state.isOpen = false;
    },
  },
});

export const { toggleMenu, closeMenu } = burgerMenuSlice.actions;
export default burgerMenuSlice.reducer;
