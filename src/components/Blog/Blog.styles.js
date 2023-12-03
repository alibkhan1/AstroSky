import { makeStyles } from "@material-ui/core/styles";

export const useBlogStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
    marginTop: theme.spacing(3),
  },
  newsSection: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "66.6667%",
    },
    marginBottom: theme.spacing(3),
  },
  latestNewsSection: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "33.3333%",
      paddingLeft: theme.spacing(3),
    },
  },
  newsItem: {
    marginBottom: theme.spacing(2),
  },
  media: {
    height: 140,
  },
  newsTitle: {
    fontWeight: "bold",
  },
  newsSummary: {
    color: theme.palette.text.secondary,
  },
  link: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  readMore: {
    backgroundColor: theme.palette.primaryBackground.default,
    "&:hover": {
      backgroundColor: theme.palette.highlightColor.default,
    },
  },
}));
