"use client";

import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "@/lib/store/themeSlice";
import { uiReducer } from "@/lib/store/uiSlice";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";

export const makeStore = () =>
  configureStore({
    reducer: {
      theme: themeReducer,
      ui: uiReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
