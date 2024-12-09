import { createSelector } from "@reduxjs/toolkit";

import { SLICE_NAME } from "./consts";

export const miscSelector = (state) => state[SLICE_NAME];

export const passwordEnteredSelector = createSelector(
  miscSelector,
  (miscState) => {
    return miscState?.passwordEntered;
  }
);

export const currentPageSelector = createSelector(miscSelector, (miscState) => {
  return miscState?.currentPage;
});

export const deployIdSelector = createSelector(miscSelector, (miscState) => {
  return miscState?.deployId;
});

export const itemOnFocusSelector = createSelector(miscSelector, (miscState) => {
  return miscState?.itemOnFocus;
});
