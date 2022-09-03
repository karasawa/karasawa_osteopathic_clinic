import { configureStore } from "@reduxjs/toolkit";
import reserveDialogReducer from "./features/reserveDialog/reserveDialogSilice";
import tellDialogReducer from "./features/tellDialog/tellDialogSlice";
import burgerMenuReducer from "./features/burgerMenu/burgerMenuSlice";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    reserveDialog: reserveDialogReducer,
    tellDialog: tellDialogReducer,
    burgerMenu: burgerMenuReducer,
  },
});
