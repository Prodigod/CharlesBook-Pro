import { createSlice } from "@reduxjs/toolkit";

import { SLICE_NAME } from "./consts";

import filesItems from "../../config/items/files";

const initialState = {
  files: filesItems,
  selectedFile: null,
};

export const FilesSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    openFile: (state, action) => {
      state.files[action.payload].open = true;
      state.selectedFile = action.payload;
    },
    closeFile: (state, action) => {
      state.files[action.payload].open = false;
    },
    setFiles: (state, action) => {
      state.files = action.payload;
    },
    selectFile: (state, action) => {
      state.selectedFile = action.payload;
    },
  },
});
export const { openFile, closeFile, setFiles, selectFile } = FilesSlice.actions;

export default FilesSlice;
