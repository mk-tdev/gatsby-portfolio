import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

const mainTheme = {
  colors: {
    primaryText: '#333',
  },
};

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
} `;

const Theme = ({ children }) => (
  <ThemeProvider theme={mainTheme}>
    <GlobalStyles />
    <Normalize />
    {children}
  </ThemeProvider>
);

export default Theme;
