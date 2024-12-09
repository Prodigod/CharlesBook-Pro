import { chatsDefaultMessages } from "./messages";
import { chatsUsers } from "./users";

const { donaldTrump, dad, parabolic, zuck } = chatsUsers;
const { trumpMessages, dadMessages, parabolicMessages, zuckMessages } =
  chatsDefaultMessages;

export const TRUMP_CHAT_ID = "trumpChat";
export const DAD_CHAT_ID = "dadChat";
export const PARABOLIC_CHAT_ID = "parabolicChat";
export const ZUCK_CHAT_ID = "zuckChat";

export const DEFAULT_CHAT_ID = TRUMP_CHAT_ID;

export const defaultChatsData: any = {
  trumpChat: {
    chatId: TRUMP_CHAT_ID,
    userDetails: { ...donaldTrump },
    messages: [...trumpMessages],
    isGeneratingTextMessage: false,
    isGeneratingVoiceMessage: false,
    chatNotifications: 0,
    voiceEnabled: true,
  },
  dadChat: {
    chatId: DAD_CHAT_ID,
    userDetails: { ...dad },
    messages: [...dadMessages],
    isGeneratingTextMessage: false,
    isGeneratingVoiceMessage: false,
    chatNotifications: 0,
    voiceEnabled: false,
  },
  // parabolicChat: {
  //   chatId: PARABOLIC_CHAT_ID,
  //   userDetails: { ...parabolic },
  //   messages: [...parabolicMessages],
  //   isGeneratingTextMessage: false,
  //   isGeneratingVoiceMessage: false,
  //   chatNotifications: 0,
  //   voiceEnabled: true,
  // },
  // zuckChat: {
  //   chatId: ZUCK_CHAT_ID,
  //   userDetails: { ...zuck },
  //   messages: [...zuckMessages],
  //   isGeneratingTextMessage: false,
  //   isGeneratingVoiceMessage: false,
  //   chatNotifications: 0,
  //   voiceEnabled: true,
  // },
};

export const AUDIO_MESSAGE_PROBABILITY = 0.85;

export const shouldGenerateVoiceMessage = () => {
  const probability = Math.max(0, Math.min(1, AUDIO_MESSAGE_PROBABILITY));

  const randomNumber = Math.random();

  const isVoiceMessage = randomNumber < probability;

  return isVoiceMessage;
};
