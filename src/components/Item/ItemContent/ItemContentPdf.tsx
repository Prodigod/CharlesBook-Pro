import React, { useEffect, useState } from 'react';

function ItemContentPdf({ fileLocation, pageCount = 1 }) {
  const [base64Pdf, setBase64Pdf] = useState('');

  useEffect(() => {
    fetch(fileLocation)
      .then((response) => response.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (typeof reader.result === 'string') {
            setBase64Pdf(reader.result);
          }
        };
        reader.readAsDataURL(blob);
      })
      .catch((error) => {
        console.error('Error fetching and encoding file:', error);
      });
  }, [fileLocation]);

  return (
    <div>
      {base64Pdf ? (
        <iframe src={`${base64Pdf}#navpanes=0`} width="100%" height="600px" title="PDF Viewer"></iframe>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ItemContentPdf;
