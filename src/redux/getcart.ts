import { createReducer } from "@reduxjs/toolkit";
import { getCart } from "./action";
import { Cart } from "../interface/interface";

const initialState: Cart = {
  cart: [],
};

export const getCarts = createReducer(initialState, (builder) => {
  builder.addCase(getCart, (state, action) => {
    state.cart.push(action.payload);
  });
});
