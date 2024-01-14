import { makeStyles } from "@material-ui/core/styles";

export const useAboutStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    marginBottom: theme.spacing(2),
  },
  imageContainer: {
    flex: 1,
    marginRight: theme.spacing(1), // Add a small margin between images
  },
  teamPicture: {
    width: "100%",
    height: "auto",
    marginBottom: theme.spacing(2),
  },
  textContainer: {
    textAlign: "justify",
  },
}));
