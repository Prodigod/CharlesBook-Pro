import { createSelector } from "@reduxjs/toolkit";

import { SLICE_NAME } from "./consts";

export const chatsSelector = (state) => state[SLICE_NAME];

export const allChatsSelector = createSelector(chatsSelector, (chatsState) => {
  return chatsState?.chats;
});

export const activeChatIdSelector = createSelector(
  chatsSelector,
  (chatsState) => {
    return chatsState?.activeChatId;
  }
);

export const activeChatSelector = createSelector(
  allChatsSelector,
  activeChatIdSelector,
  (allChats, activeChatId) => {
    return allChats[activeChatId];
  }
);

//deprecate?
export const isActiveChatGeneratingTextMessageSelector = createSelector(
  activeChatSelector,
  (activeChat) => {
    return activeChat.isGeneratingTextMessage;
  }
);
//deprecate?
export const isActiveChatGeneratingVoiceMessageSelector = createSelector(
  activeChatSelector,
  (activeChat) => {
    return activeChat.isGeneratingVoiceMessage;
  }
);



//add one for last message
//add one for notifications (maybe checkstatus of last messages)
