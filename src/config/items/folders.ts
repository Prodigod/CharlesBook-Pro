import { ItemTypes } from "../../types/items";
import calculateRandomPosition from "../../utils/helpers/calculateRandomPosition";

export const DEFAULT_FOLDER_ICON_LOCATION = "./assets/icons/folder_icon.png";

const foldersItems = {
  Main: {
    id: "Main",
    displayName: "def not sexy squirrels",
    open: false,
    type: ItemTypes.folder,
    iconLocation: DEFAULT_FOLDER_ICON_LOCATION,
    defaultIconPosition: {x: 11, y: 16},
    folderChildren: [
      "squirrel1",
      "squirrel2",
      "squirrel3",
      "squirrel4",
      "squirrel5",
      "squirrel6",
      "squirrel7",
      "squirrel8",
      "squirrel9",
      "squirrel10",
      "squirrel11",
      "squirrel12",
      "squirrel13",
      "squirrel14"
    ],
  },
  vacation: {
    id: "vacation",
    displayName: "My vacation photos",
    open: false,
    type: ItemTypes.folder,
    iconLocation: DEFAULT_FOLDER_ICON_LOCATION,
    defaultIconPosition: calculateRandomPosition(),
    folderChildren: 
    ["vacation1",
      "vacation2",
      "vacation3",
      "vacation4",
    ],
  },
  dailylife: {
    id: "dailylife",
    displayName: "My Daily Life",
    open: false,
    type: ItemTypes.folder,
    iconLocation: DEFAULT_FOLDER_ICON_LOCATION,
    defaultIconPosition: {x: 5, y: 7},
    folderChildren: [
      "daily1",
      "daily2",
      "daily3",
      "daily4",
      "daily5",
      "daily6",
      "daily7",
      "daily8",
      "daily9",
      "daily10",
      "daily11",
      "daily12",
      "daily13",
      "daily14",
      "daily15",
      "daily16",
      "daily17"
    ],
  },
 
};

export default foldersItems;
