import { createSelector } from "@reduxjs/toolkit";

import { SLICE_NAME } from "./consts";

export const appsSelector = (state) => state[SLICE_NAME];

export const allAppsSelector = createSelector(appsSelector, (appsState) => {
  return appsState?.apps;
});
