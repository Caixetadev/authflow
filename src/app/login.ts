import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { IUser } from "../types";

import { login } from "./authService";

export const authLogin = createAsyncThunk(
  "login/fetchUser",
  async (user: IUser, thunkAPI) => {
    try {
      return await login(user);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.data.message);
    }
  }
);

const slice = createSlice({
  name: "login",
  initialState: {
    isSuccess: false,
    isLoading: false,
    isError: false,
    message: "",
    user: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(authLogin.fulfilled, (state, action) => {
      state.isSuccess = true;
      state.isLoading = false;
      state.isError = false;
      state.message = "";
      state.user = action.payload;
    });
    builder.addCase(authLogin.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(authLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.message = action.payload as string;
    });
  },
});

export default slice.reducer;
