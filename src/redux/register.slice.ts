import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  AuthRegister,
  LoginCredentials,
  Register,
} from "@/interface/interface";
import { API } from "@/service/service.user";
import AuthService from "@/service/service.user";

const authservice = new AuthService();
const initialState: AuthRegister = {
  id: null,
  token: {
    token: {
      token: null,
    },
  },
  isAuthenRegister: false,
};
export const registerUser = createAsyncThunk<void, LoginCredentials>(
  "auth/loginUser",
  async (credentials, thunkAPI) => {
    try {
      const res = await authservice.register(credentials);
      thunkAPI.dispatch(registerSlice.actions.registerSuccess(res));
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const registerSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerSuccess: (state, action) => {
      state.isAuthenRegister = true;
      state.id = action.payload.id;
      state.token = action.payload.token;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      state.isAuthenRegister = true;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isAuthenRegister = false;
    });
    builder.addCase(registerUser.fulfilled, (state) => {
      state.isAuthenRegister = false;
    });
  },
});
