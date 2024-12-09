const serializeBlobToString = (blob) => {
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  reader.onload = function () {
    const base64String = reader.result;

    return base64String;
  };
};

export default serializeBlobToString;
