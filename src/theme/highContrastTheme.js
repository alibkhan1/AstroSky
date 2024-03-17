import { createTheme } from '@material-ui/core/styles';
import typography from './typography';

const highContrastTheme = createTheme({
  palette: {
    primary: {
      main: "#3A3A3A",
    },
    secondary: {
      main: "#515151",
    },
    background: {
      default: "#949494",
    },
    text: {
      default: "#ffffff",
    },
    highlightColor: { default: "#676767" },
    primaryBackground: { default: "#515151" },
  },
  typography,
});

export default highContrastTheme;
