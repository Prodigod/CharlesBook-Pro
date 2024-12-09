import { useSelector } from "react-redux";

import FolderIcon from "./FolderIcon";
import FolderContent from "./FolderContent";
import { itemOnFocusSelector } from "../../containers/Misc/selectors";

import {
  ITEM_ON_FOCUS_ICON_ZINDEX,
  ITEM_ON_FOCUS_CONTENT_ZINDEX,
  ITEM_NO_FOCUS_ICON_ZINDEX,
  ITEM_NO_FOCUS_CONTENT_ZINDEX,
} from "../../config/consts";

const Folder = (props: any) => {
  const { id, displayName, open, position, iconLocation, folderChildren } =
    props;

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
      <FolderIcon
        id={id}
        displayName={displayName}
        position={position}
        iconLocation={iconLocation}
        zIndex={iconZIndex}
      />

      {open && (
        <FolderContent
          id={id}
          displayName={displayName}
          folderChildren={folderChildren}
          zIndex={contentZIndex}
        />
      )}
    </>
  );
};

export default Folder;
