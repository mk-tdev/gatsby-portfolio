import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

const mainTheme = {
  colors: {
    primaryText: '#333',
    socialIcons: '#333',
  },
  fonts: {
    primary: 'Montserrat, sans-serif',
    secondary: 'Source Sans Pro, sans-serif',
  },
};

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: ${(props) => props.theme.fonts.secondary};
} 
h1, h2, h3, h4, h5, h6 {
  font-family: ${(props) => props.theme.fonts.primary};
}
.container {
  padding: 0 1rem;

  @media (min-width: 992px) {
    padding: 0;
    margin: 0 auto;
    width: 80%;
  }

  @media (min-width: 768px) {
    padding: 0;
    margin: 0 auto;
    width: 60%;
  }
}
`;

const Theme = ({ children }) => (
  <ThemeProvider theme={mainTheme}>
    <GlobalStyles />
    <Normalize />
    {children}
  </ThemeProvider>
);

export default Theme;
