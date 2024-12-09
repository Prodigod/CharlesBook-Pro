import { createListenerMiddleware, createAction } from "@reduxjs/toolkit";

import { generateMessageAction } from "../../containers/Chats/actions";
import { setItemOnFocus as setItemOnFocusAction } from "../../containers/Misc/slice";
import { SLICE_NAME as CHATS_SLICE_NAME } from "../../containers/Chats/consts";
import { SLICE_NAME as FILES_SLICE_NAME } from "../../containers/Files/consts";
import { SLICE_NAME as FOLDERS_SLICE_NAME } from "../../containers/Folders/consts";
import { SLICE_NAME as APPS_SLICE_NAME } from "../../containers/Apps/consts";

import getRandomBetweenRanges from "../../utils/helpers/getRandomBetweenRanges";

const messageSent = createAction("chats/send/fulfilled");
const messageGenerated = createAction("chats/generate/fulfilled");

const fileSelected = createAction(`${FILES_SLICE_NAME}/selectFile`);
const folderSelected = createAction(`${FOLDERS_SLICE_NAME}/selectFolder`);
const appSelected = createAction(`${APPS_SLICE_NAME}/selectApp`);

export const listenerMiddleware: any = createListenerMiddleware();

let lastGenerateMessageActionId = null;

listenerMiddleware.startListening({
  actionCreator: messageSent,
  effect: (action, listenerApi) => {
    const waitingTime = getRandomBetweenRanges(3000, 7000);

    setTimeout(() => {
      const { chatId, message, getVoiceResponse } = action.payload;
      const { dispatch } = listenerApi;

      const state = listenerApi.getState();

      const chats = state[CHATS_SLICE_NAME].chats;

      dispatch(
        generateMessageAction({ chatId, message, getVoiceResponse, chats })
      );
    }, waitingTime);
  },
});

listenerMiddleware.startListening({
  actionCreator: messageGenerated,
  effect: (action, listenerApi) => {
    const state = listenerApi.getState();
    const chats = state[CHATS_SLICE_NAME].chats;

    const serializedChats = JSON.stringify(chats);

    localStorage.setItem(CHATS_SLICE_NAME, serializedChats);
  },
});

//updating item on focues
listenerMiddleware.startListening({
  actionCreator: fileSelected,
  effect: (action, listenerApi) => {
    const { dispatch } = listenerApi;
    dispatch(setItemOnFocusAction(action.payload));
  },
});

listenerMiddleware.startListening({
  actionCreator: folderSelected,
  effect: (action, listenerApi) => {
    const { dispatch } = listenerApi;
    dispatch(setItemOnFocusAction(action.payload));
  },
});

listenerMiddleware.startListening({
  actionCreator: appSelected,
  effect: (action, listenerApi) => {
    const { dispatch } = listenerApi;
    dispatch(setItemOnFocusAction(action.payload));
  },
});
