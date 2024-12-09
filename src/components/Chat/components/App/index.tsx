import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Moveable from "react-moveable";

import Header from "../header";
import Footer from "../footer";
import Icon from "../icons";
import useChatRoom from "../../hooks/useChatRoom";
import MessagesList from "../messages-list";
import Sidebar from "../sidebar";
import {
  allChatsSelector,
  activeChatSelector,
} from "../../../../containers/Chats/selectors";

import {
  openApp,
  selectApp,
  closeApp,
} from "../../../../containers/Apps/slice";

import { sendMessageAction } from "../../../../containers/Chats/actions";

import { shouldGenerateVoiceMessage } from "../../../../config/chats";

import WindowTitleBar from "../../../WindowTitleBar";

import { itemOnFocusSelector } from "../../../../containers/Misc/selectors";

import {
  APP_ON_FOCUS_CONTENT_ZINDEX,
  APP_NO_FOCUS_CONTENT_ZINDEX,
} from "../../../../config/consts";

import {
  Content,
  Body,
  Background,
  FooterContainer,
  ScrollButton,
} from "./styles";

const DEFAULT_WIDTH = "90vw";
const DEFAULT_HEIGHT = "70vh";

// const MAX_WIDTH = "100vw";
// const MAX_HEIGHT = "100vh";

// const SIDEBAR_FLEX_VAL = "";
// const MESSAGES_FLEX_VAL = 40;

const ChatRoomAppContainer = styled.div`
  .moveable-control {
    display: none !important;
  }
`;

export const ChatRoomAppWrapper = styled.div<{
  isExpanded: boolean;
  zIndex?: number;
}>`
  /* width: 600px; */
  /* max-width: 95vw; */
  height: ${DEFAULT_HEIGHT};
  width: ${DEFAULT_WIDTH};
  position: relative;
  z-index: ${(props) => props.zIndex};

  @media screen and (min-width: 1450px) {
    padding: 20px;
  }
`;

export default function ChatRoomApp() {
  const dispatch = useDispatch();

  const itemOnFocus = useSelector(itemOnFocusSelector);
  const isItemOnFocus = itemOnFocus == "whatsapp";

  const contentZIndex = isItemOnFocus
    ? APP_ON_FOCUS_CONTENT_ZINDEX
    : APP_NO_FOCUS_CONTENT_ZINDEX;

  const allChats = useSelector(allChatsSelector);
  const activeChat = useSelector(activeChatSelector);

  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isResizing, setIsResizing] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  const [isScrolledToBottom, setIsScrolledToBottom] = React.useState(false);

  const handleSendMessage = async (message) => {
    const getVoiceResponse = activeChat.voiceEnabled
      ? shouldGenerateVoiceMessage()
      : false;

    dispatch(
      sendMessageAction({
        chatId: activeChat?.chatId,
        messageBody: message,
        getVoiceResponse,
      })
    );
  };

  const [currentChatWidth, setCurrentChatWidth] = React.useState(0);
  const [currentChatSideBarWidth, setCurrentChatSideBarWidth] =
    React.useState(0);
  const [currentMessagesListWidth, setCurrentMessagesListWidth] =
    React.useState(0);

  React.useEffect(() => {
    if (currentChatWidth && currentMessagesListWidth) {
      setCurrentChatSideBarWidth(currentChatWidth - currentMessagesListWidth);
    }
  }, [currentChatWidth, currentMessagesListWidth, currentChatSideBarWidth]);

  const targetRef = React.useRef<HTMLDivElement>(null);
  const moveableRef = React.useRef<Moveable>();
  const sideBarRef = React.useRef<HTMLDivElement>(null);
  const messagesListRef = React.useRef<HTMLDivElement>(null);
  const messagesRef = React.useRef<HTMLDivElement>(null);
  const messagesListContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    //all chat Width
    const allChatResizeObserver = new ResizeObserver((entries) => {
      if (entries && entries.length > 0) {
        const { width } = entries[0].contentRect;
        setCurrentChatWidth(width);
      }
    });

    if (messagesListRef.current) {
      allChatResizeObserver.observe(targetRef.current);
    }

    //setCurrentMessagesListWidth

    const messagesResizeObserver = new ResizeObserver((entries) => {
      if (entries && entries.length > 0) {
        const { width } = entries[0].contentRect;
        setCurrentMessagesListWidth(width);
      }
    });

    if (messagesListRef.current) {
      messagesResizeObserver.observe(messagesListRef.current);
    }
  }, [
    setCurrentChatSideBarWidth,
    setCurrentMessagesListWidth,
    messagesListRef,
    sideBarRef,
  ]);

  const resizeToMax = () => {
    const { width, height } = getMaxDimensions;

    targetRef.current.style.width = width;
    targetRef.current.style.height = height;

    targetRef.current.style.position = 'fixed';
    targetRef.current.style.top = "0%";
    targetRef.current.style.left = "0%";

    // 50px;
    setIsExpanded(true);

    setTimeout(() => {
      moveableRef.current.updateRect();
    }, 100);
  };

  const resizeToDefault = () => {
    targetRef.current.style.width = DEFAULT_WIDTH;
    targetRef.current.style.height = DEFAULT_HEIGHT;
    setIsExpanded(false);
    setTimeout(() => {
      moveableRef.current.updateRect();
    }, 100);
  };

  const handleResizeStart = () => {
    setIsResizing(true);
    dispatch(selectApp("whatsapp"));
    setIsExpanded(false);
  };

  const handleResize = (e) => {
    const newWidth = e.width;
    const newHeight = e.height;

    e.target.style.width = `${newWidth}px`;
    e.target.style.height = `${newHeight}px`;
    e.target.style.transform = e.drag.transform;
  };

  const scrollToBottom = () => {
    if (messagesListContainerRef.current) {
      messagesListContainerRef.current.scrollTop =
        messagesListContainerRef.current.scrollHeight;
    }
  };

  const getMaxDimensions = React.useMemo(() => {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    let adjustedHeight = "100vh";

    if (isMobile) {
      const viewportHeight = window.innerHeight;

      const isInStandaloneMode =
        (window as any).matchMedia("(display-mode: standalone)").matches ||
        (window.navigator as any).standalone;

      if (!isInStandaloneMode) {
        const bottomBarHeight = window.outerHeight - window.innerHeight;
        adjustedHeight = `calc(100vh - ${bottomBarHeight}px)`;
      }
    }

    return {
      width: "100vw",
      height: adjustedHeight,
    };
  }, []);

  return (
    <ChatRoomAppContainer>
      <ChatRoomAppWrapper
        isExpanded={isExpanded}
        zIndex={contentZIndex}
        ref={targetRef}
        className="chat-app-wrapper"
      >
        <WindowTitleBar
          backgroundColor="#131c21"
          onClose={() => dispatch(closeApp("whatsapp"))}
          onMinimize={() => dispatch(closeApp("whatsapp"))}
          onMaximize={() => {
            if (isExpanded) {
              resizeToDefault();
            } else {
              resizeToMax();
            }
          }}
        />

        <Content className="chat-app-content">
          <Sidebar
            ref={sideBarRef}
            allChats={allChats}
            activeChat={activeChat}
          />

          <Body ref={messagesListRef}>
            <Background />
            <Header
              title={activeChat?.userDetails?.displayName ?? ""}
              image={activeChat?.userDetails?.image ?? ""}
              subTitle={activeChat?.userDetails?.isOnline ? "Online" : ""}
            />
            <MessagesList
              ref={messagesRef}
              activeChat={activeChat}
              isResizing={isResizing}
              isExpanded={isExpanded}
              isScrolling={isScrolling}
              setIsScrolling={setIsScrolling}
              setIsScrolledToBottom={setIsScrolledToBottom}
              messagesListContainerRef={messagesListContainerRef}
            />
            <FooterContainer>
              {!isScrolledToBottom && (
                <ScrollButton
                  onClick={scrollToBottom}
                  onTouchStart={scrollToBottom}
                >
                  <Icon id="downArrow" />
                </ScrollButton>
              )}
              <Footer handleSendMessage={handleSendMessage} />
            </FooterContainer>
          </Body>
        </Content>
      </ChatRoomAppWrapper>
      <Moveable
        ref={moveableRef}
        padding={{ bottom: 30 }}
        //drag
        target={targetRef}
        draggable={true}
        throttleDrag={1}
        edgeDraggable={false}
        startDragRotate={0}
        throttleDragRotate={0}
        hideDefaultLines={true}
        onDrag={(e) => {
          e.target.style.transform = e.transform;
        }}
        //resize
        resizable={true}
        keepRatio={false}
        throttleResize={1}
        onResizeStart={handleResizeStart}
        onResize={handleResize}
        onResizeEnd={() => setIsResizing(false)}
        renderDirections={["nw", "n", "ne", "w", "e", "sw", "s", "se"]}
        edge={true}
        origin={false}
        linePadding={10}
        onDragStart={(e) => {
          dispatch(selectApp("whatsapp"));
          if (e.inputEvent?.touches?.length > 1) {
            e.inputEvent.preventDefault();
            return;
          }
          if (
            e.inputEvent.target.tagName.toLowerCase() === "input" ||
            e.inputEvent.target.tagName.toLowerCase() === "textarea"
          ) {
            return false;
          }
        }}
      ></Moveable>
    </ChatRoomAppContainer>
  );
}
