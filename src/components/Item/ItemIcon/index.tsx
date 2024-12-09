import "./styles.scss";

import React from "react";
import { useDispatch } from "react-redux";

import Draggable from "react-draggable";
import { ItemTypes } from "../../../types/items";
import { openFile } from "../../../containers/Files/slice";

const ItemIcon = ({
  id,
  displayName,
  defaultIconPosition,
  type,
  iconLocation,
  goToUrl,
  pageCount,
}) => {
  const dispatch = useDispatch();

  const elementRef = React.useRef(null);
  const [opacity, setOpacity] = React.useState(1);

  const [position, setPosition] = React.useState(defaultIconPosition);
  const [isSelected, setIsSelected] = React.useState(false);

  const isUrl = type === ItemTypes.link && !!goToUrl;

  const [lastTouchTime, setLastTouchTime] = React.useState(0);

  const calculateRandomPosition = React.useMemo(() => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const viewportWidthWithBuffer = windowWidth - windowWidth * 0.2;
    const viewportHeightWithBuffer = windowHeight - windowHeight * 0.2;

    let x, y;
    do {
      x = Math.random() * viewportWidthWithBuffer - viewportWidthWithBuffer / 2;
      y =
        Math.random() * viewportHeightWithBuffer - viewportHeightWithBuffer / 2;
    } while (Math.abs(x) <= 75 || Math.abs(y) <= 75);

    return { x, y };
  }, []);

  const handleTouchStart = () => {
    const currentTime = new Date().getTime();
    const timeSinceLastTouch = currentTime - lastTouchTime;

    if (timeSinceLastTouch < 300) {
      handleClickIcon();
    }

    setLastTouchTime(currentTime);
  };

  const handleClickIcon = () => {
    if (isUrl) {
      window.open(goToUrl, "_blank");
    } else {
      dispatch(openFile(id));
    }
  };

  const handleStop = (_, data) => {
    setOpacity(1);
    setPosition({ x: data.x, y: data.y });
  };

  return (
    <Draggable
      bounds="body"
      nodeRef={elementRef}
      onStart={() => {
        setIsSelected(true)
        setOpacity(0.7)
      }}
      onStop={handleStop}
      defaultPosition={defaultIconPosition || calculateRandomPosition}
      position={position}
    >
      <div
        className="desktop-item"
        ref={elementRef}
        onTouchStart={handleTouchStart}
        onDoubleClickCapture={handleClickIcon}
        style={{
          opacity,
          zIndex:isSelected ? 10 : 1,
        }}
      >
        <div
          className={`desktop-item-icon desktop-item-icon-${ItemTypes[type]}`}
          style={{ backgroundImage: `url(${iconLocation})` }}
        />
        <div className="desktop-item-name">{displayName}</div>
      </div>
    </Draggable>
  );
};

export default ItemIcon;
