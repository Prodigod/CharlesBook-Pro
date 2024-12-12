import { ItemTypes } from "../../../../types/items";

import FileContentImage from "./FileContentImage";
import FileContentPdf from "./FileContentPdf";
import FileContentVideo from "./FileContentVideo";
import FileContentWidget from "./FileContentWidget";

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

}) => {
  switch (type) {
    case ItemTypes.pdf:
      return <FileContentPdf fileLocation={fileLocation} />;
    case ItemTypes.video:
      return <FileContentVideo fileLocation={fileLocation}></FileContentVideo>;
    case ItemTypes.image:
      return <FileContentImage iconLocation={iconLocation}></FileContentImage>;
      case ItemTypes.widget:
        return <FileContentWidget iconLocation={iconLocation}
         url={url} 
         audioSource={audioSource}
         pauseButton={pauseButton} 
         playButton={playButton}></FileContentWidget>
    default:
      return null;
  }
};

export default FileContentInner;
