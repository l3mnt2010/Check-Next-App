import { Pages } from "@/interface/interface";
import { API } from "@/service/service.user";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: Pages = {
  length: 0,
  page: 0,
  per_page: 0,
  total: 0,
  total_pages: 0,
};

export const getPerPage = createAsyncThunk(
  "get_PerPage",
  async (_, thunkAPI) => {
    const response = await API.get<Pages>(`/users?page=1`);
    return response.data;
  }
);

export const per_Page_Slice = createSlice({
  name: "getPerPages",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getPerPage.fulfilled, (state, action) => {
      state.length = action.payload.length;
      state.page = action.payload.page;
      state.per_page = action.payload.per_page;
      state.total = action.payload.total;
      state.total_pages = action.payload.total_pages;
    });
  },
});
