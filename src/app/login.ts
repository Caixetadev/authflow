import { createSlice } from "@reduxjs/toolkit";

const login = createSlice({
  name: "login",
  initialState: {
    isSuccess: false,
    isLoading: false,
    isError: false,
    message: "",
    user: null,
  },
  reducers: {},
});

export const {} = login.actions;
export default login.reducer;
