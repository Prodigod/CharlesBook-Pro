export type DockItem = {
  id: string;
  displayName: string;
  iconLocation: any;
  enabled: boolean;
  link?: string; // Optional for items with links
  openFileId?: string; // Optional for file-related items
  openAppId?: string; // Optional for app-related items
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
    link: "https://google.com/images",
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
    id: "buy",
    displayName: "Buy",
    link: "https://www.snek.fun",
    iconLocation: require("../../resources/images/webp/safari.png"),
    enabled: true,
  },
  {
    id: "music",
    displayName: "Music",
    //openFileId: "ride2dis",
    link: "https://www.google.com/",
    iconLocation: require("../../resources/images/webp/applemusic.png"),
    enabled: true,
  },
  {
    id: "discord",
    displayName: "Discord",
    link: "https://discord.gg/33P7apjW",
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
    link: "https://www.instagram.com/hireztherapper/?hl=en",
    iconLocation: require("../../resources/images/webp/insta.png"),
    enabled: true,
  },
  {
    id: "whatsapp",
    displayName: "WhatsApp",
    openAppId: "whatsapp",
    iconLocation: require("../../resources/images/webp/whatsapp_icon.png"),
    enabled: false,
  },
];

export const getDockConfig = (): DockItem[] => {
  return dockConfig.filter((item) => item.enabled);
};

