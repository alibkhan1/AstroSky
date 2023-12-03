import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  toolbarLeft: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-start",
  },
  pageTitleBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 2,
    borderRadius: "20px",
    height: "50px",
    backgroundColor: theme.palette.background.default,
  },
  toolbarRight: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  pageTitleText: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
    color: theme.palette.secondary.main,
  },
  pageTitleMobile: {
    marginTop: "55px",
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    justifyContent: "center",
    padding: "20px",
  },
  pageTitleIconText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  pageTitleIcon: {
    marginRight: theme.spacing(1),
  },
  logo: {
    height: "50px",
    width: "auto",
  },
  logoHighContrast: {
    height: "50px",
    width: "auto",
    right: 0,
    filter: "grayscale(100%)",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.default,
  },
  toolbarSpacing: {
    ...theme.mixins.toolbar,
  },
}));
