import React from "react";
import { forwardRef, useMemo } from "react";

import Icon from "../icons";
import useScrollToBottom from "../../hooks/useScrollToBottom";
// import { getMessages, Message } from "./data/get-messages";
// import { Message } from "./data/get-messages";
// import { getMessages } from "../utils/getMessages";
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
  AudioPlayerContainer,
  Audio,
  PlayPauseButton,
} from "./styles";

// type MessagesListProps = {
//   onShowBottomIcon: Function;
//   shouldScrollToBottom?: boolean;
// };

export default function MessagesList(props: any) {
  // const { activeChat, shouldScrollToBottom } = props;
  const { activeChat, currentChatWidth } = props;

  // const { containerRef } = useScrollToBottom(
  //   onShowBottomIcon,
  //   // shouldScrollToBottom,
  //   true,
  //   activeChat?.userDetails?.id
  // );

  // const lastMessageRef = React.useRef(null);

  // console.log("containerRef")
  // console.log(containerRef)

  return (
    <Container>
      <EncryptionMessage>
        <Icon id="lock" className="icon" />
        Messages are end-to-end encrypted. No one outside of this chat, not even
        WhatsApp, can read or listen to them. Click to learn more.
      </EncryptionMessage>
      <DateWrapper>
        <Date> TODAY </Date>
      </DateWrapper>

      {/* <MessageGroup>
        {activeChat?.messages?.map((message, i) => {
       
          if (i === activeChat?.messages.length - 1) {
console.log("i")
console.log(i)
            console.log("activeChat?.messages.length")
            console.log(activeChat?.messages.length)
            return (
              <SingleMessage
                key={message.id}
                message={message.body}
                // ref={lastMessageRef}
              />
            );
          } else {
            return <SingleMessage key={message.id} message={message} />;
          }
        })}
      </MessageGroup> */}
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

  // Create a URL object for the blob
  const audioUrl = URL.createObjectURL(blob);

  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  const handleCanPlay = () => {
    setIsLoaded(true);
  };

  return (
    <div>
      {!isLoaded ? (
        <p>Loading audio...</p>
      ) : (
        <audio
          src={audioUrl}
          controls
          // onLoadedData={handleLoadedData}
          // onCanPlay={handleCanPlay}
        />
      )}
    </div>
  );
}

const SingleMessage = forwardRef((props: { message: any }, ref: any) => {
  const { message } = props;

  const [isPlaying, setIsPlaying] = React.useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const audioRef: any = React.createRef();

  return message?.audioData ? (
    // <AudioPlayerContainer>
    //   <Audio src={message.audioUrl} autoPlay={isPlaying} controls />
    //   {/* <PlayPauseButton onClick={togglePlayPause}>
    //     {isPlaying ? "⏸️" : "▶️"}
    //   </PlayPauseButton> */}
    // </AudioPlayerContainer>
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
