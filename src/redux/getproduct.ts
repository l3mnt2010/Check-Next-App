import { ListProduct, Product } from "@/interface/interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductSerVice from "@/service/service.products";

const productSerVice = new ProductSerVice();
const initialState: ListProduct = {
  product: [],
};
export const getProduct = createAsyncThunk(
  "get/get_product",
  async (_, _thunkAPI) => {
    const res = await productSerVice.getAllProduct();
    return res;
  }
);

export const productSlice = createSlice({
  name: "get",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});
