import { configureStore } from "@reduxjs/toolkit";

import login from "./modules/auth/auth.store";

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: login,
});
