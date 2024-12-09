import Icon from "../../icons";
import styled, { css } from "styled-components";

export const Contact = styled.div<{ isActive?: boolean }>`
  height: 72px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.common.primaryColor};

  cursor: pointer;
  ${(props) =>
    props.isActive &&
    css`
      background-color: ${(props) => props.theme.common.primaryColor};
    `};

  &:hover {
    background-color: ${(props) => props.theme.common.primaryColor};
  }

  .sidebar-contact__icons,
  &:not(:focus) .sidebar-contact__icons {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(24px);
    transition: transform 0.5s ease;
  }

  &:hover .sidebar-contact__icons {
    transform: translateX(0);
  }

  .sidebar-contact__icons > * {
    margin-left: 8px;
    color: ${(props) => props.theme.common.headerIconColor};
  }

  .icon {
    color: ${(props) => props.theme.common.primaryColor};
  }

  @media screen and (max-width: 1000px) {
    padding: 10px 12px;
  }

  @media screen and (max-width: 600px) {
   height:62px;
  }
`;

export const AvatarWrapper = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 10px;

  @media screen and (max-width: 1000px) {
    width: 36px;
    height: 36px;
  }

  @media screen and (max-width: 600px) {
    height: 30px;
    width: 30px;
    margin-right: 5px;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  height: 100%;
  width: 100%;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  overflow: hidden;
  flex: 1;
 
`;

export const contentStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TopContent = styled.div`
  margin-bottom: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  /* display:relative; */
`;

export const TopContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  /* display:relative; */
`;
export const MessagingStatus = styled.span`
  width: 100%;
  font-size: 0.7rem;
  color: ${(props) => props.theme.common.subHeadingColor};



`;

export const messageStyles = css`
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Name = styled.h2`
  color: ${(props) => props.theme.common.mainHeadingColor};
  font-size: 1rem;
  font-weight: 500;

  ${messageStyles}

  @media screen and (max-width: 1000px) {
    font-size: 0.75rem;
  }
`;

export const Time = styled.span`
  font-size: 0.7rem;
  color: ${(props) => props.theme.common.subHeadingColor};

  @media screen and (max-width: 1000px) {
    font-size: 0.55rem;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const BottomContent = styled.div`
  ${contentStyles}
`;

export const MessageWrapper = styled.div`
  color: ${(props) => props.theme.common.subHeadingColor};
  font-size: 0.85rem;
  margin-right: 3px;
  overflow: hidden;
  position: relative;
  ${contentStyles}

  @media screen and (max-width: 1000px) {
    font-size: 0.65rem;
  }
`;

export const MessageStatusIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 0;
  ${(props) =>
    props.isRead &&
    css`
      color: ${(props) => props.theme.common.readIconColor};
    `};
`;

export const Subtitle = styled.span`
  margin-left: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UnreadContact = styled.span`
  display: inline-block;
  color: ${(props) => props.theme.common.secondaryColor} !important;
  background-color: ${(props) => props.theme.common.tertiaryColor};
  border-radius: 18px;
  min-width: 18px;
  height: 18px;
  padding: 0 3px;
  line-height: 18px;
  vertical-align: middle;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 500;
`;
