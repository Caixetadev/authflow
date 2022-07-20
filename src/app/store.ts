import { configureStore } from "@reduxjs/toolkit";

import login from "./login";

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: login,
});
