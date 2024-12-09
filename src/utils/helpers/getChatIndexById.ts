const getChatIndexById = (chats, chatId) => {
  const chatIndex = chats.findIndex((chat) => chat.chatId === chatId);

  return chatIndex;
};

export default getChatIndexById;
