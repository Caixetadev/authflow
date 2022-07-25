import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { IUser } from "../../../types";

import { getUser, login, register } from "./authService";

export const authLogin = createAsyncThunk(
  "login/fetchUser",
  async (user: IUser, thunkAPI) => {
    try {
      return await login(user);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

export const authRegister = createAsyncThunk(
  "register/fetchUser",
  async (user: IUser, thunkAPI) => {
    try {
      return await register(user);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const authToken = createAsyncThunk(
  "token/fetchUser",
  async (_, thunkAPI) => {
    try {
      return await getUser();
    } catch (error) {
      thunkAPI.rejectWithValue("");
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
    accountCreatedSuccessfully: false,
  },
  reducers: {
    reset(state) {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
      state.accountCreatedSuccessfully = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(authLogin.fulfilled, (state, action) => {
      state.isSuccess = true;
      state.isLoading = false;
      state.isError = false;
      state.message = "";
      state.user = action.payload;
    });
    builder.addCase(authLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(authLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload as string;
    });

    builder.addCase(authRegister.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.message = "";
      state.user = action.payload;
      state.accountCreatedSuccessfully = true;
    });
    builder.addCase(authRegister.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(authRegister.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload as string;
      state.accountCreatedSuccessfully = false;
    });
    builder.addCase(authToken.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload as string;
    });
    builder.addCase(authToken.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(authToken.fulfilled, (state, action) => {
      state.isSuccess = true;
      state.isLoading = false;
      state.isError = false;
      state.message = "";
      state.user = action.payload;
    });
  },
});

export const { reset } = slice.actions;
export default slice.reducer;
