const copyToClipboard = (text, e) => {
  navigator.clipboard.writeText(text).then(
    () => {
      // add .active class to the button
      e.target.classList.add("active");
    },
    (err) => {
      console.error("Failed to copy to clipboard: ", err);
    }
  );
};

export default copyToClipboard;
