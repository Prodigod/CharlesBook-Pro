import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Moveable from "react-moveable";

import { openFolder, selectFolder } from "../../../containers/Folders/slice";

const FolderIconWrapper = styled.div<{
  top?: string;
  left?: string;
  opacity?: number;
  zIndex?: number;
  isFocused: boolean;
}>`
  display: flex;
  flex-direction: column;
  height: 120px;
  width: 120px;
  max-height: 120px;
  max-width: 120px;
  justify-content: center;
  align-items: center;
  color: white;
  position: absolute;
  top: ${(props) => props.top + "%"};
  left: ${(props) => props.left + "%"};
  opacity: ${(props) => props.opacity};
  cursor: pointer;
  z-index: ${(props) => props.zIndex};
  border: ${(props) => (props.isFocused ? "2px solid blue" : "none")};
  background-color: ${(props) => (props.isFocused ? "rgba(0, 0, 255, 0.1)" : "transparent")};

  @media (max-width: 550px) {
    width: 90px;
    height: 90px;
    max-height: 90px;
    max-width: 90px;
  }
`;

const FolderIconImage = styled.div<{ iconLocation?: string }>`
  position: relative;
  display: flex;
  width: 60%;
  height: 55%;
  margin-bottom: 2px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 70%;
  border-radius: 3px;
  background-image: url(${(props) => props.iconLocation});
`;

const FolderIconName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 1.1;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  opacity: 0.85;

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

const FolderIcon = ({ id, displayName, position, iconLocation, zIndex, isFocused }) => {
  const dispatch = useDispatch();
  const [opacity, setOpacity] = React.useState(1);
  const [lastTouchTime, setLastTouchTime] = React.useState(0);

  const handleTouchStart = () => {
    const currentTime = new Date().getTime();
    const timeSinceLastTouch = currentTime - lastTouchTime;

    if (timeSinceLastTouch < 300) {
      handleClickIcon();
    }

    setLastTouchTime(currentTime);
  };

  const handleClickForHighlight = () => {
    dispatch(selectFolder(id));
  };

  const handleClickIcon = () => {
    dispatch(selectFolder(id));
    dispatch(openFolder(id));
  };

  const targetRef = React.useRef<HTMLDivElement>(null);

  return (
    <>
      <FolderIconWrapper
        ref={targetRef}
        onTouchStart={handleTouchStart}
        onClick={handleClickForHighlight}
        onDoubleClick={handleClickIcon}
        top={position.y}
        left={position.x}
        opacity={opacity}
        zIndex={zIndex}
        isFocused={isFocused}
      >
        <FolderIconImage iconLocation={iconLocation}></FolderIconImage>
        <FolderIconName>{displayName}</FolderIconName>
      </FolderIconWrapper>

      <Moveable
        target={targetRef}
        origin={false}
        draggable={true}
        throttleDrag={1}
        edgeDraggable={false}
        startDragRotate={0}
        throttleDragRotate={0}
        onDragStart={() => {
          dispatch(selectFolder(id));
          setOpacity(0.8);
        }}
        onDrag={(e) => {
          e.target.style.transform = e.transform;
        }}
        onDragEnd={() => {
          setOpacity(1);
        }}
        hideDefaultLines={true}
      ></Moveable>
    </>
  );
};

export default FolderIcon;
