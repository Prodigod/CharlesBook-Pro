import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateTextMessageApi, generateVoiceMessageApi } from "./api";
import { AUDIO_MESSAGE_PROBABILITY } from "../../config/chats";

export const sendMessageAction: any = createAsyncThunk(
  "chats/send",
  async (payload: any, { rejectWithValue, getState, dispatch }) => {
    try {
      const { chatId, messageBody, getVoiceResponse } = payload;

      const timestamp = Date.now();

      const message = {
        id: timestamp,
        body: messageBody,
        timestamp,
        isOpponent: false,
        messageStatus: "SENT",
        audiodata: null,
      };

      return { chatId, message, getVoiceResponse };
    } catch (error) {
      console.log("getPatientsAction error!", error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const generateMessageAction: any = createAsyncThunk(
  "chats/generate",
  async (payload: any, { rejectWithValue }) => {
    try {
      //NNEEED to send previus messages to open AI for context

      var { chatId, message, getVoiceResponse, chats } = payload;

      const generateTextMessageApiResponse = await generateTextMessageApi(
        chatId,
        chats,
        message.body
      );

      const { generatedTextMessage } = generateTextMessageApiResponse;

      const delay = generatedTextMessage.length * (getVoiceResponse ? 45 : 65);

      await new Promise((resolve) => setTimeout(resolve, delay));

      // let audioUrl = null;
      // let base64Data = null;

      if (getVoiceResponse) {
        const generateVoiceMessageApiResponse = await generateVoiceMessageApi(
          chatId,
          generatedTextMessage
        );

        const blob = new Blob([generateVoiceMessageApiResponse], {
          type: "audio/mpeg",
        });

        // audioUrl = URL.createObjectURL(blob);

        // const audio = new Audio();

        // audio.src = audioUrl;

        const reader = new FileReader();
        reader.readAsDataURL(blob);

        var base64DataPromise = new Promise<string | ArrayBuffer | null>(
          (resolve) => {
            reader.onload = function () {
              const result = reader.result;
              resolve(result);
            };
          }
        );
      }

      return {
        chatId,
        generatedTextMessage,
        // audioUrl,
        audioData: await base64DataPromise,
      };
    } catch (error) {
      console.log("generateMessageAction error!");
      console.log(error)
      console.log("---")
      return rejectWithValue({ chatId, error });
    }
  }
);
