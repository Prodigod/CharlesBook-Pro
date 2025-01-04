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
    openFolder: (state, action) => {
      const folder = state.folders[action.payload];
      if(folder) {
        folder.open = true;
        state.selectedFolder = action.payload;
      }else{
        console.warn(`Folder with id ${action.payload} not found.`);

        state.selectedFolder = action.payload;
      
      }
    },
    closeFolder: (state, action) => {
      state.folders[action.payload].open = false;
    },
    setFolderWithDraggingChildren: (state, action) => {
      state.folderWithDraggingChildren = action.payload;
    },
    selectFolder: (state, action) => {
      state.selectedFolder = action.payload;
    }

  },
});

export const {
  selectFolder,
  openFolder,
  closeFolder,
  setFolderWithDraggingChildren,
} = FoldersSlice.actions;

export default FoldersSlice;
