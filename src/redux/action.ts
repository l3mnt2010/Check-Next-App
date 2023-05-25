import { Login } from "@/interface/interface";
import { createAction } from "@reduxjs/toolkit";

export const getPostUserLogin = createAction<Login>("getReview");
