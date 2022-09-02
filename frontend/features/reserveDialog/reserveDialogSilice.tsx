import { createSlice } from "@reduxjs/toolkit";

export type DialogState = {
  isOpen: boolean;
};

const reserveDialogSlice = createSlice({
  name: "reserveDialog",
  initialState: {
    isOpen: false,
  } as DialogState,
  reducers: {
    openDialog: (state) => {
      state.isOpen = true;
    },
    closeDialog: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openDialog, closeDialog } = reserveDialogSlice.actions;
export default reserveDialogSlice.reducer;
