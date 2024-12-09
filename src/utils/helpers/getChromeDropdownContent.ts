import googleImage from "../../resources/images/icons/google.jpg";
import phImage from "../../resources/images/icons/ph.jpg";
import ytImage from "../../resources/images/icons/yt.png";
import folderImage from "../../resources/images/icons/folder_icon.png";

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
          name: "Did Hunter Bidens Name appear on Jeffery Epstiens list? - Google Search",
          available: true,
          image: googleImage,
          link: "https://www.google.com/search?q=Did Hunter Bidens Name appear on Jeffery Epstiens list?",
        },
        {
          name: "PornHub | PAWG Get's BBC Then Steals BangBro Wallet",
          available: true,
          image: phImage,
          link: "https://www.biblegateway.com/passage/?search=Jeremiah%2013%3A27&version=NIV",
        },
        {
          name: "PornHub | Brooklyn Thot Takes BBC",
          available: true,
          image: phImage,
          link: "https://www.biblegateway.com/passage/?search=Jeremiah%2013%3A27&version=NIV",
        },
        {
          name: "How to Steal a US election without arousing suspicion. - YouTube",
          available: true,
          image: ytImage,
          link: "https://www.youtube.com/results?search_query=how+to+steal+a+us+election+without+raising+suspricion",
        },
        {
          name: "President Donald Trump delivers speech at 2020 RNC [FULL SPEECH] - Youtube",
          available: true,
          image: ytImage,
          link: "https://www.youtube.com/watch?v=kyDhqg_hiRE",
        },
        {
          name: "How to avoid paying taxes in the us - Google Search",
          available: true,
          image: googleImage,
          link: "https://www.google.com/search?q=How to avoid paying taxes in the us",
        },
        {
          name: "Escorts in Washington DC area - Google Search",
          available: true,
          image: googleImage,
          link: "https://www.google.com/search?q=Escorts in Washington DC area",
        },
        {
          name: "Is Hunter Biden laptop info publically availible on google? - Google Search",
          available: true,
          image: googleImage,
          link: "https://www.google.com/search?q=Is Hunter Biden laptop info publically availible on google?",
        },
        {
          name: "How to delete sensitive data on a macbook pro - Google Search",
          available: true,
          image: googleImage,
          link: "https://www.google.com/search?q=How to delete sensitive data on a macbook pro",
        },
      ];
      break;
    case "chrome-bookmarks":
      content = [
        { name: "My Favorite Porn Sites", available: true, image: folderImage },
        { name: "Tax Evasion Tutorials", available: true, image: folderImage },
        { name: "Etsy ideas", available: true, image: folderImage },
        { name: "Cocaine Dealers on TOR", available: true, image: folderImage },
        {
          name: "Pornhub | 'teanna trump jason love' Search",
          available: true,
          image: phImage,
          link: "https://www.biblegateway.com/passage/?search=Jeremiah%2013%3A27&version=NIV",
        },
        {
          name: 'Sexyy Red "Hood Rats" ft. Sukihana (Official Video - No Skits)- Youtube',
          available: true,
          image: ytImage,
          link: "https://www.youtube.com/watch?v=V_0VqoUs69Y",
        },
        {
          name: "Miley Cyrus - Wrecking Ball (Official Video) - Youtube",
          available: true,
          image: ytImage,
          link: "https://www.youtube.com/watch?v=My2FRPA3Gf8",
        },
        {
          name: "How to avoid paying taxes in the us - Google Search",
          available: true,
          image: googleImage,
          link: "https://www.google.com/search?q=How to avoid paying taxes in the us",
        },
        {
          name: "Escorts in Washington DC area - Google Search",
          available: true,
          image: googleImage,
          link: "https://www.google.com/search?q=Escorts in Washington DC area",
        },
        {
          name: "How to delete sensitive data on a macbook pro - Google Search",
          available: true,
          image: googleImage,
          link: "https://www.google.com/search?q=How to delete sensitive data on a macbook pro",
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
