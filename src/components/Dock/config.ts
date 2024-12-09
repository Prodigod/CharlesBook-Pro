export const dockConfig = [
  {
    id: "finder",
    displayName: "Finder",
    link: "https://www.hunterbiden.report/p/welcome-to-the-hunter-biden-report",
    iconLocation: require("../../resources/images/webp/finder.webp"),
    enabled: true,
  },
  {
    id: "photos",
    displayName: "Photos",
    link: "https://bidenlaptopmedia.com/index.php?/category/laptop",
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
    link: "https://jupiter-terminal.dexscreener.com/?inputMint=HLwEJQVzs7SvjXuXpBTRHaLp5S6uWoWTUhLjJxBfy1c7&outputMint=So11111111111111111111111111111111111111112",
    iconLocation: require("../../resources/images/webp/solana.png"),
    enabled: true,
  },
  {
    id: "music",
    displayName: "Music",
    openFileId: "ride2dis",
    iconLocation: require("../../resources/images/webp/applemusic.png"),
    enabled: true,
  },
  {
    id: "telegram",
    displayName: "Telegram",
    link: "https://t.me/HBcorruptlaptop",
    iconLocation: require("../../resources/images/webp/tg.png"),
    enabled: true,
  },
  {
    id: "twitter",
    displayName: "X.com",
    link: "https://twitter.com/corrupt_laptop",
    iconLocation: require("../../resources/images/webp/xcom_icon.png"),
    enabled: true,
  },
  {
    id: "instagram",
    displayName: "Instagram",
    link: "https://www.instagram.com/corruptlaptop/",
    iconLocation: require("../../resources/images/webp/insta.png"),
    enabled: true,
  },
  {
    id: "whatsapp",
    displayName: "WhatsApp",
    openAppId: "whatsapp",
    iconLocation: require("../../resources/images/webp/whatsapp_icon.png"),
    enabled: true,
  },
];

export const getDockConfig = () => {
  return dockConfig.filter((item) => item.enabled);
};
