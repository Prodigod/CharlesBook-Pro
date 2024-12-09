import { useSelector } from "react-redux";

import ItemContent from "./ItemContent";
import ItemIcon from "./ItemIcon";

import { allFilesSelector } from "../../containers/Files/selectors";
import { ItemTypes } from "../../types/items";

const Item = (props: any) => {
  const {
    id,
    displayName,
    defaultIconPosition,
    type,
    iconLocation,
    goToUrl,
    fileLocation,
    pageCount,
    noIcon,
    isThisAppOpened
  } = props;

  const allFiles = useSelector(allFilesSelector);

  const isThisItemOpened = allFiles[id]?.open;

  return (
    <>
      {!noIcon && (
        <ItemIcon
          displayName={displayName}
          id={id}
          type={type}
          defaultIconPosition={defaultIconPosition}
          iconLocation={iconLocation}
          goToUrl={goToUrl}
          pageCount={pageCount}
        />
      )}
      {isThisItemOpened || isThisAppOpened && <ItemContent {...props} />}
    </>
  );
};

export default Item;
