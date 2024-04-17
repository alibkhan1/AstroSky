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
      default: "#F5F5F5",
    },
    text: {
      default: "#14171a",
    },
    highlightColor: { default: "#869BFF" },
    primaryBackground: { default: "#9ECFE7" },
  },
  typography,
});

export default theme;
