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
          name: "Cardano Coin",
          available: true,
          image: googleImage,
          link: "https://www.google.com/search?q=Cardano coin",
        },
        {
          name: "Hi-Rez music",
          available: true,
          image: ytImage,
          link: "https://www.youtube.com/results?search_query=Hi-Rez+music",
        },
        {
          name: "Whats the best cardano Coin? - Google Search",
          available: true,
          image: googleImage,
          link: "https://www.google.com/search?q=whats+the+best+cardano+coin&sca_esv=4ea9ed7b68a81626&sxsrf=ADLYWIKAO_V08xOnK76ORp3DttXtDNVr0Q%3A1733711038555&source=hp&ei=vlRWZ4boHafXptQPt9C-gQU&iflsig=AL9hbdgAAAAAZ1ZizrMxs_hstWPCnQYJ5MhqLF2pJ1bW&ved=0ahUKEwiGv9700JmKAxWnq4kEHTeoL1AQ4dUDCBo&uact=5&oq=whats+the+best+cardano+coin&gs_lp=Egdnd3Mtd2l6Iht3aGF0cyB0aGUgYmVzdCBjYXJkYW5vIGNvaW4yBxAhGKABGAoyBxAhGKABGAoyBxAhGKABGAoyBxAhGKABGAoyBxAhGKABGAoyBRAhGKsCMgUQIRirAjIFECEYqwJIuxxQAFimG3AAeACQAQCYAYsBoAHXEaoBBDIxLja4AQPIAQD4AQGYAhugAoUSwgIEECMYJ8ICCxAAGIAEGLEDGIMBwgIREC4YgAQYsQMY0QMYgwEYxwHCAg4QLhiABBixAxiDARjUAsICCxAuGIAEGNEDGMcBwgILEAAYgAQYkQIYigXCAgoQABiABBhDGIoFwgINEAAYgAQYsQMYQxiKBcICEBAAGIAEGLEDGEMYgwEYigXCAgwQABiABBhDGIoFGArCAggQABiABBjJA8ICBxAAGIAEGArCAgUQABiABMICCxAAGIAEGJIDGIoFwgIOEAAYgAQYsQMYgwEYigXCAg0QABiABBixAxiDARgKwgIIEAAYgAQYsQPCAgYQABgWGB7CAggQABgWGAoYHsICCxAAGIAEGIYDGIoFwgIIEAAYgAQYogTCAggQABiiBBiJBZgDAOIDBRIBMSBAkgcEMjEuNqAHyfAB&sclient=gws-wiz",
        },
        {
          name: "Hi-Rez Music",
          available: true,
          image: ytImage,
          link: "https://www.youtube.com/results?search_query=Hi-Rez-Music",
        },
        {
          name: "Cardano Memes ready to takeoff",
          available: true,
          image: ytImage,
          link: "https://www.youtube.com/shorts/XQraBGYQzyw",
        },
        {
          name: "How to get money - Google Search",
          available: true,
          image: googleImage,
          link: "https://www.google.com/search?q=How to avoid paying taxes in the us",
        },
        {
          name: "Google Search",
          available: true,
          image: googleImage,
          link: "https://www.google.com/search?q=Escorts in Washington DC area",
        },
        {
          name: "Hi Rez Video Games",
          available: true,
          image: googleImage,
          link: "https://www.google.com/search?q=Is Hunter Biden laptop info publically availible on google?",
        },
        {
          name: "How to play HI-Rez The Rapper video games",
          available: true,
          image: googleImage,
          link: "https://www.google.com/search?q=How to delete sensitive data on a macbook pro",
        },
      ];
      break;
    case "chrome-bookmarks":
      content = [
        { name: "Hi-Rez The Rapper Music", available: true, image: folderImage },
        { name: "Hi-Rez the rapper video games", available: true, image: folderImage },
        { name: "Hi-Rez Coin", available: true, image: folderImage },
        { name: "Why should I buy Hi-Rez coin?", available: true, image: folderImage },
        {
          name: "Hi-Rez Music",
          available: true,
          image: ytImage,
          link: "https://www.biblegateway.com/passage/?search=Jeremiah%2013%3A27&version=NIV",
        },
        {
          name: 'What is Cardano? ADA Explained with Animations',
          available: true,
          image: ytImage,
          link: "https://www.youtube.com/watch?v=UMUztLQNqSI&t=50s",
        },
        {
          name: "Hi-Rez - 2+2=5 (Official Music Video) - Youtube",
          available: true,
          image: ytImage,
          link: "https://www.youtube.com/watch?v=D_tXQo1yz0o",
        },
        {
          name: "How to Cardano coin and transfer it to Hi-Rez Coin",
          available: true,
          image: googleImage,
          link: "https://www.google.com/search?q=How to avoid paying taxes in the us",
        },
        {
          name: "How to transfer money to crypto wallet - Google Search",
          available: true,
          image: googleImage,
          link: "https://www.google.com/search?q=How+To+Transfer+Money+To+Crypto+Wallet&sca_esv=4ea9ed7b68a81626&sxsrf=ADLYWILcJXjO8uJraMx12-T-di_mBipvkw%3A1733711132428&ei=HFVWZ4biGaiY5OMPnP-v4Ag&ved=0ahUKEwiG4MOh0ZmKAxUoDHkGHZz_C4wQ4dUDCBA&oq=Howtotransfermoneytocryptowallet&gs_lp=Egxnd3Mtd2l6LXNlcnAiIEhvd3RvdHJhbnNmZXJtb25leXRvY3J5cHRvd2FsbGV0SABQAFgAcAB4AZABAJgBAKABAKoBALgBDMgBAJgCAKACAJgDAOIDBRIBMSBAkgcAoAcA&sclient=gws-wiz-serp",
        },
        {
          name: "How to play Hi-Rez The Rappers games.",
          available: true,
          image: googleImage,
          link: "https://www.google.com/search?q=How+to+play+Hi-Rez+The+Rappers+games&sca_esv=4ea9ed7b68a81626&rlz=1C1ONGR_enUS1124US1124&sxsrf=ADLYWIJYzV_f8BZo5l_5kn5Jm0KmteBmyA%3A1733711178541&ei=SlVWZ93LIPijptQP1K6HkA4&ved=0ahUKEwjdmMK30ZmKAxX4kYkEHVTXAeIQ4dUDCBA&oq=How+to+play+Hi-Rez+The+Rappers+games&gs_lp=Egxnd3Mtd2l6LXNlcnAiJEhvdyB0byBwbGF5IEhpLVJleiBUaGUgUmFwcGVycyBnYW1lc0gAUABYAHAAeAGQAQCYAQCgAQCqAQC4AQzIAQCYAgCgAgCYAwDiAwUSATEgQJIHAKAHAA&sclient=gws-wiz-serp",
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
