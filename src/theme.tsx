import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#080C16',
    },
    secondary: {
      main: '#e3f2fd',
    },
  },
  typography:{
    fontFamily: "Heuvetica Neue"
  }
});

theme = responsiveFontSizes(theme)

export default theme;
