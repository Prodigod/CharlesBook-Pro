// import React from "react";

import Icon from "../../icons";
import { Inbox } from "../../../../../types/chats";

import {
  Avatar,
  AvatarWrapper,
  BottomContent,
  Contact,
  Content,
  MessageStatusIcon,
  MessageWrapper,
  Name,
  Subtitle,
  Time,
  TopContent,
  TopContentHeader,
  MessagingStatus,
  UnreadContact,
} from "./styles";

// type InboxContactProps = {
//   inbox: Inbox;
//   onChangeChat?: Function;
//   isActive?: boolean;
// };

export default function InboxContact(props: any) {
  const {
    inbox,
    isActive,
    onChangeChat,
    isSendingTextMessage,
    isSendingVoiceMessage,
  } = props;

  const { chatId, userDetails, messages } = inbox;

  const { displayName, image, isOnline, isPinned } = userDetails;

  // const lastMessage = messages[messages.length - 1];

  const lastTextMessage = messages
    .slice()
    .reverse()
    .find((message) => {
      return message?.audioData === null && message.body;
    });

  const handleChangeChat = () => {
    if (onChangeChat) {
      onChangeChat(chatId);
    }
  };

  return (
    <Contact
      isActive={isActive}
      onClick={handleChangeChat}
      onTouchStart={handleChangeChat}
    >
      <AvatarWrapper>
        <Avatar src={image} />
      </AvatarWrapper>
      <Content>
        <TopContent>
          <TopContentHeader>
            <Name>{displayName}</Name>
            {lastTextMessage?.formattedTime && lastTextMessage ? (
              <Time>{lastTextMessage?.formattedTime}</Time>
            ) : (
              <Trailing {...props.inbox} />
            )}
    
          </TopContentHeader>
          {isSendingTextMessage && (
              <MessagingStatus>typing...</MessagingStatus>
            )}
            {isSendingVoiceMessage && (
              <MessagingStatus>recording voice message...</MessagingStatus>
            )}
        </TopContent>

        <BottomContent>
          <MessageWrapper>
            <Message lastMessage={lastTextMessage} />
          </MessageWrapper>

          {/* {lastMessage?.formattedTime  && (
            <Trailing {...userDetails} />
          )} */}
        </BottomContent>
      </Content>
    </Contact>
  );
}

// function Message(props: Pick<Inbox, "messageStatus" | "lastMessage">) {
function Message(props: any) {
  const { lastMessage } = props;

  if (!lastMessage) return <></>;

  return (
    <>
      <MessageStatusIcon
        isRead={lastMessage.messageStatus === "READ"}
        id={lastMessage.messageStatus === "SENT" ? "singleTick" : "doubleTick"}
      />
      <Subtitle>{lastMessage.body}</Subtitle>
    </>
  );
}

function Trailing(props: Pick<Inbox, "isPinned" | "notificationsCount">) {
  const { isPinned, notificationsCount } = props;

  return (
    <div className="sidebar-contact__icons">
      {isPinned && <Icon id="pinned" className="sidebar-contact__icon" />}

      {notificationsCount !== undefined && notificationsCount > 0 && (
        <UnreadContact>{notificationsCount}</UnreadContact>
      )}

      <button aria-label="sidebar-contact__btn">
        <Icon
          id="downArrow"
          className="sidebar-contact__icon sidebar-contact__icon--dropdown"
        />
      </button>
    </div>
  );
}
