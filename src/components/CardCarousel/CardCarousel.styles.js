import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    marginTop:'7.5%',
    backgroundColor: theme.palette.background.default,
    boxShadow: "0 0 10px rgba(158, 207, 231, 1)",
    borderRadius: "10px",
    overflow: "auto",
  },
  gridContainer: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    "&:not(:last-child)": {
      marginBottom: theme.spacing(2),
    },
    [theme.breakpoints.up("sm")]: {
      height: 280,
    },
    [theme.breakpoints.down("xs")]: {
      height: "auto",
    },
  },
  media: {
    height: 150,
  },
  stepper: {
    width: "90%",
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      bottom: theme.spacing(1),
    },
  },
  button: {
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.highlightColor.default,
    },
  },
  dot: {
    backgroundColor: theme.palette.action.disabledBackground,
    width: 10,
    height: 10,
    margin: "0 6px",
  },
  dotActive: {
    backgroundColor: theme.palette.highlightColor.default,
    width: 12,
    height: 12,
  },
}));

export default useStyles;
