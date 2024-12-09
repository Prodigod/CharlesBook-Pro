import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const FileContentVideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 96%;
  /* transform: translate(0, -100px); */

  .window-video-player {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
  }

  /* Customize the appearance of player controls */
  .window-video-player .player-controls {
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    border-radius: 5px;
  }

  .window-video-player .player-controls button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #fff;
    margin-right: 10px;
  }

  .window-video-player .player-controls button:hover {
    color: #ccc;
  }
`;

export default function FileContentVideo({ fileLocation }) {
  return (
    <FileContentVideoWrapper>
      <ReactPlayer
        className="window-video-player"
        url={fileLocation}
        controls={true}
      />
    </FileContentVideoWrapper>
  );
}
