import { configureStore } from "@reduxjs/toolkit";

import { listenerMiddleware } from "./listeners";

import FilesContainer from "../../containers/Files";
import AppsContainer from "../../containers/Apps";
import FoldersContainer from "../../containers/Folders";
import ChatsContainer from "../../containers/Chats";
import MiscContainer from "../../containers/Misc";

const store: any = configureStore({
  reducer: {
    [FilesContainer.slice.name]: FilesContainer.slice.reducer,
    [AppsContainer.slice.name]: AppsContainer.slice.reducer,
    [FoldersContainer.slice.name]: FoldersContainer.slice.reducer,
    [ChatsContainer.slice.name]: ChatsContainer.slice.reducer,
    [MiscContainer.slice.name]: MiscContainer.slice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

export default store;
