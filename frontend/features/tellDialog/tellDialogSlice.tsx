import { createSlice } from "@reduxjs/toolkit";
import { DialogState } from "../reserveDialog/reserveDialogSilice";

const tellDialogSlice = createSlice({
  name: "tellDialog",
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

export const { openDialog, closeDialog } = tellDialogSlice.actions;
export default tellDialogSlice.reducer;
