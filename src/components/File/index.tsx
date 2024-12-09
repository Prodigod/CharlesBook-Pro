import { useSelector } from "react-redux";
import FileIcon from "./FileIcon";
import FileContent from "./FileContent";
import { itemOnFocusSelector } from "../../containers/Misc/selectors";

import {
  ITEM_ON_FOCUS_ICON_ZINDEX,
  ITEM_ON_FOCUS_CONTENT_ZINDEX,
  ITEM_NO_FOCUS_ICON_ZINDEX,
  ITEM_NO_FOCUS_CONTENT_ZINDEX,
} from "../../config/consts";

const File = (props: any) => {
  const {
    id,
    displayName,
    open,
    position,
    iconLocation,
    fileLocation,
    isLink,
    goToUrl,
    type,
    //
    fileParent,
    existsInFolder,
    isParentFolder,
  } = props;

  const itemOnFocus = useSelector(itemOnFocusSelector);
  const isItemOnFocus = itemOnFocus == id;

  const iconZIndex = isItemOnFocus
    ? ITEM_ON_FOCUS_ICON_ZINDEX
    : ITEM_NO_FOCUS_ICON_ZINDEX;

  const contentZIndex = isItemOnFocus
    ? ITEM_ON_FOCUS_CONTENT_ZINDEX
    : ITEM_NO_FOCUS_CONTENT_ZINDEX;

  return (
    <>
      {!(!fileParent && existsInFolder) && (
        <FileIcon
          id={id}
          open={open}
          displayName={displayName}
          position={position}
          iconLocation={iconLocation}
          isLink={isLink}
          goToUrl={goToUrl}
          zIndex={iconZIndex}
          existsInFolder={existsInFolder}
          isParentFolder={isParentFolder}
          fileParent={fileParent}
        />
      )}

      {open && !fileParent &&(
        <FileContent
          id={id}
          displayName={displayName}
          type={type}
          iconLocation={iconLocation}
          fileLocation={fileLocation}
          zIndex={contentZIndex}
        />
      )}
    </>
  );
};

export default File;
