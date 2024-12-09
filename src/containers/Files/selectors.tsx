import { createSelector } from "@reduxjs/toolkit";

import { SLICE_NAME } from "./consts";

export const filesSelector = (state) => state[SLICE_NAME];

export const allFilesSelector = createSelector(filesSelector, (filesState) => {
  return filesState?.files;
});

export const selectedFileSelector = createSelector(
  filesSelector,
  (filesState) => {
    return filesState?.selectedFile;
  }
);

export const openFilesSelector = createSelector(
  allFilesSelector,
  (allFiles) => {
    return allFiles?.filter((file) => file.open);
  }
);
