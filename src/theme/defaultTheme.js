import { createTheme } from "@material-ui/core/styles";
import typography from "./typography";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9ECFE7",
    },
    secondary: {
      main: "#14171a",
    },
    background: {
      default: "#FFFFFF",
    },
    text: {
      default: "#14171a",
    },
    highlightColor: { default: "#14171a" },
    primaryBackground: { default: "#9ECFE7" },
  },
  typography,
});

export default theme;
