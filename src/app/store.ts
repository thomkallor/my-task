import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import formReducer from "./form/reducers";

export const store = configureStore({
  reducer: {
    formData: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
