import { ItemTypes } from "../../../../types/items";

import FileContentImage from "./FileContentImage";
import FileContentPdf from "./FileContentPdf";
import FileContentVideo from "./FileContentVideo";

const FileContentInner = ({
  type,
  iconLocation,
  fileLocation,
  //   pageCount,
  //   children,
}) => {
  switch (type) {
    case ItemTypes.pdf:
      return <FileContentPdf fileLocation={fileLocation} />;
    case ItemTypes.video:
      return <FileContentVideo fileLocation={fileLocation}></FileContentVideo>;
    case ItemTypes.image:
      return <FileContentImage iconLocation={iconLocation}></FileContentImage>;
    default:
      return null;
  }
};

export default FileContentInner;
