import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./contact.slice";
import rootReducer from "./contact.slice";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector = () => useSelector();
