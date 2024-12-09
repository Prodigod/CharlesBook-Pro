import api from "../../config/api";

export const generateTextMessageApi = async (chatId,chats, message) => {
  try {
    const response = await api.post("/messages/generateText", {
      chatId,
      chats,
      message,
    });
    return response.data;
  } catch (error) {
    console.error("Error generateTextMessageApi:", error);
    throw error;
  }
};

export const generateVoiceMessageApi = async (chatId, generatedTextMessage) => {
  try {
    const response = await api.post(
      "/messages/generateVoice",
      { chatId, generatedTextMessage },
      { responseType: "blob" }
    );
    return response.data;
  } catch (error) {
    console.error("Error generateVoiceMessageApi:", error);
    throw error;
  }
};
