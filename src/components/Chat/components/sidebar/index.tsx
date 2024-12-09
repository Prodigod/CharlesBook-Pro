// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BsFillMoonFill, BsMoon } from "react-icons/bs";

import SidebarAlert from "./alert";
import InboxContact from "./contacts";
import Icon from "../icons";
import { useAppTheme } from "../../theme";
import { Inbox } from "../../../../types/chats";
import { useChatContext } from "../../context/chat";
import {
  Actions,
  Avatar,
  ContactContainer,
  Header,
  ImageWrapper,
  SidebarContainer,
  ThemeIconContainer,
} from "./styles";

import { setActiveChatId } from "../../../../containers/Chats/slice";

const profile_img_url =
  "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20171130_183241_IMG_0017-xl.jpg";

export default function Sidebar({ allChats, activeChat, ref }) {
  const dispatch = useDispatch();

  const theme = useAppTheme();
  // const navigate = useNavigate();

  const handleChangeThemeMode = () => {
    theme.onChangeThemeMode();
  };

  const handleChangeChat = (chatId) => {
    // chatCtx.onChangeChat(chat);
    // navigate("/" + chat.id);
    dispatch(setActiveChatId(chatId));
  };

  return (
    <SidebarContainer>
      <Header>
        <ImageWrapper>
          <Avatar src={profile_img_url} />
        </ImageWrapper>
        <Actions>
          <ThemeIconContainer
            onClick={handleChangeThemeMode}
            onTouchStart={handleChangeThemeMode}
          >
            {theme.mode === "light" ? <BsMoon /> : <BsFillMoonFill />}
          </ThemeIconContainer>
        </Actions>
      </Header>
      {/* <SidebarAlert /> */}

      <ContactContainer>
        {Object.values(allChats).map((inbox: any) => {
          return (
            <InboxContact
              key={inbox?.userDetails?.id}
              inbox={inbox}
              isActive={inbox?.chatId === activeChat?.chatId}
              onChangeChat={handleChangeChat}
              isSendingTextMessage={inbox.isGeneratingTextMessage}
              isSendingVoiceMessage={inbox.isGeneratingVoiceMessage}
            />
          );
        })}
      </ContactContainer>
    </SidebarContainer>
  );
}
