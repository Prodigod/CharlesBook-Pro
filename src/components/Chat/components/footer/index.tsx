import React from "react";
import Icon from "../icons";
import { IconsWrapper, Input, SendMessageButton, Wrapper } from "./styles";
import getIOSInputEventHandlers from "../../../../utils/helpers/getIOSInputEventHandlers";

export default function Footer({ handleSendMessage }) {
  const [currentMessage, setCurrentMessage] = React.useState("");

  React.useEffect(() => {
    console.log("currentMessage");
    console.log(currentMessage);
  }, [currentMessage]);

  const sendMessage = async () => {
    if (currentMessage) {
      await handleSendMessage(currentMessage);
      setCurrentMessage("");
    }
  };
  return (
    <Wrapper>
      <IconsWrapper></IconsWrapper>
      <Input
        {...getIOSInputEventHandlers()}
        placeholder="Type a message here .."
        onChange={(event) => setCurrentMessage(event.target.value)}
        value={currentMessage}
        onKeyDown={async (event) => {
          if (event.key === "Enter") {
            sendMessage()
          }
        }}
      />
      <SendMessageButton onClick={sendMessage} onTouchStart={sendMessage}>
        <Icon id="send" className="icon submit-message-icon" />
      </SendMessageButton>
    </Wrapper>
  );
}
