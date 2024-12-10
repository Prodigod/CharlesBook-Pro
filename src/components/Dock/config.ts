export type DockItem = {
  id: string;
  displayName: string;
  widget?: any;
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
      widget: `
        <div style="left: 0; width: 100%; height: 450px; position: relative;">
              <iframe
                    style="border: 0; width: 300px; height: 150px;"
                          srcdoc='
        <a href="https://music.apple.com/us/artist/hi-rez/57895780" target="_blank" title="Visit Hi-Rez on Apple Music">
            <img src="/hirez.jpg" 
                 alt="Hi-Rez on Apple Music" 
                 style="width: 100%; height: 100%; border: 0; cursor: pointer;">
        </a>
    '>
</iframe>

              </div>

      `,
      iconLocation: require("../../resources/images/webp/applemusic.png"),
      enabled: true
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
    link: "https://www.instagram.com/charleshoskinson.cardano/?hl=en",
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

