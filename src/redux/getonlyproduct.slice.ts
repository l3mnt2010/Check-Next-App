import { ListProduct, OnlyProduct, Product } from "@/interface/interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductSerVice from "@/service/service.products";

const productSerVice = new ProductSerVice();
const initialState: OnlyProduct = {
  id: 0,
  category: "",
  description: "",
  image: "",
  price: 0,
  title: "",
};
export const getOnlyProduct = createAsyncThunk(
  "get/get_only_product",
  async (id: number, _thunkAPI) => {
    const res = await productSerVice.getsingleProduct(id);
    return res;
  }
);

export const only_productSlice = createSlice({
  name: "get",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getOnlyProduct.fulfilled, (state, action) => {
      state.category = action.payload.category;
      state.id = action.payload.id;
      state.description = action.payload.description;
      state.image = action.payload.image;
      state.price = action.payload.price;
      state.title = action.payload.title;
    });
  },
});
