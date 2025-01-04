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
      // Check if the file exists in the files array
      const file = state.files[action.payload];

      // If file is defined, set it to open
      if (file) {
        file.open = true;
        state.selectedFile = action.payload;
      } else {
        // If the file is undefined, just log a warning (optional) and continue
        console.warn(`File with id ${action.payload} not found.`);
        
        // Optionally, you can mark it as opened or continue with the current state
        state.selectedFile = action.payload;
      }
    },
    closeFile: (state, action) => {
      const file = state.files[action.payload];
      if (file) {
        file.open = false;
      }
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
