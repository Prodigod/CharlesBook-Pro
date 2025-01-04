import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { openApp, closeApp } from "../../containers/Apps/slice";
import { openFile, closeFile } from "../../containers/Files/slice";
import { openFolder, closeFolder} from "../../containers/Folders/slice";
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
  const [widgetContent, setWidgetContent] = React.useState(null);

  React.useEffect(() => {
    console.log("itemHovered:", itemHovered);
  }, [itemHovered]);

  const handleMouseEnter = (itemIndex) => {
    setItemHovered(itemIndex);
  };

  const handleMouseLeave = () => {
    setItemHovered(-1);
  };

  const closeWidget = () => {
    setWidgetContent(null);
  };

  return (
    <>
      <DockWrapper>
        {dockConfig.map((dockItem, index) => {
          const { id, displayName, iconLocation, link, openFileId, openAppId, widget, openFolderId } =
            dockItem;

          const isAppOpen = allApps[openAppId]?.open;
          const isFileOpen = allFiles[openFileId]?.open;
          const isFolderOpen = allFiles[openFolderId]?.open;

          const onHandleClick = () => {
            const isLink = link && !openFileId && !openFolderId && !openAppId && !widget;
            const isApp = !link && !openFileId && !openFolderId && openAppId;
            const isFile = openFileId !== undefined && !link && !openAppId && !widget;
            const isFolder = openFolderId !== undefined && !link && !openAppId && !widget;
            const isWidget = widget;

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
             } else if (isFolder) {
                if (isFolderOpen) {
                  dispatch(closeFolder(openFolderId));
                } else {
                  dispatch(openFolder(openFolderId));
                }
            } else if (isWidget) {
              setWidgetContent(widget); // Display the widget
            } else {
              console.log("No icon action");
            }
          };

          return (
            <DockItem
            dockItemIndex={index}
            dockKey={`dock-item-${id}`} // Pass the key explicitly
            key={`dock-item-${id}`}
            displayName={displayName}
            iconLocation={iconLocation}
            isActive={isAppOpen || isFileOpen}
            onHandleClick={onHandleClick}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            itemHovered={itemHovered}
            widget={widget} // Pass the widget prop
          />

          );
        })}
      </DockWrapper>
      {widgetContent && (
        <div
          style={{
            position: "fixed",
            top: "10%",
            left: "10%",
            width: "80%",
            height: "80%",
            backgroundColor: "white",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
            zIndex: 5000,
            borderRadius: "10px",
            padding: "20px",
            overflow: "hidden",
          }}
        >
          <button
            onClick={closeWidget}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              background: "red",
              color: "white",
              border: "none",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
              cursor: "pointer",
            }}
          >
            ×
          </button>
          <div dangerouslySetInnerHTML={{ __html: widgetContent }} />
        </div>
      )}
    </>
  );
}
