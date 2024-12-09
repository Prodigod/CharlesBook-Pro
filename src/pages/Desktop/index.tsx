import "./styles.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ChromeBar from "../../components/ChromeBar";
import Dock from "../../components/Dock";
import { ITEMS_CONFIG } from "../../config/items";
import Item from "../../components/Item";
import { ItemTypes } from "../../types/items";

import useWindowSize from "../../utils/helpers/hooks/useWindowDimensions";
import MacOSWarningDialog from "../../components/WarningDialog";
import Chat from "../../components/Chat";

//folders
import Folder from "../../components/Folder";
import { allFoldersSelector } from "../../containers/Folders/selectors";

//files
import File from "../../components/File";
import { allFilesSelector } from "../../containers/Files/selectors";

//apps
import { allAppsSelector } from "../../containers/Apps/selectors";

function DesktopPage() {
  const windowSize = useWindowSize();

  const allFolders = useSelector(allFoldersSelector);
  const allFiles = useSelector(allFilesSelector);
  const allApps = useSelector(allAppsSelector);

  const [isChromeBarExpanded, setIsChromeBarExpanded] = React.useState(false);

  return (
    <div className="page" id="page">
      <ChromeBar
        isChromeBarExpanded={isChromeBarExpanded}
        setIsChromeBarExpanded={setIsChromeBarExpanded}
      />

      {windowSize.width < 549 && !isChromeBarExpanded && (
        <MacOSWarningDialog message="This site is optimized for desktop use. For the best experience, please access it through a desktop device." />
      )}

      {Object.values(allFolders)?.map((folder: any) => {
        const {
          id,
          displayName,
          open,
          defaultIconPosition,
          iconLocation,
          folderChildren,
        } = folder;

        return (
          <Folder
            key={`folder-${id}`}
            id={id}
            displayName={displayName}
            open={open}
            position={defaultIconPosition}
            iconLocation={iconLocation}
            folderChildren={folderChildren}
          ></Folder>
        );
      })}

      {Object.values(allFiles)?.map((file: any) => {
        const {
          id,
          displayName,
          open,
          defaultIconPosition,
          iconLocation,
          fileLocation,
          type,
          goToUrl,
        } = file;

        const isLink = type === ItemTypes.link && goToUrl;

        const allFilesInFolders = [];

        const combinedFolderChildren = Object.values(allFolders).flatMap(
          (folder: any) => folder?.folderChildren
        );

        combinedFolderChildren.forEach((element) => {
          if (element && !allFilesInFolders.includes(element)) {
            allFilesInFolders.push(element);
          }
        });

        // const fileParent: any = Object.values(allFolders).filter(
        //   (folder: any) => {
        //     return folder?.folderChildren?.includes(id);
        //   }
        // );

        return (
          <File
            key={`file-${id}`}
            id={id}
            displayName={displayName}
            open={open}
            position={defaultIconPosition}
            iconLocation={iconLocation}
            isLink={isLink}
            goToUrl={goToUrl}
            type={type}
            fileLocation={fileLocation}
            //
            fileParent={null}
            existsInFolder={allFilesInFolders.includes(id)}
            isParentFolder={false}
          ></File>
        );
      })}

      {allApps["whatsapp"]?.open && <Chat />}

      <Dock allApps={allApps} allFiles={allFiles} />
    </div>
  );
}

export default DesktopPage;
