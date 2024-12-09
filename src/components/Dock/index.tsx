import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { openApp, closeApp } from "../../containers/Apps/slice";
import { openFile, closeFile } from "../../containers/Files/slice";

import DockItem from "./DockItem";

import { getDockConfig } from "./config";

export const DockWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 15px, rgba(0, 0, 0, 0.1) 0px 12px 15px,
    rgba(0, 0, 0, 0.1) 0px 40px 70px;
  gap: 1px;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 18px;
  margin-top: 50px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0px);
  bottom: 9px;
  backdrop-filter: blur(20px);
  max-width: 90vw;
  padding: 0px 10px;
  z-index: 3000;
  height: 71px !important;

  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  font-family: inherit;
  font-weight: 400;

  @media (max-width: 550px) {
    flex-direction: column;
    left: 0%;
    top: 50%;
    transform: translate(0%, -50%);
    overflow-x: hidden;
    padding: 30px 5px;
    align-items: flex-start;
    height: fit-content !important;
  }
`;

export default function Dock({ allApps, allFiles }) {
  const dispatch = useDispatch();
  const dockConfig = getDockConfig();

  const [itemHovered, setItemHovered] = React.useState(-1);

  React.useEffect(() => {
    console.log("itemHovered");
    console.log(itemHovered);
  }, [itemHovered]);

  const handleMouseEnter = (itemIndex) => {
    setItemHovered(itemIndex);
  };

  const handleMouseLeave = (itemIndex) => {
    setItemHovered(-1);
  };

  return (
    <DockWrapper>
      {dockConfig.map((dockItem, index) => {
        const { id, displayName, iconLocation, link, openFileId, openAppId } =
          dockItem;

        const isAppOpen = allApps[openAppId]?.open;
        const isFileOpen = allFiles[openFileId]?.open;

        const onHandleClick = () => {
          const isLink = link && !openFileId && !openAppId;
          const isApp = !link && !openFileId && openAppId;
          const isFile = !link && openFileId && !openAppId;

          if (isLink) {
            window.open(link, "_blank");
          } else if (isApp) {
            if (isAppOpen) {
              dispatch(closeApp(openAppId));
            } else {
              dispatch(openApp(openAppId));
            }
          } else if (isFile) {
            if (isFileOpen) {
              dispatch(closeFile(openFileId));
            } else {
              dispatch(openFile(openFileId));
            }
          } else {
            console.log("No icon action");
          }
        };

        return (
          <DockItem
            dockItemIndex={index}
            key={`dock-item-${id}`}
            displayName={displayName}
            iconLocation={iconLocation}
            isActive={isAppOpen || isFileOpen}
            onHandleClick={onHandleClick}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            itemHovered={itemHovered}
          ></DockItem>
        );
      })}
    </DockWrapper>
  );
}
