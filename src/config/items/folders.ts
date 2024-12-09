import { ItemTypes } from "../../types/items";
import calculateRandomPosition from "../../utils/helpers/calculateRandomPosition";

export const DEFAULT_FOLDER_ICON_LOCATION = "./assets/icons/folder_icon.png";

const foldersItems = {
  Main: {
    id: "Main",
    displayName: "Hi-Rez The Rapper",
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
//  Music: {
//     id: "Music",
//     displayName: "Hi-Rez Music",
//     open: false,
//     type: ItemTypes.folder,
//     iconLocation: DEFAULT_FOLDER_ICON_LOCATION,
//     defaultIconPosition: {x: 5, y: 7},
//     folderChildren: [
//       // "bafTime",
//       // "saggyCheekz",
//       // "fridayNightFit",
//       // "tinderProfilePic",
//       // "keepingFit",
//       // "isLittleGuyOk"
//     ],
//   },
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
  // Games: {
  //   id: "Games",
  //   displayName: "Hi-Rez Games",
  //   open: false,
  //   type: ItemTypes.folder,
  //   iconLocation: DEFAULT_FOLDER_ICON_LOCATION,
  //   defaultIconPosition: {x: 18, y: 7},
  //   folderChildren: [
  //     // "firstDayOfWork",
  //     // "iHateMyJob",
  //     // "newPantszs",
  //     // "gameFace",
  //     // "deepThot",
  //     // "haiImHigh",
  //     // "firstDentistsVisit",
  //     // "pillowTalk",
  //     // "image6"
  //   ],
  // },
  // member: {
  //   id: "member",
  //   displayName: "Member",
  //   open: false,
  //   type: ItemTypes.folder,
  //   iconLocation: DEFAULT_FOLDER_ICON_LOCATION,
  //   defaultIconPosition: calculateRandomPosition(),
  //   folderChildren: ["isLittleGuyOk"],
  // },
  // Cardano: {
  //   id: "Cardano",
  //   displayName: "Cardano Coin",
  //   open: false,
  //   type: ItemTypes.folder,
  //   iconLocation: DEFAULT_FOLDER_ICON_LOCATION,
  //   defaultIconPosition: {x: 31, y: 7},
  //   folderChildren: [
  //     // "needForSpeed",
  //     // "daddy",
  //     // "niceLights",
  //     // "plzSaveMe",
  //     // "swimSuitIdeas",
  //     // "crackShadowPuppet",
  //     // "newVape"
  //   ],
  // },
  // random: {
  //   id: "random",
  //   displayName: "Bizniz",
  //   open: false,
  //   type: ItemTypes.folder,
  //   iconLocation: DEFAULT_FOLDER_ICON_LOCATION,
  //   defaultIconPosition: {x: 28, y: 16},
  //   folderChildren: ["profitszsz", "takeYourKidToWorkDay", "learningIntBiz"],
  // },
};

export default foldersItems;
