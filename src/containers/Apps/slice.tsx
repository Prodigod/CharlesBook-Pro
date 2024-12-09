import { createSlice } from "@reduxjs/toolkit";

import { SLICE_NAME } from "./consts";

import appsItems from "../../config/items/apps";

const initialState = {
  apps: appsItems,
  selectedApp: null,
};

export const AppsSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    selectApp: (state, action) => {
      state.selectedApp = action.payload;
    },
    openApp: (state, action) => {
      state.apps[action.payload].open = true;
      state.selectedApp = action.payload;
    },
    closeApp: (state, action) => {
      state.apps[action.payload].open = false;
    },
  },
});
export const { selectApp, openApp, closeApp } = AppsSlice.actions;

export default AppsSlice;
