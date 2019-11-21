// import React from 'react';
// import { useTheme } from '../../ThemeContext';
// import styled, { withTheme } from 'styled-components';
// import { buttonBackgroundColor, buttonTextColor } from '../../theme.js';


// function DarkMode (props) {

//     const themeToggle = useTheme();

//     const Button = styled.button`
//   background: ${buttonBackgroundColor};
//   border: none;
//   border-radius: 0.3em;
//   box-shadow: none;
//   color: ${buttonTextColor};
//   cursor: pointer;
//   font-size: 1em;
//   padding: 0.5em 1em;
// `;
//     return (

//         <Button onClick={() => themeToggle.toggle()}>
//             {props.theme.mode === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
//         </Button>

//     )

// }

// export default withTheme(DarkMode);

// App.js
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../theme';
import { GlobalStyles } from '../../global';

import Toggle from '../Toggle'

// The function that toggles between themes
function DarkMode() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  
  // Return the layout based on the current theme
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </>
    </ThemeProvider>
  );
}

export default DarkMode;