import styled from "styled-components";

export const Content = styled.div`

  margin: 0 auto;
  box-shadow: ${(props) => props.theme.layout.contentBoxShadowColor};
  position: relative;
  z-index: 100;
  display: flex;
  overflow: hidden;
  height: 100%;


  /* @media screen and (max-width: 500px) {
    display: none;
  } */

  /* @media screen and (min-width: 1450px) {
    height: calc(100vh - 40px);
  } */
`;

// export const Container = styled.div`
//   display: flex;
//   position: relative;

// `;

export const Body = styled.div`
  /* min-width: 300px; */
  flex: 50%;
  border-right: 1px solid ${(props) => props.theme.common.borderColor};
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;

`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  background: url("/assets/images/bg-chat-room.png") rgb(0, 150, 136);
`;

export const FooterContainer = styled.div`
  background: ${(props) => props.theme.common.primaryColor};
  position: relative;
  z-index: 100;
`;

export const ScrollButton = styled.button`
  position: absolute;
  right: 15px;
  bottom: 80px;
  width: 42px;
  height: 42px;
  z-index: -1;
  border-radius: 50%;
  color: ${(props) => props.theme.common.subHeadingColor};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.common.secondaryColor};
  box-shadow: ${(props) => props.theme.chatRoom.scrollBtnBoxShadow};
  z-index: 10;
`;
