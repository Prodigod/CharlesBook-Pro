const calculateMiddleWithOffset = (offsetX = 0, offsetY = 0) => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const middleX = windowWidth / 2;
  const middleY = windowHeight / 2;

  const resultX = middleX + offsetX;
  const resultY = middleY + offsetY;

  return { x: resultX, y: resultY };
};

export default calculateMiddleWithOffset;
