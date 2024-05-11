import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#4B72A6",
    },
    secondary: {
      main: "#F2D5CE",
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
});

theme = responsiveFontSizes(theme);

export default theme;
