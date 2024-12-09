import { createSlice } from "@reduxjs/toolkit";

import { SLICE_NAME } from "./consts";
import ScreenTypes from "../../types/screens";

const initialState = {
  passwordEntered: "",
  currentPage: ScreenTypes.login,
  deployId: null,
  itemOnFocus: null,
};

export const MiscSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    setPassword: (state, action) => {
      state.passwordEntered = action.payload;
    },
    setScreen: (state, action) => {
      state.currentPage = action.payload;
    },
    setDeployId: (state, action) => {
      state.deployId = action.payload;
    },
    setItemOnFocus: (state, action) => {
      state.itemOnFocus = action.payload;
    },
  },
});

export const { setPassword, setScreen, setDeployId, setItemOnFocus } =
  MiscSlice.actions;

export default MiscSlice;
