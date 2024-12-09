import React from "react";
import { motion } from "framer-motion";
import "./BootUpWindow.scss";

export default function BootUpWindow() {
  React.useEffect(() => {
    setTimeout(() => {
      const bootUpWindow = document.getElementById("boot");
      bootUpWindow!.classList.remove("bootup-window");
      bootUpWindow!.classList.add("vanished");
    }, 3350);

    // setTimeout(() => {
    //   setIsBootingOn(false);
    // }, 4350);
  }, []);

  const animations = {
    initial: { width: "0px" },
    animate: { width: "150px" },
  };

  return (
    <div className="bootup-window boot" id="boot">
      <img
        alt="Logo"
        className="logo"
        src={require("../../resources/images/applelogo-color-new.png")}
      />
      <p className="crack-book-pro">CrackBook Pro</p>
      <div className="bar-container">
        <div className="bar-background" />
        <motion.div
          className="bar"
          variants={animations}
          initial="initial"
          animate="animate"
          transition={{ ease: "easeInOut", duration: 2.1, delay: 0.4 }}
        />
      </div>
    </div>
  );
}
