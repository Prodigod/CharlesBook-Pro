import { ItemTypes } from "../../types/items";

export const DEFAULT_PDF_ICON_LOCATION = "./assets/icons/pdf_icon.png";

import calculateRandomPosition from "../../utils/helpers/calculateRandomPosition";
import calculateMiddleWithOffset from "../../utils/helpers/calculateCentreWithOffset";

const CENTER_ICONS_OFFSET = 120;

const filesItems = {
  daddysFlightLog: {
    id: "daddysFlightLog",
    displayName: "Daddys Flight Log",
    open: false,
    type: ItemTypes.pdf,
    iconLocation: DEFAULT_PDF_ICON_LOCATION,
    fileLocation: "../assets/pdfs/dadsUpcomingFlights.pdf",
    defaultIconPosition: {x: 52, y: 77},
  },
  budgetForTA: {
    id: "budgetForTA",
    displayName: "Budget For TA",
    open: false,
    type: ItemTypes.pdf,
    iconLocation: DEFAULT_PDF_ICON_LOCATION,
    fileLocation: "../assets/pdfs/Budget_For_TA.pdf",
    defaultIconPosition: {x: 29, y: 77},
  },
  howToRigTheUsElection: {
    id: "howToRigTheUsElection",
    displayName: "How to Rig the US election",
    open: false,
    type: ItemTypes.pdf,
    iconLocation: DEFAULT_PDF_ICON_LOCATION,
    fileLocation: "../assets/pdfs/howToRigUsElection.pdf",
    defaultIconPosition: {x: 40, y: 68},
  },
  // transcript: {
  //   id: "transcript",
  //   displayName: "transcript.pdf",
  //   open: false,
  //   type: ItemTypes.pdf,
  //   iconLocation: DEFAULT_PDF_ICON_LOCATION,
  //   fileLocation: "../assets/pdfs/transcript.pdf",
  //   defaultIconPosition: calculateRandomPosition(),
  // },
  //link
  buyToken: {
    id: "buyToken",
    displayName: "Buy Token",
    open: false,
    type: ItemTypes.link,
    goToUrl:
      "https://jupiter-terminal.dexscreener.com/?inputMint=HLwEJQVzs7SvjXuXpBTRHaLp5S6uWoWTUhLjJxBfy1c7&outputMint=So11111111111111111111111111111111111111112",
    defaultIconPosition: {x: 44, y: 44},
    iconLocation: "./assets/icons/solana_icon.png",
  },
  howToBuyLaptop: {
    id: "howToBuyLaptop",
    displayName: "How to buy laptop",
    open: false,
    type: ItemTypes.pdf,
    defaultIconPosition: {x: 44, y: 34},
    pageCount: 2,
    iconLocation: DEFAULT_PDF_ICON_LOCATION,
    fileLocation: "../assets/pdfs/Hunter_Bidens_Laptop_Purchase_Guide.pdf",
  },
  //VIDEOS
  ride2dis: {
    id: "ride2dis",
    displayName: "ride2dis",
    open: false,
    type: ItemTypes.video,
    iconLocation: "./assets/icons/ride2dis_icon.png",
    fileLocation: "./assets/videos/ride2dis.mp4",
    defaultIconPosition: {x: 70, y: 15},
  },

  howtobuy: {
    id: "howtobuy",
    displayName: "HOW TO BUY VIDEO",
    open: false,
    type: ItemTypes.video,
    defaultIconPosition: {x: 44, y: 54},
    iconLocation: "./assets/icons/howtobuy_icon.png",
    fileLocation: "./assets/videos/HOWTOBUYLAPTOP.mp4",
  },

  //IMAGES
  // image1: {
  //   id: "image1",
  //   displayName: "back shawty",
  //   open: false,
  //   type: ItemTypes.image,
  //   iconLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180622_113921_IMG_1228-me.jpg",
  //   fileLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180622_113921_IMG_1228-me.jpg",
  //   defaultIconPosition: calculateRandomPosition(),
  // },

  // image2: {
  //   id: "image2",
  //   displayName: "nip slip",
  //   open: false,
  //   type: ItemTypes.image,
  //   iconLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180622_170309_IMG_1233-me.jpg",
  //   fileLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180622_170309_IMG_1233-me.jpg",
  //   defaultIconPosition: calculateRandomPosition(),
  // },
  // image3: {
  //   id: "image3",
  //   displayName: "dessert",
  //   open: false,
  //   type: ItemTypes.image,
  //   iconLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180622_212246_IMG_1240-me.jpg",
  //   fileLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180622_212246_IMG_1240-me.jpg",
  //   defaultIconPosition: calculateRandomPosition(),
  // },
  // image4: {
  //   id: "image4",
  //   displayName: "first day of work",
  //   open: false,
  //   type: ItemTypes.image,
  //   iconLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180630_062028_IMG_1296-me.jpg",
  //   fileLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180630_062028_IMG_1296-me.jpg",
  //   defaultIconPosition: calculateRandomPosition(),
  // },
  // image5: {
  //   id: "image5",
  //   displayName: "i hate my job",
  //   open: false,
  //   type: ItemTypes.image,
  //   iconLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180702_180623_IMG_1374-me.jpg",
  //   fileLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180702_180623_IMG_1374-me.jpg",
  //   defaultIconPosition: calculateRandomPosition(),
  // },
  image6: {
    id: "image6",
    displayName: "new pantszs",
    open: false,
    type: ItemTypes.image,
    iconLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180702_180826_IMG_1375-me.jpg",
    fileLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180702_180826_IMG_1375-me.jpg",
    defaultIconPosition: calculateRandomPosition(),
  },
  backShawty: {
    id: "backShawty",
    displayName: "back shawty",
    open: false,
    type: ItemTypes.image,
    iconLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180622_113921_IMG_1228-me.jpg",
    fileLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180622_113921_IMG_1228-me.jpg",
    defaultIconPosition: calculateRandomPosition(),
  },
  nipSlip: {
    id: "nipSlip",
    displayName: "nip Slip",
    open: false,
    type: ItemTypes.image,
    iconLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180622_170309_IMG_1233-me.jpg",
    fileLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180622_170309_IMG_1233-me.jpg",
    defaultIconPosition: calculateRandomPosition(),
  },
  dessert: {
    id: "dessert",
    displayName: "dessert",
    open: false,
    type: ItemTypes.image,
    iconLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180622_212246_IMG_1240-me.jpg",
    fileLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180622_212246_IMG_1240-me.jpg",
    defaultIconPosition: calculateRandomPosition(),
  },
  firstDayOfWork: {
    id: "firstDayOfWork",
    displayName: "first day of work",
    open: false,
    type: ItemTypes.image,
    iconLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180630_062028_IMG_1296-me.jpg",
    fileLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180630_062028_IMG_1296-me.jpg",
    defaultIconPosition: calculateRandomPosition(),
  },
  iHateMyJob: {
    id: "iHateMyJob",
    displayName: "fi hate my job",
    open: false,
    type: ItemTypes.image,
    iconLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180702_180623_IMG_1374-me.jpg",
    fileLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180702_180623_IMG_1374-me.jpg",
    defaultIconPosition: calculateRandomPosition(),
  },
  newPantszs: {
    id: "newPantszs",
    displayName: "new pantszs",
    open: false,
    type: ItemTypes.image,
    iconLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180702_180826_IMG_1375-me.jpg",
    fileLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180702_180826_IMG_1375-me.jpg",
    defaultIconPosition: calculateRandomPosition(),
  },
  gameFace: {
    id: "gameFace",
    displayName: "game face",
    open: false,
    type: ItemTypes.image,
    iconLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180702_181250_IMG_1377-me.jpg",
    fileLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180702_181250_IMG_1377-me.jpg",
    defaultIconPosition: calculateRandomPosition(),
  },
  deepThot: {
    id: "deepThot",
    displayName: "deep thot",
    open: false,
    type: ItemTypes.image,
    iconLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180702_181303_IMG_1378-me.jpg",
    fileLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180702_181303_IMG_1378-me.jpg",
    defaultIconPosition: calculateRandomPosition(),
  },
  isLittleGuyOk: {
    id: "isLittleGuyOk",
    displayName: "is little guy ok?",
    open: false,
    type: ItemTypes.image,
    iconLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180723_050429_IMG_1629-me.jpg",
    fileLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180723_050429_IMG_1629-me.jpg",
    defaultIconPosition: calculateRandomPosition(),
  },
  needForSpeed: {
    id: "needForSpeed",
    displayName: "need4speed",
    open: false,
    type: ItemTypes.image,
    iconLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180802_001924_IMG_00212-me.jpg",
    fileLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180802_001924_IMG_00212-me.jpg",
    defaultIconPosition: calculateRandomPosition(),
  },
  bafTime: {
    id: "bafTime",
    displayName: "baf Time",
    open: false,
    type: ItemTypes.image,
    iconLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180827_153925_IMG_00711-xl.jpg",
    fileLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180827_153925_IMG_00711-xl.jpg",
    defaultIconPosition: calculateRandomPosition(),
  },
  saggyCheekz: {
    id: "saggyCheekz",
    displayName: "saggy Cheekz",
    open: false,
    type: ItemTypes.image,
    iconLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180910_053804_IMG_0122-xl.jpg",
    fileLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180910_053804_IMG_0122-xl.jpg",
    defaultIconPosition: calculateRandomPosition(),
  },
  haiImHigh: {
    id: "haiImHigh",
    displayName: "shai im high",
    open: false,
    type: ItemTypes.image,
    iconLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20171130_160758_IMG_0013-xl.jpg",
    fileLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20171130_160758_IMG_0013-xl.jpg",
    defaultIconPosition: calculateRandomPosition(),
  },
  fridayNightFit: {
    id: "fridayNightFit",
    displayName: "friday night fit",
    open: false,
    type: ItemTypes.image,
    iconLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180930_024805_IMG_0116-xl.jpg",
    fileLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180930_024805_IMG_0116-xl.jpg",
    defaultIconPosition: calculateRandomPosition(),
  },
  daddy: {
    id: "daddy",
    displayName: "daddy",
    open: false,
    type: ItemTypes.image,
    iconLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20170724_150731_WRd_Flatiron072417Biden073-xl.jpg",
    fileLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20170724_150731_WRd_Flatiron072417Biden073-xl.jpg",
    defaultIconPosition: calculateRandomPosition(),
  },
  firstDentistsVisit: {
    id: "firstDentistsVisit",
    displayName: "first dentists visit",
    open: false,
    type: ItemTypes.image,
    iconLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20171130_183241_IMG_0017-xl.jpg",
    fileLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20171130_183241_IMG_0017-xl.jpg",
    defaultIconPosition: calculateRandomPosition(),
  },
  xxx: {
    id: "xxx",
    displayName: "xxx",
    open: false,
    type: ItemTypes.image,
    iconLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074911_ScreenShot2020-10-23at8.45.52AM-me.png",
    fileLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074911_ScreenShot2020-10-23at8.45.52AM-me.png",
    defaultIconPosition: calculateRandomPosition(),
  },
  tinderProfilePic: {
    id: "tinderProfilePic",
    displayName: "tinder profile pic",
    open: false,
    type: ItemTypes.image,
    iconLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074911_ScreenShot2020-10-23at8.30.54AM-xl.png",
    fileLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074911_ScreenShot2020-10-23at8.30.54AM-xl.png",
    defaultIconPosition: calculateRandomPosition(),
  },
  castingCouch: {
    id: "castingCouch",
    displayName: "casting couch",
    open: false,
    type: ItemTypes.image,
    iconLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074911_ScreenShot2020-10-23at8.30.14AM-xl.png",
    fileLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074911_ScreenShot2020-10-23at8.30.14AM-xl.png",
    defaultIconPosition: calculateRandomPosition(),
  },
  iLikeTv: {
    id: "iLikeTv",
    displayName: "i like tv",
    open: false,
    type: ItemTypes.image,
    iconLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074912_ScreenShot2020-10-23at8.22.01AM-xl.png",
    fileLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074912_ScreenShot2020-10-23at8.22.01AM-xl.png",
    defaultIconPosition: calculateRandomPosition(),
  },
  sloppyToppy: {
    id: "sloppyToppy",
    displayName: "sloppy toppy",
    open: false,
    type: ItemTypes.image,
    iconLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074912_ScreenShot2020-10-23at8.59.48AM-xl.png",
    fileLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074912_ScreenShot2020-10-23at8.59.48AM-xl.png",
    defaultIconPosition: calculateRandomPosition(),
  },
  niceLights: {
    id: "niceLights",
    displayName: "nice lights",
    open: false,
    type: ItemTypes.image,
    iconLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074913_ScreenShot2019-01-17at12.17.27AM-xl.png",
    fileLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074913_ScreenShot2019-01-17at12.17.27AM-xl.png",
    defaultIconPosition: calculateRandomPosition(),
  },
  plzSaveMe: {
    id: "plzSaveMe",
    displayName: "plz save me",
    open: false,
    type: ItemTypes.image,
    iconLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074916_3B8E8979-D1E7-4660-A461-5121FCBDC659-xl.jpg",
    fileLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074916_3B8E8979-D1E7-4660-A461-5121FCBDC659-xl.jpg",
    defaultIconPosition: calculateRandomPosition(),
  },
  profitszsz: {
    id: "profitszsz",
    displayName: "profitszsz",
    open: false,
    type: ItemTypes.image,
    iconLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074916_image015-xl.jpg",
    fileLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074916_image015-xl.jpg",
    defaultIconPosition: calculateRandomPosition(),
  },
  swimSuitIdeas: {
    id: "swimSuitIdeas",
    displayName: "swim suit ideas",
    open: false,
    type: ItemTypes.image,
    iconLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074917_image002-xl.jpg",
    fileLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074917_image002-xl.jpg",
    defaultIconPosition: calculateRandomPosition(),
  },
  bootydo: {
    id: "bootydo",
    displayName: "bootydo",
    open: false,
    type: ItemTypes.image,
    iconLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074919_IMG_0088-xl.jpg",
    fileLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074919_IMG_0088-xl.jpg",
    defaultIconPosition: calculateRandomPosition(),
  },
  takeYourKidToWorkDay: {
    id: "takeYourKidToWorkDay",
    displayName: "take your kid to work day",
    open: false,
    type: ItemTypes.image,
    iconLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074923_4E4FACEB-2C78-4CF0-8D3C-B817D416012D-xl.jpg",
    fileLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074923_4E4FACEB-2C78-4CF0-8D3C-B817D416012D-xl.jpg",
    defaultIconPosition: calculateRandomPosition(),
  },
  learningIntBiz: {
    id: "learningIntBiz",
    displayName: "learning int'l biz",
    open: false,
    type: ItemTypes.image,
    iconLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074934_IMG_4117-xl.jpg",
    fileLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074934_IMG_4117-xl.jpg",
    defaultIconPosition: calculateRandomPosition(),
  },
  ohNo: {
    id: "ohNo",
    displayName: "oh no",
    open: false,
    type: ItemTypes.image,
    iconLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074945_15F9F05D-CE61-4445-8E00-FACE911CC201-me.jpg",
    fileLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074945_15F9F05D-CE61-4445-8E00-FACE911CC201-me.jpg",
    defaultIconPosition: calculateRandomPosition(),
  },
  crackShadowPuppet: {
    id: "crackShadowPuppet",
    displayName: "crack shadow puppet",
    open: false,
    type: ItemTypes.image,
    iconLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074904_04B73E36-07B5-46F2-84FB-93E5E6AC72E8-xl.jpg",
    fileLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074904_04B73E36-07B5-46F2-84FB-93E5E6AC72E8-xl.jpg",
    defaultIconPosition: calculateRandomPosition(),
  },
  newVape: {
    id: "newVape",
    displayName: "new vape",
    open: false,
    type: ItemTypes.image,
    iconLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/iPhone_Backup/Photos/20190130_184044_IMG_0948-xl.jpg",
    fileLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/iPhone_Backup/Photos/20190130_184044_IMG_0948-xl.jpg",
    defaultIconPosition: calculateRandomPosition(),
  },
  pillowTalk: {
    id: "pillowTalk",
    displayName: "pillow talk",
    open: false,
    type: ItemTypes.image,
    iconLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/iPhone_Backup/Live_Photos/20181106_040549_IMG_0252-xl.jpg",
    fileLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/iPhone_Backup/Live_Photos/20181106_040549_IMG_0252-xl.jpg",
    defaultIconPosition: calculateRandomPosition(),
  },
  preciousMemories: {
    id: "preciousMemories",
    displayName: "precious memories",
    open: false,
    type: ItemTypes.image,
    iconLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_075121_IMG_10811-xl.jpg",
    fileLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_075121_IMG_10811-xl.jpg",
    defaultIconPosition: calculateRandomPosition(),
  },
  keepingFit: {
    id: "keepingFit",
    displayName: "keeping fit",
    open: false,
    type: ItemTypes.image,
    iconLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_075004_7E5CA2E3-3BEA-41FC-935E-9990812988E7-xl.jpg",
    fileLocation:
      "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_075004_7E5CA2E3-3BEA-41FC-935E-9990812988E7-xl.jpg",
    defaultIconPosition: calculateRandomPosition(),
  },
// image7: {
//   id: "image7",
//   displayName: "game face",
//   open: false,
//   type: ItemTypes.image,
//   iconLocation:
//     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180702_181250_IMG_1377-me.jpg",
//   fileLocation:
//     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180702_181250_IMG_1377-me.jpg",
//   defaultIconPosition: calculateRandomPosition(),
// },
// image8: {
//   id: "image8",
//   displayName: "deep thot",
//   open: false,
//   type: ItemTypes.image,
//   iconLocation:
//     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180702_181303_IMG_1378-me.jpg",
//   fileLocation:
//     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180702_181303_IMG_1378-me.jpg",
//   defaultIconPosition: calculateRandomPosition(),
// },

  // image9: {
  //   id: "image9",
  //   displayName: "is little guy ok?",
  //   open: false,
  //   type: ItemTypes.image,
  //   iconLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180723_050429_IMG_1629-me.jpg",
  //   fileLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180723_050429_IMG_1629-me.jpg",
  //   defaultIconPosition: calculateRandomPosition(),
  // },
  // // image10: {
  // //   id: "image10",
  // //   displayName: "image10",
  // //   open: false,
  // //   type: ItemTypes.image,
  // //   defaultIconPosition: { x: 300, y: 200 },
  // //   iconLocation: "",
  // //   fileLocation:
  // //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074903_ScreenShot2019-02-18at1.01.46AM-xl.png",
  // // },
  // image11: {
  //   id: "image11",
  //   displayName: "need4speed",
  //   open: false,
  //   type: ItemTypes.image,
  //   iconLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180802_001924_IMG_00212-me.jpg",
  //   fileLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180802_001924_IMG_00212-me.jpg",
  //   defaultIconPosition: calculateRandomPosition(),
  // },
  // image12: {
  //   id: "image12",
  //   displayName: "baf time",
  //   open: false,
  //   type: ItemTypes.image,
  //   iconLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180827_153925_IMG_00711-xl.jpg",
  //   fileLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180827_153925_IMG_00711-xl.jpg",
  //   defaultIconPosition: calculateRandomPosition(),
  // },
  // image13: {
  //   id: "image13",
  //   displayName: "saggy cheekz",
  //   open: false,
  //   type: ItemTypes.image,
  //   iconLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180910_053804_IMG_0122-xl.jpg",
  //   fileLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180910_053804_IMG_0122-xl.jpg",
  //   defaultIconPosition: calculateRandomPosition(),
  // },

  // image14: {
  //   id: "image14",
  //   displayName: "hai im high",
  //   open: false,
  //   type: ItemTypes.image,
  //   iconLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20171130_160758_IMG_0013-xl.jpg",
  //   fileLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20171130_160758_IMG_0013-xl.jpg",
  //   defaultIconPosition: calculateRandomPosition(),
  // },

  // image15: {
  //   id: "image15",
  //   displayName: "friday night fit",
  //   open: false,
  //   type: ItemTypes.image,
  //   iconLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180930_024805_IMG_0116-xl.jpg",
  //   fileLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20180930_024805_IMG_0116-xl.jpg",
  //   defaultIconPosition: calculateRandomPosition(),
  // },

  // image16: {
  //   id: "image16",
  //   displayName: "daddy",
  //   open: false,
  //   type: ItemTypes.image,
  //   iconLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20170724_150731_WRd_Flatiron072417Biden073-xl.jpg",
  //   fileLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20170724_150731_WRd_Flatiron072417Biden073-xl.jpg",
  //   defaultIconPosition: calculateRandomPosition(),
  // },

  // image17: {
  //   id: "image17",
  //   displayName: "first dentists visit",
  //   open: false,
  //   type: ItemTypes.image,
  //   iconLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20171130_183241_IMG_0017-xl.jpg",
  //   fileLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20171130_183241_IMG_0017-xl.jpg",
  //   defaultIconPosition: calculateRandomPosition(),
  // },
  // image18: {
  //   id: "image18",
  //   displayName: "xxx",
  //   open: false,
  //   type: ItemTypes.image,
  //   iconLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074911_ScreenShot2020-10-23at8.45.52AM-me.png",
  //   fileLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074911_ScreenShot2020-10-23at8.45.52AM-me.png",
  //   defaultIconPosition: calculateRandomPosition(),
  // },
  // image19: {
  //   id: "image19",
  //   displayName: "tinder profile pic",
  //   open: false,
  //   type: ItemTypes.image,
  //   iconLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074911_ScreenShot2020-10-23at8.30.54AM-xl.png",
  //   fileLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074911_ScreenShot2020-10-23at8.30.54AM-xl.png",

  //   defaultIconPosition: calculateRandomPosition(),
  // },
  // image20: {
  //   id: "image20",
  //   displayName: "casting couch",
  //   open: false,
  //   type: ItemTypes.image,
  //   iconLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074911_ScreenShot2020-10-23at8.30.14AM-xl.png",
  //   fileLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074911_ScreenShot2020-10-23at8.30.14AM-xl.png",
  //   defaultIconPosition: calculateRandomPosition(),
  // },
  // image21: {
  //   id: "image21",
  //   displayName: "i like tv",
  //   open: false,
  //   type: ItemTypes.image,
  //   iconLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074912_ScreenShot2020-10-23at8.22.01AM-xl.png",
  //   fileLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074912_ScreenShot2020-10-23at8.22.01AM-xl.png",
  //   defaultIconPosition: calculateRandomPosition(),
  // },
  // image22: {
  //   id: "image22",
  //   displayName: "sloppy toppy",
  //   open: false,
  //   type: ItemTypes.image,
  //   iconLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074912_ScreenShot2020-10-23at8.59.48AM-xl.png",
  //   fileLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074912_ScreenShot2020-10-23at8.59.48AM-xl.png",
  //   defaultIconPosition: calculateRandomPosition(),
  // },
  // image23: {
  //   id: "image23",
  //   displayName: "nice lights",
  //   open: false,
  //   type: ItemTypes.image,
  //   iconLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074913_ScreenShot2019-01-17at12.17.27AM-xl.png",
  //   fileLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074913_ScreenShot2019-01-17at12.17.27AM-xl.png",
  //   defaultIconPosition: calculateRandomPosition(),
  // },
  // image24: {
  //   id: "image24",
  //   displayName: "plz save me",
  //   open: false,
  //   type: ItemTypes.image,
  //   iconLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074916_3B8E8979-D1E7-4660-A461-5121FCBDC659-xl.jpg",
  //   fileLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074916_3B8E8979-D1E7-4660-A461-5121FCBDC659-xl.jpg",
  //   defaultIconPosition: calculateRandomPosition(),
  // },
  // image25: {
  //   id: "image25",
  //   displayName: "profitszsz",
  //   open: false,
  //   type: ItemTypes.image,
  //   iconLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074916_image015-xl.jpg",
  //   fileLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074916_image015-xl.jpg",
  //   defaultIconPosition: calculateRandomPosition(),
  // },
  // image26: {
  //   id: "image26",
  //   displayName: "swim suit ideas",
  //   open: false,
  //   type: ItemTypes.image,
  //   iconLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074917_image002-xl.jpg",
  //   fileLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074917_image002-xl.jpg",
  //   defaultIconPosition: calculateRandomPosition(),
  // },
  // image27: {
  //   id: "image27",
  //   displayName: "bootydo",
  //   open: false,
  //   type: ItemTypes.image,
  //   iconLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074919_IMG_0088-xl.jpg",
  //   fileLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074919_IMG_0088-xl.jpg",
  //   defaultIconPosition: calculateRandomPosition(),
  // },
  // image28: {
  //   id: "image28",
  //   displayName: "take your kid to work day",
  //   open: false,
  //   type: ItemTypes.image,
  //   iconLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074923_4E4FACEB-2C78-4CF0-8D3C-B817D416012D-xl.jpg",
  //   fileLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074923_4E4FACEB-2C78-4CF0-8D3C-B817D416012D-xl.jpg",
  //   defaultIconPosition: calculateRandomPosition(),
  // },
  // image29: {
  //   id: "image29",
  //   displayName: "learning int'l biz",
  //   open: false,
  //   type: ItemTypes.image,
  //   iconLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074934_IMG_4117-xl.jpg",
  //   fileLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074934_IMG_4117-xl.jpg",
  //   defaultIconPosition: calculateRandomPosition(),
  // },
  // image30: {
  //   id: "image30",
  //   displayName: "oh no",
  //   open: false,
  //   type: ItemTypes.image,
  //   iconLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074945_15F9F05D-CE61-4445-8E00-FACE911CC201-me.jpg",
  //   fileLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074945_15F9F05D-CE61-4445-8E00-FACE911CC201-me.jpg",
  //   defaultIconPosition: calculateRandomPosition(),
  // },
  // image31: {
  //   id: "image31",
  //   displayName: "crack shadow puppet",
  //   open: false,
  //   type: ItemTypes.image,
  //   iconLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074904_04B73E36-07B5-46F2-84FB-93E5E6AC72E8-xl.jpg",
  //   fileLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074904_04B73E36-07B5-46F2-84FB-93E5E6AC72E8-xl.jpg",
  //   defaultIconPosition: calculateRandomPosition(),
  // },
  // image32: {
  //   id: "image32",
  //   displayName: "new vape",
  //   open: false,
  //   type: ItemTypes.image,
  //   iconLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/iPhone_Backup/Photos/20190130_184044_IMG_0948-xl.jpg",
  //   fileLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/iPhone_Backup/Photos/20190130_184044_IMG_0948-xl.jpg",
  //   defaultIconPosition: calculateRandomPosition(),
  // },
  // image33: {
  //   id: "image33",
  //   displayName: "pillow talk",
  //   open: false,
  //   type: ItemTypes.image,
  //   iconLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/iPhone_Backup/Live_Photos/20181106_040549_IMG_0252-xl.jpg",
  //   fileLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/iPhone_Backup/Live_Photos/20181106_040549_IMG_0252-xl.jpg",
  //   defaultIconPosition: calculateRandomPosition(),
  // },
  // image34: {
  //   id: "image34",
  //   displayName: "precious memories",
  //   open: false,
  //   type: ItemTypes.image,
  //   iconLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_075121_IMG_10811-xl.jpg",
  //   fileLocation:
  //     "https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_075121_IMG_10811-xl.jpg",
  //   defaultIconPosition: calculateRandomPosition(),
  // },
};

export default filesItems;
