import React, { useState, useContext, useEffect } from 'react';
import { useTheme } from '../Theme/Theme';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
const ThemeToggle = () => {
  const { isLightTheme, toggleTheme } = useTheme();

  useEffect(() => {
    const root = document.querySelector(':root');

    if (isLightTheme) {
      root.style.setProperty('--foreground-rgb', '#0C0D0F');
      root.style.setProperty('--background-start-rgb', '214, 219, 220');
      root.style.setProperty('--background-end-rgb', '#fff');
    } else {
      root.style.setProperty('--foreground-rgb', '#fff');
      root.style.setProperty('--background-start-rgb', '255, 0, 255');
      root.style.setProperty('--background-end-rgb', '#0C0D0F');
    }
  }, [isLightTheme]);

  const lightModeIcon = <LightModeIcon />;
  const darkModeIcon = <DarkModeIcon />; 

  const currentIcon = isLightTheme ? lightModeIcon : darkModeIcon;

  return (
    <button onClick={toggleTheme} className='fixed top-12 left-12 z-10'>
      {currentIcon}
    </button>
  );
};

export default ThemeToggle;
