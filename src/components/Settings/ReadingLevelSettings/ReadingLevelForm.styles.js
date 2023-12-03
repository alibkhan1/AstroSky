import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  menuItem: {
    "&.MuiListItem-root.Mui-selected": {
      color: theme.palette.highlightColor.default,
    },
  },
  inputLabel: {
    color: theme.palette.primary.main,
  },
  formLabel: {
    display: "inline-flex",
    fontSize: "1.5rem",
    color: theme.palette.secondary.main,
  },
  formLabelText: {
    marginTop: "8px",
    marginLeft: "33px",
    marginBottom: "8px",
    color: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    padding: "10px",
    marginRight: "10px",
    color: theme.palette.primary.main,
  },
  formControl: {
    color: theme.palette.primary.main,
    width: "85%",
    padding: "10px",
    marginRight: "10px",
    marginTop: "10px",
  },
}));
