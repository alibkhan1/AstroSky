import { createTheme } from "@material-ui/core/styles";
import typography from "./typography";

const theme = createTheme({
  palette: {
    primary: {
      main: "#A5907E",
    },
    secondary: {
      main: "#786452",
    },
    background: {
      default: "#F7DAD9",
    },
    text: {
      default: "#443730",
    },
    highlightColor: { default: "#786452" },
    primaryBackground: { default: "#A5907E" },
  },
  typography,
});

export default theme;
