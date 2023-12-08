import React, { useState, useContext, useEffect } from 'react';
import { useTheme } from '../Theme/Theme';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
const ThemeToggle = () => {
  const { isLightTheme, toggleTheme } = useTheme();

  useEffect(() => {
    const root = document.querySelector(':root');
    root.style.setProperty('--foreground-rgb', isLightTheme ? '#0C0D0F' : '#fff');
    root.style.setProperty('--background-end-rgb', isLightTheme ? '#fff' : '#0C0D0F');
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
