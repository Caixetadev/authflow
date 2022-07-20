import { configureStore } from "@reduxjs/toolkit";

import login from "./login";

export const store = configureStore({
  reducer: login,
});
