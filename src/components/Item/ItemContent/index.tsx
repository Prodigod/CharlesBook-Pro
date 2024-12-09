import "./styles.scss";

import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import Draggable from "react-draggable";
import ItemContentPdf from "./ItemContentPdf";
import { ItemTypes } from "../../../types/items";
import ReactPlayer from "react-player";
import { closeFile, selectFile } from "../../../containers/Files/slice";
import { selectedFileSelector } from "../../../containers/Files/selectors";

const ItemContentInner = ({
  itemType,
  iconLocation,
  fileLocation,
  pageCount,
  children
}) => {
  switch (itemType) {
    case ItemTypes.pdf:
      return (
        <div className="window-pdf">
          <ItemContentPdf fileLocation={fileLocation} pageCount={pageCount} />
        </div>
      );
    case ItemTypes.video:
      return (
        <div className="window-video">
          <ReactPlayer
            className="window-video-player"
            url={fileLocation}
            controls={true}
          />
        </div>
      );
    case ItemTypes.image:
      return (
        <div
          className="window-image"
          style={{ backgroundImage: `url(${iconLocation})` }}
        ></div>
      );

    case ItemTypes.app:
      return (
        <div
          className="window-app"
        >{children}</div>
      );
    default:
      return null;
  }
};

const ItemContent = ({
  id,
  displayName,
  type,
  iconLocation,
  fileLocation,
  pageCount,
  children
}) => {
  const dispatch = useDispatch();

  const [isResizing, setIsResizing] = React.useState(false);
  const [isDragging, setIsDragging] = React.useState(false);
  const [width, setWidth] = React.useState(600);
  const [height, setHeight] = React.useState(600);
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [position, setPosition] = React.useState({
    x: Math.floor(Math.random() * 100),
    y: Math.floor(Math.random() * 100),
  });
  const [touchStartTime, setTouchStartTime] = React.useState(0);
  const [touchEndTime, setTouchEndTime] = React.useState(0);
  const [zIndex, setZIndex] = React.useState(1);

  const selectedFile = useSelector(selectedFileSelector);

  React.useEffect(() => {
    const isOnFocus = isResizing || isDragging || selectedFile == id;
    setZIndex(isOnFocus ? 10 : 1);
  }, [isResizing, isDragging, selectedFile, id]);

  const elementRef = React.useRef(null);

  const handleStart = () => {
    setZIndex(10);
    setTouchStartTime(Date.now());
  };

  const handleEnd = () => {
    setTouchEndTime(Date.now());
    if (touchEndTime - touchStartTime < 200) {
      dispatch(closeFile(id));
    }
    setZIndex(1);
  };

  const handleDrag = () => {
    setZIndex(10);
    setIsDragging(true);
    dispatch(selectFile(id));
  };

  React.useEffect(() => {
    if (elementRef.current) {
      if (window.innerWidth < 601) {
        setWidth(window.innerWidth * 0.9);
        setHeight(window.innerHeight * 0.7);
      } else {
        setWidth(elementRef.current.clientWidth);
        setHeight(elementRef.current.clientHeight);
      }
    }
  }, []);

  return (
    <Draggable
      nodeRef={elementRef}
      disabled={isResizing}
      onStart={handleDrag}
      onDrag={(evt, data) => {
        setPosition({ x: data.x, y: data.y });
      }}
      onStop={() => {
        setIsResizing(false);
        setIsDragging(false);
      }}
      position={position}
      defaultClassName="window-draggable"
      bounds="body"
    >
      <div
        onClick={() => dispatch(selectFile(id))}
        ref={elementRef}
        className="window"
        style={{
          width: isExpanded ? "90vw" : `${width}px`,
          height: isExpanded ? "70vh" : `${height}px`,
          opacity: isDragging ? 0.96 : 1,
          zIndex,
        }}
      >
        <div className="top-bar">
          <div className="top-bar-buttons-container">
            <button
              className="button red"
              onMouseDown={handleStart}
              onMouseUp={handleEnd}
              onTouchStart={handleStart}
              onTouchEnd={handleEnd}
            ></button>
            <button
              className="button yellow"
              onMouseDown={handleStart}
              onMouseUp={handleEnd}
              onTouchStart={handleStart}
              onTouchEnd={handleEnd}
            ></button>
            <button
              className="button green"
              onMouseDown={handleStart}
              onMouseUp={() => setIsExpanded(!isExpanded)}
              onTouchStart={handleStart}
              onTouchEnd={() => setIsExpanded(!isExpanded)}
            ></button>
          </div>
          <p className="top-bar-window-name">{displayName}</p>
        </div>
        <ItemContentInner
          itemType={type}
          iconLocation={iconLocation}
          fileLocation={fileLocation}
          pageCount={pageCount}
          children={children}
        />
      </div>
    </Draggable>
  );
};

export default ItemContent;
