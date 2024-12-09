import { createSlice } from "@reduxjs/toolkit";

import { SLICE_NAME } from "./consts";

import { DEFAULT_CHAT_ID, defaultChatsData } from "../../config/chats";
import { generateMessageAction, sendMessageAction } from "./actions";

import {
  formatTimestampToDate,
  formatTimestampToTime,
} from "../../utils/helpers/date";

const serializedChats = localStorage.getItem(SLICE_NAME);

const initialState = {
  chats: serializedChats ? JSON.parse(serializedChats) : defaultChatsData,
  activeChatId: DEFAULT_CHAT_ID,
  isChatsReducerLoading: false,
};

export const ChatsSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    setActiveChatId: (state, action) => {
      state.activeChatId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //SEND MESSAGE
      .addCase(sendMessageAction.pending, (state) => {
        state.isChatsReducerLoading = true;
      })
      .addCase(sendMessageAction.rejected, (state) => {
        state.isChatsReducerLoading = false;
      })
      .addCase(sendMessageAction.fulfilled, (state, action) => {
        let { chatId, message, getVoiceResponse } = action.payload;
        message.formattedDate = formatTimestampToDate(message.timestamp);
        message.formattedTime = formatTimestampToTime(message.timestamp);
        state.chats[chatId].messages.push(message);
        state.isChatsReducerLoading = false;
      })
      //GENERATING MESSAGE
      .addCase(generateMessageAction.pending, (state, action) => {
        const { chatId, getVoiceResponse } = action.meta.arg;

        const lastMessageIndex = state.chats[chatId].messages.length - 1;
        if (lastMessageIndex >= 0) {
          state.chats[chatId].messages[lastMessageIndex].messageStatus = "READ";
        }

        state.chats[chatId].isGeneratingTextMessage = !getVoiceResponse;
        state.chats[chatId].isGeneratingVoiceMessage = getVoiceResponse;
        state.isChatsReducerLoading = true;
      })
      .addCase(generateMessageAction.rejected, (state, action) => {
        const { chatId, error } = action.payload;
        state.chats[chatId].isGeneratingTextMessage = false;
        state.chats[chatId].isGeneratingVoiceMessage = false;
        state.isChatsReducerLoading = false;
      })
      .addCase(generateMessageAction.fulfilled, (state, action) => {
        const { chatId, generatedTextMessage, audioData } = action.payload;

        const timestamp = Date.now();

        const generatedMessage = {
          id: timestamp,
          body: generatedTextMessage,
          // audioUrl,
          audioData,
          timestamp,
          messageStatus: "READ",
          isOpponent: true,
          formattedDate: formatTimestampToDate(timestamp),
          formattedTime: formatTimestampToTime(timestamp),
        };

        state.chats[chatId].messages.push(generatedMessage);
        state.chats[chatId].isGeneratingTextMessage = false;
        state.chats[chatId].isGeneratingVoiceMessage = false;

        state.isChatsReducerLoading = false;
      });
  },
});

export const { setActiveChatId } = ChatsSlice.actions;

export default ChatsSlice;

// export type Inbox = {
//   id: string;
//   name: string;
//   image: string;
//   lastMessage?: string;
//   timestamp?: string;
//   messageStatus?: MessageStatus;
//   notificationsCount?: number;
//   isPinned?: boolean;
//   isOnline?: boolean;
// };

//from current state management

//track..
//user, (name,image)
//inbox :Inbox
//activechat

//onChangeChat (sets chat..)
