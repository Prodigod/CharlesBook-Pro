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
        <div class="iframe-container">
    <iframe
        style="
            border: 0;
            width: 100%;
            height: 100%;
        "
        srcdoc='
        <a href="https://music.apple.com/us/artist/hi-rez/57895780" target="_blank" title="Visit Hi-Rez on Apple Music">
            <img src="/hirez.jpg" 
                 alt="Hi-Rez on Apple Music" 
                 style="width: 100%; height: auto; border: 0; cursor: pointer;">
        </a>
    '>
    </iframe>
</div>

<style>
    /* Scoped container styles */
    .iframe-container {
        position: fixed; /* Isolated from document flow */
        top: 10%;
        left: 10%;
        width: 80%; /* Adjust as needed */
        height: 80%;
        z-index: 5000; /* Ensure it stays above other components */
        overflow: hidden;
        background-color: white; /* Optional for clarity */
        border-radius: 8px; /* Optional for aesthetics */
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    }

    /* Iframe takes up full space of its container */
    .iframe-container iframe {
        width: 100%;
        height: 100%;
        border: none;
    }

    /* Image inside iframe is scoped */
    .iframe-container img {
        max-width: 100%;
        height: auto;
        display: block;
    }
</style>

      `,
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

