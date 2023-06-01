import { Users } from "@/interface/interface";
import { API } from "@/service/service.user";
import {
  createAsyncThunk,
  createSlice,
  combineReducers,
} from "@reduxjs/toolkit";

const initialState: Users = {
  data: [],
};
export const getUsers = createAsyncThunk(
  "get/getUser",
  async (id: number, _thunkAPI) => {
    const response = await API.get<Users>(`/users?page=${id}`);
    return response.data.data;
  }
);

export const deleteUsers = createAsyncThunk(
  "deleteUser",
  async (postId: number, thunkAPI) => {
    const response = await API.delete<Users>(`/users?page=1/${postId}`, {
      signal: thunkAPI.signal,
    });
    return response.data;
  }
);
export const dataSlice = createSlice({
  name: "get",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(deleteUsers.fulfilled, (state, action) => {
      const postId = action.meta.arg;
      state.data = state.data.filter((post) => post.id !== postId);
    });
  },
});
