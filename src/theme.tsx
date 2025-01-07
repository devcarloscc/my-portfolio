import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#DBEBF3',
    },
    secondary: {
      main: '#E8D5B5',
    },
  },
  typography:{
    fontFamily: "Heuvetica Neue"
  }
});

theme = responsiveFontSizes(theme)

export default theme;
