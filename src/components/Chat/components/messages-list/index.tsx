import React from "react";
import { forwardRef } from "react";

import Icon from "../icons";
import dataUriToBlob from "../../../../utils/helpers/dataUriToBlob";

import {
  ChatMessage,
  ChatMessageFiller,
  ChatMessageFooter,
  ChatMessageText,
  Container,
  Date,
  DateWrapper,
  EncryptionMessage,
  MessageGroupContainer,
  MessageGroup,
} from "./styles";

export default function MessagesList(props: any) {
  const {
    activeChat,
    isResizing,
    isExpanded,
    setIsScrolledToBottom,
    isScrolling,
    setIsScrolling,
    messagesListContainerRef,
  } = props;

  React.useEffect(() => {
    const isScrolled =
      messagesListContainerRef.current.scrollHeight -
        messagesListContainerRef.current.scrollTop ===
      messagesListContainerRef.current.clientHeight;

    setIsScrolledToBottom(isScrolled);

    let timeout;
    const handleScroll = () => {
      setIsScrolling(true);

      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setIsScrolling(false);
      }, 100);
    };

    messagesListContainerRef.current.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      messagesListContainerRef?.current?.removeEventListener(
        "scroll",
        handleScroll
      );
      clearTimeout(timeout);
    };
  }, [activeChat, isResizing, isExpanded, isScrolling]);

  return (
    <Container
      ref={messagesListContainerRef}
      onTouchStart={() => {
        messagesListContainerRef.current.style.overflowY = "auto";
      }}
    >
      <EncryptionMessage>
        <Icon id="lock" className="icon" />
        Messages are end-to-end encrypted. No one outside of this chat, not even
        WhatsApp, can read or listen to them. Click to learn more.
      </EncryptionMessage>
      <DateWrapper>
        <Date> TODAY </Date>
      </DateWrapper>

      <MessageGroupContainer>
        <MessageGroup>
          {activeChat?.messages?.map((message, i) => {
            return <SingleMessage key={message.id} message={message} />;
          })}
        </MessageGroup>
      </MessageGroupContainer>
    </Container>
  );
}

function AudioMessage({ audioData }) {
  const [isLoaded, setIsLoaded] = React.useState(true);

  const blob = dataUriToBlob(audioData);

  const audioUrl = URL.createObjectURL(blob);

  return (
    <div className="audio-message">
      {!isLoaded ? (
        <p>Loading audio...</p>
      ) : (
        <audio
          src={audioUrl}
          controls
          onLoadedData={() => setIsLoaded(true)}
          onCanPlay={() => setIsLoaded(true)}
        />
      )}
    </div>
  );
}

const SingleMessage = forwardRef((props: { message: any }, ref: any) => {
  const { message } = props;

  return message?.audioData ? (
    <AudioMessage audioData={message?.audioData} />
  ) : (
    <ChatMessage
      key={message.id}
      className={message.isOpponent ? "chat__msg--received" : "chat__msg--sent"}
      ref={ref}
    >
      <span>{message.body}</span>
      <ChatMessageFiller />
      <ChatMessageFooter>
        <ChatMessageText>{message.formattedTime}</ChatMessageText>
        {!message.isOpponent && (
          <Icon
            id={`${
              message.messageStatus === "SENT" ? "singleTick" : "doubleTick"
            }`}
            className={`chat__msg-status-icon ${
              message.messageStatus === "READ"
                ? "chat__msg-status-icon--blue"
                : ""
            }`}
          />
        )}
      </ChatMessageFooter>
    </ChatMessage>
  );
});
