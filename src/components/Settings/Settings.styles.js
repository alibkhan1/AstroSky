import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  settingsButton: {
    backgroundColor: theme.palette.primary.main,
    position: "fixed",
    bottom: 15,
    right: 15,
    color: theme.palette.text.default,
    "&:hover": {
      color: theme.palette.text.default,
      backgroundColor: theme.palette.highlightColor.default,
    },
  },
  switchBase: {
    color: theme.palette.primary.main,
    "&.Mui-checked": {
      color: theme.palette.highlightColor.default,
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
  track: {
    backgroundColor: theme.palette.primaryBackground.default,
  },
}));
