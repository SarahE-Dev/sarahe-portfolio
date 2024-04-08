import { createTheme, responsiveFontSizes } from "@mui/material";

let myTheme = createTheme({ 
  palette: {
    mode: 'dark',
    primary: {
      main: '#7a27b9',
    },
    secondary: {
      main: '#e82cad',
    },
    error: {
      main: '#df66f3',
    },
    warning: {
      main: '#efef2e',
    },
    info: {
      main: '#3ae8e8',
    },
    success: {
      main: '#44ec9a',
    },
  },
});

myTheme = responsiveFontSizes(myTheme);

export default myTheme;