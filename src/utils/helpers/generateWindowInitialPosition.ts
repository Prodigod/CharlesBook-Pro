const generateWindowInitialPosition = () => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const maxOffset = 100;

  const centerX = windowWidth / 2;
  const centerY = windowHeight / 2;

  const offsetX = (Math.random() - 0.5) * maxOffset;
  const offsetY = (Math.random() - 0.5) * maxOffset;

  const x = centerX + offsetX;
  const y = centerY + offsetY;

  return { x, y };
};

export default generateWindowInitialPosition;
