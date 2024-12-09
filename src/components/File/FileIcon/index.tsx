import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Moveable from "react-moveable";

import { openFile, selectFile } from "../../../containers/Files/slice";

import { setFolderWithDraggingChildren } from "../../../containers/Folders/slice";

const FileIconWrapper = styled.div<{
  top?: string;
  left?: string;
  opacity?: number;
  zIndex?: number;
  existsInFolder?: boolean;
  isParentFolder?: boolean;
  isInsideFolder?: boolean;
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
  z-index: 0;
  /* position: absolute; */
  top: ${(props) => !props.isInsideFolder && props.top + "%"};
  left: ${(props) => !props.isInsideFolder && props.left + "%"};

  opacity: ${(props) => props.opacity};
  position: ${(props) => (props.isInsideFolder ? "relative" : "absolute")};

  cursor: pointer;
  z-index: ${(props) => props.zIndex};

  @media (max-width: 550px) {
    width: 90px;
    height: 90px;
    max-height: 90px;
    max-width: 90px;
  }
`;

const FileIconImage = styled.div<{ iconLocation?: string }>`
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

const FileIconName = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  // width: 50%;
  border-radius: 3px;
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

const FileIcon = ({
  id,
  displayName,
  position,
  iconLocation,
  isLink,
  goToUrl,
  open,
  zIndex,
  //
  fileParent,
  existsInFolder,
  isParentFolder,
}) => {
  const dispatch = useDispatch();

  const [opacity, setOpacity] = React.useState(1);

  //   const [isSelected, setIsSelected] = React.useState(false);

  const [lastTouchTime, setLastTouchTime] = React.useState(0);

  const handleTouchStart = () => {
    const currentTime = new Date().getTime();
    const timeSinceLastTouch = currentTime - lastTouchTime;

    if (timeSinceLastTouch < 300) {
      handleClickIcon();
    }

    setLastTouchTime(currentTime);
  };

  const handleClickIcon = () => {
    dispatch(selectFile(id));

    if (isLink) {
      window.open(goToUrl, "_blank");
    } else {
      dispatch(openFile(id));
    }
  };

  const targetRef = React.useRef<HTMLDivElement>(null);

  const shouldHideOnDesktop = existsInFolder && !isParentFolder;

  const isInsideFolder = !!fileParent;

  return (
    <>
      <FileIconWrapper
        ref={targetRef}
        onTouchStart={handleTouchStart}
        onDoubleClickCapture={handleClickIcon}
        top={position.y}
        left={position.x}
        opacity={opacity}
        zIndex={zIndex}
        existsInFolder={existsInFolder}
        isParentFolder={isParentFolder}
        isInsideFolder={isInsideFolder}
        // shouldHideOnDesktop={shouldHideOnDesktop}
      >
        <FileIconImage iconLocation={iconLocation}></FileIconImage>
        <FileIconName>{displayName}</FileIconName>
      </FileIconWrapper>

      <Moveable
        //drag
        target={targetRef}
        origin={false}
        draggable={true}
        throttleDrag={1}
        edgeDraggable={false}
        startDragRotate={0}
        throttleDragRotate={0}
        onDragStart={(e) => {
          dispatch(selectFile(id));

          if (fileParent) {
            dispatch(setFolderWithDraggingChildren(fileParent));
          }
          setOpacity(0.8);
        }}
        onDrag={(e) => {
          e.target.style.transform = e.transform;
        }}
        onDragEnd={(e) => {
          setOpacity(1);

          if (fileParent) {
            dispatch(setFolderWithDraggingChildren(null));
          }
        }}
        hideDefaultLines={true}
      ></Moveable>
    </>
  );
};

export default FileIcon;
