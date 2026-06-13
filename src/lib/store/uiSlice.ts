"use client";

import { createSlice } from "@reduxjs/toolkit";

type UiState = {
  mobileMenuOpen: boolean;
};

const initialState: UiState = {
  mobileMenuOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMobileMenu(state) {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    closeMobileMenu(state) {
      state.mobileMenuOpen = false;
    },
  },
});

export const { toggleMobileMenu, closeMobileMenu } = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
