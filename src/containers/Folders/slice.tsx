import { createSlice } from "@reduxjs/toolkit";

import { SLICE_NAME } from "./consts";

import foldersItems from "../../config/items/folders";

// import { ItemTypes } from "../../types/items";

// import generateObjFromArr from "../../utils/helpers/generateObjFromArr";

const initialState = {
  folders: foldersItems,
  selectedFolder: null,
  folderWithDraggingChildren: null,
};

export const FoldersSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    selectFolder: (state, action) => {
      state.selectedFolder = action.payload;
    },
    openFolder: (state, action) => {
      state.folders[action.payload].open = true;
      state.selectedFolder = action.payload;
    },
    closeFolder: (state, action) => {
      state.folders[action.payload].open = false;
    },
    setFolderWithDraggingChildren: (state, action) => {
      state.folderWithDraggingChildren = action.payload;
    },
  },
});
export const {
  selectFolder,
  openFolder,
  closeFolder,
  setFolderWithDraggingChildren,
} = FoldersSlice.actions;

export default FoldersSlice;
