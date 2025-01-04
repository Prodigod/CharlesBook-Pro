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

function FileContentMusicWidget({ iconLocation, url, audioSource, pauseButton, playButton }) {
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

              .image-container {
                position: relative;
                width: 100%;
              }

              .image-container button {
                position: absolute;
                top: 10px;
                left: 562px;
                transform: translateX(-50%);
                font-size: 16px;
                cursor: pointer;
                color: white;
                border: none;
                z-index: 10; /* Ensure button is above the image */
                background: transparent;
              }
            </style>
          </head>
          <body>
            <div class="image-container">
              <a href="${url}"><img src="${iconLocation}" alt="HiRez" /></a>
              <button id="playButton"><img src="${playButton}" alt="Play"></button>
            </div>
            <audio id="audioPlayer" src="${audioSource}"></audio>
            <script>
              const playButton = document.getElementById('playButton');
              const audioPlayer = document.getElementById('audioPlayer');
              playButton.addEventListener('click', () => {
                if (audioPlayer.paused) {
                  audioPlayer.play();
                  playButton.innerHTML = '<img src="${pauseButton}" alt="Pause" />';
                } else {
                  audioPlayer.pause();
                  playButton.innerHTML = '<img src="${playButton}" alt="Play" />';
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

function FileContentSafariWidget({ urlSafari }) {
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

              .image-container {
                position: relative;
                width: 100%;
              }

              .image-container iframe {
                display: block;
                width: 100%;
                height: 200vh; /* For testing scrolling */
                border: none;
                overflow: auto;
              }
            </style>
          </head>
          <body>
            <div class="image-container">
              <iframe src="${urlSafari}" title="Safari Widget" scrolling="yes" style="overflow:auto;"></iframe>
            </div>
          </body>
        </html>
      `}
      title="Safari Widget"
    />
  );
}
function FileContentChromeWidget({ urlChrome }) {
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

              .image-container {
                position: relative;
                width: 100%;
              }

              .image-container iframe {
                display: block;
                width: 100%;
                height: 200vh; /* For testing scrolling */
                border: none;
                overflow: auto;
              }
            </style>
          </head>
          <body>
            <div class="image-container">
              <iframe src="${urlChrome}" title="Safari Widget" scrolling="yes" style="overflow:auto;"></iframe>
            </div>
          </body>
        </html>
      `}
      title="Safari Widget"
    />
  );
}
function FileContentGameWidget({ zombies}) {
  return (
<IframeWrapper
  srcDoc={`
    <html>
      <head>
        <style>
          html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow: hidden; /* Prevent unnecessary scrolling */
          }

          .image-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 80%;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden; /* Ensure no unwanted overflow */
          }

          .image-container iframe {
            width: 200%; /* Full width */
            height: 200%; /* Full height */
            max-width: 100vw; /* Prevent overflow horizontally */
            max-height: 100vh; /* Prevent overflow vertically */
            aspect-ratio: 16 / 9; /* Maintain a 16:9 aspect ratio */
            border: none;
            object-fit: contain; /* Ensures content is scaled proportionally */
          }

          @media (max-width: 768px) {
            .image-container iframe {
              aspect-ratio: 4 / 3; /* Adjust for smaller devices */
              height: auto; /* Ensure proper scaling */
            }
          }

          @media (min-height: 1080px) {
            .image-container iframe {
              height: calc(100vh - 10px); /* Add a small margin to prevent overflow */
            }
          }
        </style>
      </head>
      <body>
        <div class="image-container">
          <iframe
            src="${zombies}"
            title="Zombies"
          ></iframe>
        </div>
      </body>
    </html>
  `}
></IframeWrapper>

  )
}
function FileContentGameWidgetSpinMaster({ spinMaster }) {
  return (
<IframeWrapper
  srcDoc={`
    <html>
      <head>
        <style>
          html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow: hidden; /* Prevent unnecessary scrolling */
          }

          .image-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 80%;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden; /* Ensure no unwanted overflow */
          }

          .image-container iframe {
            width: 200%; /* Full width */
            height: 200%; /* Full height */
            max-width: 100vw; /* Prevent overflow horizontally */
            max-height: 100vh; /* Prevent overflow vertically */
            aspect-ratio: 16 / 9; /* Maintain a 16:9 aspect ratio */
            border: none;
            object-fit: contain; /* Ensures content is scaled proportionally */
          }

          @media (max-width: 768px) {
            .image-container iframe {
              aspect-ratio: 4 / 3; /* Adjust for smaller devices */
              height: auto; /* Ensure proper scaling */
            }
          }

          @media (min-height: 1080px) {
            .image-container iframe {
              height: calc(100vh - 10px); /* Add a small margin to prevent overflow */
            }
          }
        </style>
      </head>
      <body>
        <div class="image-container">
          <iframe
            src="${spinMaster}"
            title="Spin Master"
          ></iframe>
        </div>
      </body>
    </html>
  `}
></IframeWrapper>

  )
}

export { FileContentMusicWidget, FileContentSafariWidget, FileContentChromeWidget, FileContentGameWidget,
  FileContentGameWidgetSpinMaster 
 };
