import styled from "styled-components";

const IframeWrapper = styled.iframe`
  width: 100%;
  height: 90vh;
  border: none;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.5) transparent;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    min-height: 20px;
  }
`;

export default function FileContentWidget({ iconLocation, url, audioSource, pauseButton, playButton }) {
  return (
    <IframeWrapper
      srcDoc={`
        <html>
          <head>
            <style>
              body {
                margin: 0;
                padding: 0;
                overflow-y: scroll;
                overflow-x: hidden;
                scrollbar-width: thin;
                scrollbar-color: rgba(0, 0, 0, 0.5) transparent;
                position: relative; /* Set the body to relative to position button inside */
              }

              body::-webkit-scrollbar {
                width: 8px;
              }

              body::-webkit-scrollbar-track {
                background: transparent;
              }

              body::-webkit-scrollbar-thumb {
                background-color: rgba(0, 0, 0, 0.5);
                border-radius: 4px;
                min-height: 20px;
              }

              img {
                display: block;
                max-width: 100%;
                height: auto;
              }

              /* Position button above the image */
              button {
                position: absolute;
                top: 15px;  /* Distance from the top of the iframe content */
                left: 750px;
                transform: translateX(-50%);
                font-size: 16px;
                cursor: pointer;
                color: white;
                border: none;
                z-index: 10; /* Ensure button is above the image */
              }
            </style>
          </head>
          <body>
            <a href="${url}"><img src="${iconLocation}" alt="HiRez" /></a>
            <button id="playButton"><img src="${playButton}" alt="Play">
</button>
            <audio id="audioPlayer" src="${audioSource}"></audio>
            <script>
              const playButton = document.getElementById('playButton');
              const audioPlayer = document.getElementById('audioPlayer');
              playButton.addEventListener('click', () => {
                if (audioPlayer.paused) {
                  audioPlayer.play();
                  playButton.innerHTML = \`<img src="${pauseButton}" alt="Pause" />\`;
                } else {
                  audioPlayer.pause();
                  playButton.innerHTML = \`<img src="${playButton}" alt="Play" />\`;
                }
              });
            </script>
          </body>
        </html>
      `}
      title="Scrollable Image with Audio"
    />
  );
}
