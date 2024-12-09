const initialState = {
  loading: false,
  section: "none",
  dockItem: undefined,
  onTop: undefined,
  settings: {
    open: false,
    airdrop: {},
    animations: {},
    notch: {},
    color: "red",
  },
  items: {
    exPhotos: {
      name: "Ex´s photos",
      open: false,
    },
    memes: {
      name: "memes",
      open: false,
    },
    testPdf: {
      name: "testPdf",
      open: false,
    },
  },
  itemSelected: undefined,
  itemSelectedIndex:0
};

export default initialState;
