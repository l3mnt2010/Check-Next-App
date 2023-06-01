import { Cart, Only_Pro_Duct } from "@/interface/interface";
import { createAction } from "@reduxjs/toolkit";

export const getCart = createAction<Only_Pro_Duct>("getCart");
