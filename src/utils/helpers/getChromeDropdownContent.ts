import googleImage from "../../resources/images/icons/google.jpg";
import charlesImage from "../../resources/images/icons/charles.png";
import ytImage from "../../resources/images/icons/yt.png";
import folderImage from "../../resources/images/icons/folder_icon.png";
import xImage from "../../resources/images/icons/x.png"
import betaImage from "../../resources/images/icons/beta.png"
import snekImage from "../../resources/images/icons/snek.jpg"
import chadImage from "../../resources/images/icons/chad.png"
import booImage from "../../resources/images/icons/boo.jpg"
import coinImage from "../../resources/images/icons/coin.jpg"

const getChromeDropdownContent = (state: any) => {
  let content: any[] = [];
  switch (state) {
    case "logo":
      content = [
        {
          name: "About This Mac",
          available: false,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "System Preferences",
          available: false,
        },
        {
          name: "App Store",
          available: false,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Recent Items",
          available: false,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Force Quit",
          available: false,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Sleep",
          available: false,
        },
        {
          name: "Restart",
          available: false,
        },
        {
          name: "Shut Down",
          available: false,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Lock Screen",
          available: false,
        },
        {
          name: "Log Out User",
          available: false,
        },
      ];
      break;
    case "chrome":
      content = [
        {
          name: "About Chrome",
          available: false,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Preferences",
          available: false,
        },
      ];
      break;
    case "file":
      content = [
        {
          name: "New Finder Window",
          available: false,
        },
        {
          name: "New Folder",
          available: false,
        },
        {
          name: "New Folder with Selection",
          available: false,
        },
        {
          name: "New Smart Folder",
          available: false,
        },
        {
          name: "New tab",
          available: false,
        },
        {
          name: "Open",
          available: false,
        },
        {
          name: "Open With",
          available: false,
        },
        {
          name: "Print",
          available: false,
        },
        {
          name: "Close Window",
          available: false,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Get Info",
          available: false,
        },
        {
          name: "Rename",
          available: false,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Compress",
          available: false,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Duplicate",
          available: false,
        },
        {
          name: "Make Alias",
          available: false,
        },
        {
          name: "Quick Look",
          available: false,
        },
        {
          name: "Show Original",
          available: false,
        },
        {
          name: "Add to Sidebar",
          available: false,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Move to Trash",
          available: false,
        },
        {
          name: "Eject",
          available: false,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Find",
          available: false,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Tags...",
          available: false,
        },
      ];
      break;
    case "edit":
      content = [
        {
          name: "Undo",
          available: false,
        },
        {
          name: "Redo",
          available: false,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Cut",
          available: false,
        },
        {
          name: "Copy",
          available: false,
        },
        {
          name: "Paste",
          available: false,
        },
        {
          name: "Select All",
          available: false,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Show Clipboard",
          available: false,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Start Dictation",
          available: false,
        },
        {
          name: "Emoji & Symbols",
          available: false,
        },
      ];
      break;
    case "view":
      content = [
        {
          name: "As Icons",
          available: false,
        },
        {
          name: "As List",
          available: false,
        },
        {
          name: "As Columns",
          available: false,
        },
        {
          name: "As Gallery",
          available: false,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Use Stacks",
          available: false,
        },
        {
          name: "Sort By",
          available: false,
        },
        {
          name: "Clean Up",
          available: false,
        },
        {
          name: "Clean Up By",
          available: false,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Hide Sidebar",
          available: false,
        },
        {
          name: "Show Preview",
          available: false,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Hide Toolbar",
          available: false,
        },
        {
          name: "Show All Tabs",
          available: false,
        },
        {
          name: "Show Tab Bar",
          available: false,
        },
        {
          name: "Show Path Bar",
          available: false,
        },
        {
          name: "Show Status Bar",
          available: false,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Customize Toolbar...",
          available: false,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Show View Options",
          available: false,
        },
        {
          name: "Show Preview Options",
          available: false,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "Enter Full Screen",
          available: false,
        },
      ];
      break;
    case "chrome-history":
      content = [
        {
          name: "Snek.fun - Home",
          available: true,
          image: snekImage,
          link: "https://www.snek.fun/",
        },
        {
          name: "Chad",
          available: true,
          image: chadImage,
          link: "https://charlesthechad.com/",
        },
        {
          name: "$BOO- Premium Memecoin",
          available: true,
          image: booImage,
          link: "https://boocoin.io/",
        },
        {
          name: "Snek price today, SNEK to USD",
          available: true,
          image: coinImage,
          link: "https://coinmarketcap.com/currencies/snek/",
        },
        {
          name: "Cardano Memes ready to takeoff",
          available: true,
          image: ytImage,
          link: "https://www.youtube.com/shorts/XQraBGYQzyw",
        },
      ];
      break;
    case "chrome-bookmarks":
      content = [
        // { name: "Hi-Rez The Rapper Music", available: true, image: folderImage },    //bookmark
        // { name: "Hi-Rez the rapper video games", available: true, image: folderImage },    //bookmark
        {
          name: "CHIPS (@ChipsCardano) / X",
          available: true,
          image: xImage,
          link: "https://x.com/ChipsCardano",
        },
        {
          name: 'Charles Hoskimpson',
          available: true,
          image: charlesImage,
          link: "https://www.charleshoskimpson.fun/",
        },
        {
          name: "BETA",
          available: true,
          image: betaImage,
          link: "https://betaonada.com/",
        },
        {
          name: "CHAD (@charles_thechad) / X",
          available: true,
          image: xImage,
          link: "https://x.com/charles_thechad",
        },
        {
          name: "Snek (@Snek) / X",
          available: true,
          image: xImage,
          link: "https://x.com/snek",
        },
        
      ];
      break;
    case "help":
      content = [
        {
          name: "Send Finder Feedback",
          available: false,
        },
        {
          name: "divider",
          available: false,
        },
        {
          name: "macOS Help",
          available: false,
        },
      ];
      break;
  }

  return content;
};

export default getChromeDropdownContent;
