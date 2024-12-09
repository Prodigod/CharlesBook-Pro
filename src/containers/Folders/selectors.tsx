import { createSelector } from "@reduxjs/toolkit";

import { SLICE_NAME } from "./consts";

export const foldersSelector = (state) => state[SLICE_NAME];

export const allFoldersSelector = createSelector(
  foldersSelector,
  (foldersState) => {
    return foldersState?.folders;
  }
);

export const selectedFolderSelector = createSelector(
  allFoldersSelector,
  (allFoldersState) => {
    return allFoldersState?.selectedFolder;
  }
);

export const folderWithDraggingChildrenSelector = createSelector(
  foldersSelector,
  (foldersState) => {
    return foldersState?.folderWithDraggingChildren;
  }
);
