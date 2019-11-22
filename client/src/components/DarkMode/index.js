// App.js
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../theme';
import { GlobalStyles } from '../../global';

import Toggle from '../Toggle'

// The function that toggles between themes
function DarkMode() {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }
  
  // Return the layout based on the current theme
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </>
    </ThemeProvider>
  );
}

export default DarkMode;