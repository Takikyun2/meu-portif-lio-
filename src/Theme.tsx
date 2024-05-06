import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let Theme = createTheme({
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

Theme = responsiveFontSizes(Theme);

export default Theme;
