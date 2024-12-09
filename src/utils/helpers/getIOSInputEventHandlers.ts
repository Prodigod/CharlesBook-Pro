const isIOS = () => {
  return /iPad|iPhone|iPod/.test(navigator.platform);
};

const getIOSInputEventHandlers = () => {
  if (isIOS()) {
    return {};
  }

  return {
    onTouchStart: (e) => {
      e.currentTarget.style.fontSize = "16px";
    },
    onBlur: (e) => {
      e.currentTarget.style.fontSize = "";
    },
  };
};

export default getIOSInputEventHandlers;
