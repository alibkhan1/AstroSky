import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 250,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  fab: {
    borderRadius: "0",
    position: "fixed",
    top: "10px",
    left: "5px",
    backgroundColor: theme.palette.primaryBackground.default,
    "&:hover": {
      backgroundColor: theme.palette.highlightColor.default,
    },
  },
}));
