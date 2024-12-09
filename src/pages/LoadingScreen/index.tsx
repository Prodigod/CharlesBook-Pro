import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import './styles.scss';

export default function BootUpWindow() {
  const LOADING_TIME = 10000; //14400secs ->(4 hrs)

  React.useEffect(() => {
    setTimeout(() => {
      const bootUpWindow = document.getElementById('boot');
      bootUpWindow!.classList.remove('bootup-window');
      bootUpWindow!.classList.add('vanished');
    }, LOADING_TIME * 1000);

    // setTimeout(() => {
    //   setIsBootingOn(false);
    // }, 4350);
  }, []);

  const animations = {
    initial: { width: '10px' },
    animate: { width: '150px' },
  };

  return (
    <div className="bootup-window boot" id="boot">
      <img
        alt="Logo"
        className="logo"
        src={require('../../resources/images/applelogo-color-new.png')}
      />

      <p className="crack-book-pro">CrackBook Pro</p>

      <div className="bar-container">
        <div className="bar-background" />
        <motion.div
          className="bar"
          variants={animations}
          initial="initial"
          animate="animate"
          transition={{ ease: 'easeInOut', duration: LOADING_TIME, delay: 0 }}
        />
      </div>

      <div className="loading-status-wrapper">
        <p className="loading-status">Updating OS... </p>
        <p className="loading-status">Less than 69 hours remaining.. </p>
        <p>jdjd</p>
      </div>

      <p className="ca">
        <span>CA:</span>HLwEJQVzs7SvjXuXpBTRHaLp5S6uWoWTUhLjJxBfy1c7
      </p>
    </div>
  );
}
