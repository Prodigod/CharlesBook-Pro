const calculateRandomPosition = () => {
  // const windowWidth = window.innerWidth;
  // const windowHeight = window.innerHeight;

  // const bufferWidth = 100; // Buffer width around the edges

  // const minX = bufferWidth;
  // const maxX = windowWidth - bufferWidth;
  // const minY = bufferWidth;
  // const maxY = windowHeight - bufferWidth;

  // let x, y;
  // do {
  //   x = Math.random() * (maxX - minX) + minX;
  //   y = Math.random() * (maxY - minY) + minY;
  // } while (Math.abs(x) <= bufferWidth || Math.abs(y) <= bufferWidth);

  // return { x, y };
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  return { x, y };
}

export default calculateRandomPosition;