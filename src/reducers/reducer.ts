import initialState from "./initialState";

type ItemActionPayload = keyof (typeof initialState)["items"];

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    //toggle item state instead?
    case "item/OPEN": {
      const updatedState = {
        ...state,
        items: {
          ...state.items,
          [action.payload as ItemActionPayload]: {
            ...state.items[action.payload as ItemActionPayload],
            open: true,
          },
        },
      };
      return updatedState;
    }

    case "item/CLOSE": {
      const updatedState = {
        ...state,
        items: {
          ...state.items,
          [action.payload as ItemActionPayload]: {
            ...state.items[action.payload as ItemActionPayload],
            open: false,
          },
        },
      };
      return updatedState;
    }

    case "item/SELECT":
      const updatedState = {
        ...state,
        itemSelected: action.payload,
        itemSelectedIndex: state.itemSelectedIndex + 1,
      };
      return updatedState;

    case "loading/START":
      const toggledLoading = {
        ...state,
        loading: true,
      };
      return toggledLoading;
    case "section/SELECT":
      const updatedSection = {
        ...state,
        section: action.payload,
      };
      return updatedSection;
    case "section/RESET":
      const checkedSection = {
        ...state,
        section: "none",
      };
      return checkedSection;
    case "dock/SELECT":
      const selectedDockItem = {
        ...state,
        dockItem: action.payload,
      };
      return selectedDockItem;
    case "dock/RESET":
      const resetDockItems = {
        ...state,
        dockItem: undefined,
      };
      return resetDockItems;
    case "settings/CLOSE":
      const closedSettings = {
        ...state,
        settings: {
          ...state.settings,
          open: false,
        },
      };
      return closedSettings;
    case "settings/OPEN":
      const openedSettings = {
        ...state,
        settings: {
          ...state.settings,
          open: true,
        },
      };
      return openedSettings;
    case "settings/SETCOLOR":
      const setColor = {
        ...state,
        settings: {
          ...state.settings,
          color: action.payload,
        },
      };
      return setColor;
    case "settings/AIRDROP":
      const toggledAirdrop = {
        ...state,
        settings: {
          ...state.settings,
          airdrop: !state.settings.airdrop,
        },
      };
      return toggledAirdrop;
    case "settings/ANIMATIONS":
      const toggledAnimations = {
        ...state,
        settings: {
          ...state.settings,
          animations: !state.settings.animations,
        },
      };
      return toggledAnimations;
    case "settings/NOTCH":
      const toggledNotch = {
        ...state,
        settings: {
          ...state.settings,
          notch: !state.settings.notch,
        },
      };
      return toggledNotch;

    case "onTop/SET":
      const changedIndices = {
        ...state,
        onTop: action.payload,
      };
      return changedIndices;
    case "state/LOCALCOLOR":
      const localColor = {
        ...state,
        settings: {
          ...state.settings,
          color: action.payload,
        },
      };
      return localColor;
    case "state/BOOT":
      const afterBoot = {
        ...state,
        booting: action.payload,
      };
      return afterBoot;
    default:
      return state;
  }
};

export default reducer;
