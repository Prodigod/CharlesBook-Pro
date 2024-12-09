import React from "react";
import styled from "styled-components";

const WindowTitleBarWrapper = styled.div<{ backgroundColor?: string }>`
  background-color: ${(props) => props.backgroundColor || "transparent"};
  height: 34px;
  width: 100%;
  position: relative;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

const WindowTitleBarButtonsWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  position: relative;
  margin-left: 12px;
  background-color: ${(props) => props.color || "transparent"};
`;

const WindowTitleBarButton = styled.div<{ backgroundColor?: string }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 4px;
  cursor: pointer;
  background-color: ${(props) => props.color || "transparent"};
  border: none;
  color: inherit;
  font: inherit;
  padding: 0;
  outline: none;

  @media (max-width: 600px) {
    width: 12px;
    height: 12px;
  }
`;

const WindowTitleBarName = styled.p`
  color: white;
  padding: 0;
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  opacity: 0.8;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-family: "SF Regular";

  @media (max-width: 600px) {
    /* right: 10%;
    left:auto;
    font-size: 11px;
    font-weight: 400;
    transform: translate(0%,-50%); */
    display:none;
  }
`;

export default function WindowTitleBar(props) {
  const { backgroundColor, onClose, onMinimize, onMaximize, windowName } =
    props;

  return (
    <WindowTitleBarWrapper backgroundColor={backgroundColor}>
      <WindowTitleBarButtonsWrapper>
        <WindowTitleBarButton color="#D04C3E" onClick={onClose} onTouchStart={onClose}/>
        <WindowTitleBarButton color="#d69e3b" onClick={onMinimize} onTouchStart={onMinimize}/>
        <WindowTitleBarButton color="#4fa63b" onClick={onMaximize} onTouchStart={onMaximize}/>
      </WindowTitleBarButtonsWrapper>
      <WindowTitleBarName>{windowName}</WindowTitleBarName>
    </WindowTitleBarWrapper>
  );
}
