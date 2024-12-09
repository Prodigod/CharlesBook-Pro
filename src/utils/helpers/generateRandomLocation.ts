function generateRandomLocation(windowSize) {
  if (windowSize && windowSize.width && windowSize.height) {
    const screenWidth = windowSize.width;
    const screenHeight = windowSize.height;

    const randomX = Math.floor(Math.random() * screenWidth);
    const randomY = Math.floor(Math.random() * screenHeight);

    return { x: randomX, y: randomY };
  } else {
    console.error("Window size is not available");
    return null;
  }
}

export default generateRandomLocation;
