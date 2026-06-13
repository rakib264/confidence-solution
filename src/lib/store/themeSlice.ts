"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThemeState } from "@/lib/types";

const initialState: ThemeState = {
  primary: "oklch(0.28 0.12 265)",
  accent: "oklch(0.52 0.11 215)",
  radius: 0.625,
  fontPreference: "sans",
  backgroundLightness: 0.98,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setPrimary(state, action: PayloadAction<string>) {
      state.primary = action.payload;
    },
    setAccent(state, action: PayloadAction<string>) {
      state.accent = action.payload;
    },
    setRadius(state, action: PayloadAction<number>) {
      state.radius = action.payload;
    },
    setFontPreference(state, action: PayloadAction<"sans" | "serif">) {
      state.fontPreference = action.payload;
    },
    setBackgroundLightness(state, action: PayloadAction<number>) {
      state.backgroundLightness = action.payload;
    },
    resetTheme() {
      return initialState;
    },
    hydrateTheme(_, action: PayloadAction<ThemeState>) {
      return action.payload;
    },
  },
});

export const {
  setPrimary,
  setAccent,
  setRadius,
  setFontPreference,
  setBackgroundLightness,
  resetTheme,
  hydrateTheme,
} = themeSlice.actions;

export const themeReducer = themeSlice.reducer;
