import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "relative",
    backgroundColor: theme.palette.primaryBackground.default,
    padding: theme.spacing(4),
  },
  gridContainer: {
    maxWidth: "80%",
    margin: "0 auto",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
    },
  },
  card: {
    overflow: "scroll",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
    border: `2px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    [theme.breakpoints.up("sm")]: {
      height: 260,
    },
    [theme.breakpoints.down("xs")]: {
      height: 160,
    },
  },
  media: {
    height: 140,
  },
  stepper: {
    backgroundColor: theme.palette.primaryBackground.default,
    position: "absolute",
    borderRadius: "15px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: theme.spacing(1),
    position: "absolute",
    top: "50%",
    [theme.breakpoints.up("xs")]: {
      top: "96%",
    },
    transform: "translateY(-50%)",
    backgroundColor: theme.palette.primaryBackground.default,
    "&:hover": {
      backgroundColor: theme.palette.highlightColor.default,
    },
    "&.left": {
      left: theme.spacing(1),
    },
    "&.right": {
      right: theme.spacing(1),
    },
  },
  dot: {
    backgroundColor: theme.palette.background.default,
    width: "10px",
    height: "10px",
    margin: "0 6px",
  },
  dotActive: {
    backgroundColor: theme.palette.highlightColor.default,
    width: "12px",
    height: "12px",
  },
  readMore: {
    backgroundColor: theme.palette.primaryBackground.default,
    "&:hover": {
      backgroundColor: theme.palette.highlightColor.default,
    },
  },
}));

export default useStyles;
