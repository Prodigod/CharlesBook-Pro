import { ItemTypes } from "../../types/items";

export const DEFAULT_PDF_ICON_LOCATION = "./assets/icons/pdf_icon.png";

import calculateRandomPosition from "../../utils/helpers/calculateRandomPosition";

const CENTER_ICONS_OFFSET = 120;

 const filesItems = {
 
 //music file
 music: {
  id: "music",
  displayName: "iTunes",
  open: false,
  type: ItemTypes.widget,
  iconLocation: "./hirez.jpg",
  fileLocation: "./hirez.jpg",
  defaultIconPosition: { x: -10, y: -10 },
 },


  //link
  // buyToken: {
  //   id: "buyToken",
  //   displayName: "Buy Token",
  //   open: false,
  //   type: ItemTypes.link,
  //   goToUrl:
  //     "https://jupiter-terminal.dexscreener.com/?inputMint=HLwEJQVzs7SvjXuXpBTRHaLp5S6uWoWTUhLjJxBfy1c7&outputMint=So11111111111111111111111111111111111111112",
  //   defaultIconPosition: {x: 44, y: 44},
  //   iconLocation: "./assets/icons/cardano.png",
  // },

  //sexy squirrel photos
  squirrel1: {
    id: "squirrel1",
      displayName: "squirrel1",
      open: false,
      type: ItemTypes.image,
      iconLocation: "./assets/squirrels/squirrel1.png",
      fileLocation: "./assets/squirrels/squirrel1.png",
      defaultIconPosition: calculateRandomPosition(),
   },
   squirrel2: {
    id: "squirrel2",
      displayName: "squirrel2",
      open: false,
      type: ItemTypes.image,
      iconLocation: "./assets/squirrels/squirrel2.png",
      fileLocation: "./assets/squirrels/squirrel2.png",
      defaultIconPosition: calculateRandomPosition(),
   },
   squirrel3: {
    id: "squirrel3",
      displayName: "squirrel3",
      open: false,
      type: ItemTypes.image,
      iconLocation: "./assets/squirrels/squirrel3.png",
      fileLocation: "./assets/squirrels/squirrel3.png",
      defaultIconPosition: calculateRandomPosition(),
   },
   squirrel4: {
    id: "squirrel4",
      displayName: "squirrel5",
      open: false,
      type: ItemTypes.image,
      iconLocation: "./assets/squirrels/squirrel4.png",
      fileLocation: "./assets/squirrels/squirrel4.png",
      defaultIconPosition: calculateRandomPosition(),
   },
   squirrel5: {
    id: "squirrel5",
      displayName: "squirrel5",
      open: false,
      type: ItemTypes.image,
      iconLocation: "./assets/squirrels/squirrel5.png",
      fileLocation: "./assets/squirrels/squirrel5.png",
      defaultIconPosition: calculateRandomPosition(),
   },
   squirrel6: {
    id: "squirrel6",
      displayName: "squirrel6",
      open: false,
      type: ItemTypes.image,
      iconLocation: "./assets/squirrels/squirrel6.png",
      fileLocation: "./assets/squirrels/squirrel6.png",
      defaultIconPosition: calculateRandomPosition(),
   },
   squirrel7: {
    id: "squirrel7",
      displayName: "squirrel7",
      open: false,
      type: ItemTypes.image,
      iconLocation: "./assets/squirrels/squirrel7.png",
      fileLocation: "./assets/squirrels/squirrel7.png",
      defaultIconPosition: calculateRandomPosition(),
   },
   squirrel8: {
    id: "squirrel8",
      displayName: "squirrel8",
      open: false,
      type: ItemTypes.image,
      iconLocation: "./assets/squirrels/squirrel8.png",
      fileLocation: "./assets/squirrels/squirrel8.png",
      defaultIconPosition: calculateRandomPosition(),
   },
   squirrel9: {
    id: "squirrel9",
      displayName: "squirrel9",
      open: false,
      type: ItemTypes.image,
      iconLocation: "./assets/squirrels/squirrel9.png",
      fileLocation: "./assets/squirrels/squirrel9.png",
      defaultIconPosition: calculateRandomPosition(),
   },
   squirrel10: {
    id: "squirrel10",
      displayName: "squirrel10",
      open: false,
      type: ItemTypes.image,
      iconLocation: "./assets/squirrels/squirrel10.png",
      fileLocation: "./assets/squirrels/squirrel10.png",
      defaultIconPosition: calculateRandomPosition(),
   },
   squirrel11: {
    id: "squirrel11",
      displayName: "squirrel11",
      open: false,
      type: ItemTypes.image,
      iconLocation: "./assets/squirrels/squirrel11.png",
      fileLocation: "./assets/squirrels/squirrel11.png",
      defaultIconPosition: calculateRandomPosition(),
   },
   squirrel12: {
    id: "squirrel12",
      displayName: "squirrel12",
      open: false,
      type: ItemTypes.image,
      iconLocation: "./assets/squirrels/squirrel12.png",
      fileLocation: "./assets/squirrels/squirrel12.png",
      defaultIconPosition: calculateRandomPosition(),
   },
   squirrel13: {
    id: "squirrel13",
      displayName: "squirrel13",
      open: false,
      type: ItemTypes.image,
      iconLocation: "./assets/squirrels/squirrel13.png",
      fileLocation: "./assets/squirrels/squirrel13.png",
      defaultIconPosition: calculateRandomPosition(),
   },
   squirrel14: {
    id: "squirrel14",
      displayName: "squirrel14",
      open: false,
      type: ItemTypes.image,
      iconLocation: "./assets/squirrels/squirrel14.png",
      fileLocation: "./assets/squirrels/squirrel14.png",
      defaultIconPosition: calculateRandomPosition(),
   },

  //vacation photos
  vacation1: {
    id: "vacation1",
      displayName: "Vacation1",
      open: false,
      type: ItemTypes.image,
      iconLocation: "./assets/vacation/vacation1.png",
      fileLocation: "./assets/vacation/vacation1.png",
      defaultIconPosition: calculateRandomPosition(),
   },
   vacation2: {
    id: "vacation2",
      displayName: "Vacation2",
      open: false,
      type: ItemTypes.image,
      iconLocation: "./assets/vacation/vacation2.png",
      fileLocation: "./assets/vacation/vacation2.png",
      defaultIconPosition: calculateRandomPosition(),
   },
   vacation3: {
    id: "vacation3",
      displayName: "Vacation3",
      open: false,
      type: ItemTypes.image,
      iconLocation: "./assets/vacation/vacation3.png",
      fileLocation: "./assets/vacation/vacation3.png",
      defaultIconPosition: calculateRandomPosition(),
   },
   vacation4: {
    id: "vacation4",
      displayName: "Vacation4",
      open: false,
      type: ItemTypes.image,
      iconLocation: "./assets/vacation/vacation4.png",
      fileLocation: "./assets/vacation/vacation4.png",
      defaultIconPosition: calculateRandomPosition(),
   },
  //dailylife photos
  daily1: {
   id: "daily1",
     displayName: "Daily1",
     open: false,
     type: ItemTypes.image,
     iconLocation: "./assets/daily/daily1.jpg",
     fileLocation: "./assets/daily/daily1.jpg",
     defaultIconPosition: calculateRandomPosition(),
  },
  daily2: {
    id: "daily2",
      displayName: "Daily2",
      open: false,
      type: ItemTypes.image,
      iconLocation: "./assets/daily/daily2.jpg",
      fileLocation: "./assets/daily/daily2.jpg",
      defaultIconPosition: calculateRandomPosition(),
   },
   daily3: {
    id: "daily3",
      displayName: "Daily3",
      open: false,
      type: ItemTypes.image,
      iconLocation: "./assets/daily/daily3.jpg",
      fileLocation: "./assets/daily/daily3.jpg",
      defaultIconPosition: calculateRandomPosition(),
   },
   daily4: {
    id: "daily4",
      displayName: "Daily4",
      open: false,
      type: ItemTypes.image,
      iconLocation: "./assets/daily/daily4.jpg",
      fileLocation: "./assets/daily/daily4.jpg",
      defaultIconPosition: calculateRandomPosition(),
   },
   daily5: {
    id: "daily5",
      displayName: "Daily5",
      open: false,
      type: ItemTypes.image,
      iconLocation: "./assets/daily/daily5.jpg",
      fileLocation: "./assets/daily/daily5.jpg",
      defaultIconPosition: calculateRandomPosition(),
   },
   daily6: {
    id: "daily6",
      displayName: "Daily6",
      open: false,
      type: ItemTypes.image,
      iconLocation: "./assets/daily/daily6.jpg",
      fileLocation: "./assets/daily/daily6.jpg",
      defaultIconPosition: calculateRandomPosition(),
   },
   daily7: {
    id: "daily7",
      displayName: "Daily7",
      open: false,
      type: ItemTypes.image,
      iconLocation: "./assets/daily/daily7.jpg",
      fileLocation: "./assets/daily/daily7.jpg",
      defaultIconPosition: calculateRandomPosition(),
   },
   daily8: {
    id: "daily8",
      displayName: "Daily8",
      open: false,
      type: ItemTypes.image,
      iconLocation: "./assets/daily/daily8.jpg",
      fileLocation: "./assets/daily/daily8.jpg",
      defaultIconPosition: calculateRandomPosition(),
   },
   daily9: {
    id: "daily9",
      displayName: "Daily9",
      open: false,
      type: ItemTypes.image,
      iconLocation: "./assets/daily/daily9.jpg",
      fileLocation: "./assets/daily/daily9.jpg",
      defaultIconPosition: calculateRandomPosition(),
   },
   daily10: {
    id: "daily10",
      displayName: "Daily10",
      open: false,
      type: ItemTypes.image,
      iconLocation: "./assets/daily/daily10.jpg",
      fileLocation: "./assets/daily/daily10.jpg",
      defaultIconPosition: calculateRandomPosition(),
   },
   daily11: {
    id: "daily11",
      displayName: "Daily11",
      open: false,
      type: ItemTypes.image,
      iconLocation: "./assets/daily/daily11.jpg",
      fileLocation: "./assets/daily/daily11.jpg",
      defaultIconPosition: calculateRandomPosition(),
   },
   daily12: {
    id: "daily12",
      displayName: "Daily12",
      open: false,
      type: ItemTypes.image,
      iconLocation: "./assets/daily/daily12.jpg",
      fileLocation: "./assets/daily/daily12.jpg",
      defaultIconPosition: calculateRandomPosition(),
   },
   daily13: {
    id: "daily13",
      displayName: "Daily13",
      open: false,
      type: ItemTypes.image,
      iconLocation: "./assets/daily/daily13.jpg",
      fileLocation: "./assets/daily/daily13.jpg",
      defaultIconPosition: calculateRandomPosition(),
   },
   daily14: {
    id: "daily14",
      displayName: "Daily14",
      open: false,
      type: ItemTypes.image,
      iconLocation: "./assets/daily/daily14.png",
      fileLocation: "./assets/daily/daily14.png",
      defaultIconPosition: calculateRandomPosition(),
   },
   daily15: {
    id: "daily15",
      displayName: "Daily15",
      open: false,
      type: ItemTypes.image,
      iconLocation: "./assets/daily/daily15.jpg",
      fileLocation: "./assets/daily/daily15.jpg",
      defaultIconPosition: calculateRandomPosition(),
   },
   daily16: {
    id: "daily16",
      displayName: "Daily16",
      open: false,
      type: ItemTypes.image,
      iconLocation: "./assets/daily/daily16.jpg",
      fileLocation: "./assets/daily/daily16.jpg",
      defaultIconPosition: calculateRandomPosition(),
   },
   daily17: {
    id: "daily17",
      displayName: "Daily17",
      open: false,
      type: ItemTypes.image,
      iconLocation: "./assets/daily/daily17.jpg",
      fileLocation: "./assets/daily/daily17.jpg",
      defaultIconPosition: calculateRandomPosition(),
   },
   
  //VIDEOS
  //Note: PDF files need page count prop
   

};

export default filesItems;
