import React, { useState } from "react";
import {defaultChatsData} from "../../../config/chats";
import { Inbox as InboxType } from "../../../types/chats";

type User = {
  name: string;
  image: string;
};

type ChatContextProp = {
  user: User;
  inbox: InboxType[];
  activeChat?: InboxType;
  onChangeChat: (chat: InboxType) => void;
};

const initialValue: any = {
  user: { name: "Jazim Abbas", image: "/assets/images/girl.jpeg" },
  defaultChatsData,
  onChangeChat() {
    throw new Error();
  },
};

export const ChatContext = React.createContext<ChatContextProp>(initialValue);

export default function ChatProvider(props: { children: any }) {
  const { children } = props;

  const [user] = useState<User>(initialValue.user);
  const [inbox] = useState<InboxType[]>(initialValue.inbox);
  const [activeChat, setActiveChat] = useState<InboxType>();

  const handleChangeChat = (chat: InboxType) => {
    setActiveChat(chat);
  };

  return (
    <ChatContext.Provider
      value={{ user, inbox, activeChat, onChangeChat: handleChangeChat }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export const useChatContext = () => React.useContext(ChatContext);
