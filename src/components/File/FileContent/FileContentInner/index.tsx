import { ItemTypes } from "../../../../types/items";

import FileContentImage from "./FileContentImage";
import FileContentPdf from "./FileContentPdf";
import FileContentVideo from "./FileContentVideo";
import { FileContentMusicWidget, FileContentSafariWidget, FileContentChromeWidget, FileContentGameWidget,
  FileContentGameWidgetSpinMaster 
 } from "./FileContentWidget";

const FileContentInner = ({
  type,
  iconLocation,
  fileLocation,
  //   pageCount,
  //   children,
  url = "https://charlesdoingstuff.com/",
  audioSource = "./assets/mp3s/PopOff.mp3",
  pauseButton = "./assets/icons/pausebutton.png",
  playButton = "./assets/icons/playbutton.png",
  urlSafari = "https://www.snek.fun/",
  urlChrome = "https://www.taptools.io/",
  zombies ="./games/zombies/index.html",
  spinMaster = "./games/SpinMaster/index.html",

}) => {
  switch (type) {
    case ItemTypes.pdf:
      return <FileContentPdf fileLocation={fileLocation} />;
    case ItemTypes.video:
      return <FileContentVideo fileLocation={fileLocation}></FileContentVideo>;
    case ItemTypes.image:
      return <FileContentImage iconLocation={iconLocation}></FileContentImage>;
      case ItemTypes.widget:
             return <FileContentMusicWidget 
                iconLocation={iconLocation}
                url={url}
                audioSource={audioSource}
                pauseButton={pauseButton} 
                playButton={playButton}
              />
              case ItemTypes.safariWidget:
             return <FileContentSafariWidget urlSafari={urlSafari} />
             case ItemTypes.chromeWidget:
              return <FileContentChromeWidget urlChrome={urlChrome} />
              case ItemTypes.gameWidget:
              return <FileContentGameWidget
              zombies={zombies}/>
              case ItemTypes.gameWidgetSpinMaster:
                return <FileContentGameWidgetSpinMaster
                spinMaster={spinMaster}/>
              default:
            return null;
  }
};

export default FileContentInner;
