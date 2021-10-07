import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/counter/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
