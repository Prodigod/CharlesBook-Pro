export type DockItem = {
  id: string;
  displayName: string;
  widget?: any;
  iconLocation: any;
  enabled: boolean;
  link?: string; // Optional for items with links
  openFileId?: string; // Optional for file-related items
  openAppId?: string; // Optional for app-related items
  openFolderId?: string;
};

export const dockConfig: DockItem[] = [
  {
    id: "finder",
    displayName: "Finder",
    link: "https://www.google.com",
    iconLocation: require("../../resources/images/webp/finder.webp"),
    enabled: true,
  },
  {
    id: "photos",
    displayName: "Photos",
    openFolderId: "Photos",
    iconLocation: require("../../resources/images/webp/photos.png"),
    enabled: true,
  },
  {
    id: "calendar",
    displayName: "Calendar",
    link: "https://bidenlaptopmedia.com/index.php?/category/laptop",
    iconLocation: "../../../resources/images/webp/calendar.png",
    enabled: false,
  },
  {
    id: "Safari",
    displayName: "Safari",
    openFileId: "safari",
    iconLocation: require("../../resources/images/webp/safari.png"),
    enabled: true,
  },
  {
      id: "music",
      displayName: "Music",
      openFileId: "music",
      iconLocation: require("../../resources/images/webp/applemusic.png"),
      enabled: true
  },
  {
    id: "discord",
    displayName: "Discord",
    link: "https://discord.gg/kv9j9VBp",
    iconLocation: require("../../resources/images/webp/discord.png"),
    enabled: true,
  },
  {
    id: "twitter",
    displayName: "X.com",
    link: "https://x.com/CDSonADA",
    iconLocation: require("../../resources/images/webp/xcom_icon.png"),
    enabled: true,
  },
  {
    id: "instagram",
    displayName: "Instagram",
    link: "https://www.instagram.com/charleshoskinson.cardano/?hl=en",
    iconLocation: require("../../resources/images/webp/insta.png"),
    enabled: true,
  },
  {
    id: "Games",
    displayName: "Apple Arcade",
    openFolderId: "Games",
    iconLocation: require("../../resources/images/webp/arcade.png"),
    enabled: true,
  },
  {
  id: "chrome",
  displayName: "chrome",
  openFileId: "chrome",
  iconLocation: require("../../resources/images/webp/chrome.png"),
  enabled: true,
  },
];

export const getDockConfig = (): DockItem[] => {
  return dockConfig.filter((item) => item.enabled);
};

