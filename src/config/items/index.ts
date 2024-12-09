export const DEFAULT_FOLDER_ICON_LOCATION = "./assets/icons/folder_icon.png";
export const DEFAULT_PDF_ICON_LOCATION = "./assets/icons/pdf_icon.png";

import filesItems from "./files";
import appsItems from "./apps";
import foldersItems from "./folders";

export const ITEMS_CONFIG = {
  ...filesItems,
  ...appsItems,
  ...foldersItems,
};
