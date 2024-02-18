/* eslint-disable import/no-extraneous-dependencies */
import { Action,configureStore, ThunkAction } from "@reduxjs/toolkit";

import brandSlice from "@/store/brandSlice";

export const store = configureStore({
  reducer: {
    brand: brandSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
