import { ItemTypes } from "../../types/items";
import calculateRandomPosition from "../../utils/helpers/calculateRandomPosition";

export const DEFAULT_FOLDER_ICON_LOCATION = "./assets/icons/folder_icon.png";

const foldersItems = {
  exPhotos: {
    id: "exPhotos",
    displayName: "Ex´s photos",
    open: false,
    type: ItemTypes.folder,
    iconLocation: DEFAULT_FOLDER_ICON_LOCATION,
    defaultIconPosition: {x: 11, y: 16},
    folderChildren: [
      "xxx",
      "castingCouch",
      "iLikeTv",
      "backShawty",
      "nipSlip",
      "property",
      "sloppyToppy",
      "bootydo",
      "ohNo",
      "preciousMemories",
      "dessert"
    ],
  },
  // memes: {
  //   id: "memes",
  //   displayName: "memes",
  //   open: false,
  //   type: ItemTypes.folder,
  //   iconLocation: DEFAULT_FOLDER_ICON_LOCATION,
  //   defaultIconPosition: calculateRandomPosition(),
  //   folderChildren: ["image5"],
  // },
  myNudes: {
    id: "myNudes",
    displayName: "My Nudes",
    open: false,
    type: ItemTypes.folder,
    iconLocation: DEFAULT_FOLDER_ICON_LOCATION,
    defaultIconPosition: {x: 5, y: 7},
    folderChildren: [
      "bafTime",
      "saggyCheekz",
      "fridayNightFit",
      "tinderProfilePic",
      "keepingFit",
      "isLittleGuyOk"
    ],
  },
  // picsOfEverybodyFavoriteMember: {
  //   id: "picsOfEverybodyFavoriteMember",
  //   displayName: "Pictures of everybody’s favorite member",
  //   open: false,
  //   type: ItemTypes.folder,
  //   iconLocation: DEFAULT_FOLDER_ICON_LOCATION,
  //   defaultIconPosition: calculateRandomPosition(),
  //   folderChildren: ["image6"],
  // },
  // totallySuperSecretFiles: {
  //   id: "totallySuperSecretFiles",
  //   displayName: "Totally Super secret Files",
  //   open: false,
  //   type: ItemTypes.folder,
  //   iconLocation: DEFAULT_FOLDER_ICON_LOCATION,
  //   defaultIconPosition: calculateRandomPosition(),
  //   folderChildren: ["howToRigTheUsElection", "daddysFlightLog", "budgetForTA"],
  // },
  selfiez: {
    id: "selfiez",
    displayName: "Selfiez",
    open: false,
    type: ItemTypes.folder,
    iconLocation: DEFAULT_FOLDER_ICON_LOCATION,
    defaultIconPosition: {x: 18, y: 7},
    folderChildren: [
      "firstDayOfWork",
      "iHateMyJob",
      "newPantszs",
      "gameFace",
      "deepThot",
      "haiImHigh",
      "firstDentistsVisit",
      "pillowTalk",
      "image6"
    ],
  },
  // member: {
  //   id: "member",
  //   displayName: "Member",
  //   open: false,
  //   type: ItemTypes.folder,
  //   iconLocation: DEFAULT_FOLDER_ICON_LOCATION,
  //   defaultIconPosition: calculateRandomPosition(),
  //   folderChildren: ["isLittleGuyOk"],
  // },
  random: {
    id: "random",
    displayName: "random",
    open: false,
    type: ItemTypes.folder,
    iconLocation: DEFAULT_FOLDER_ICON_LOCATION,
    defaultIconPosition: {x: 31, y: 7},
    folderChildren: [
      "needForSpeed",
      "daddy",
      "niceLights",
      "plzSaveMe",
      "swimSuitIdeas",
      "crackShadowPuppet",
      "newVape"
    ],
  },
  bizniz: {
    id: "bizniz",
    displayName: "Bizniz",
    open: false,
    type: ItemTypes.folder,
    iconLocation: DEFAULT_FOLDER_ICON_LOCATION,
    defaultIconPosition: {x: 28, y: 16},
    folderChildren: ["profitszsz", "takeYourKidToWorkDay", "learningIntBiz"],
  },
};

export default foldersItems;
