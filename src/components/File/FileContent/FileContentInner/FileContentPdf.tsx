import React from "react";
import styled from "styled-components";

const FileContentPdfWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;

  .pdf-footer {
    bottom: 0;
    background-color: #e0e0e0;
    /* top: 0; */
    width: 100%;
    padding: 5px;
  }
`;

const FileContentPdfIframe = styled.iframe`
  width: 100%;
  height: 100%;
`;

function FileContentPdf({ fileLocation, pageCount = 1 }) {
  const [base64Pdf, setBase64Pdf] = React.useState("");

  React.useEffect(() => {
    fetch(fileLocation)
      .then((response) => response.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (typeof reader.result === "string") {
            setBase64Pdf(reader.result);
          }
        };
        reader.readAsDataURL(blob);
      })
      .catch((error) => {
        console.error("Error fetching and encoding file:", error);
      });
  }, [fileLocation]);

  return (
    <FileContentPdfWrapper>
      {base64Pdf ? (
        <FileContentPdfIframe
          src={`${base64Pdf}#navpanes=0`}
          //   width="100%"
          //   height="600px"
          title="PDF Viewer"
        ></FileContentPdfIframe>
      ) : (
        <p>Loading...</p>
      )}
    </FileContentPdfWrapper>
  );
}

export default FileContentPdf;
