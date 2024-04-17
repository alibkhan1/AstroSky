import { makeStyles } from "@material-ui/core/styles";

export const useBackgroundStyles = makeStyles((theme) => ({
  background: {
    minHeight: "100vh",
    minWidth: "100vw",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  videoBackground: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    overflow: "hidden",
    "& iframe": {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "100%",
      height: "100%",
      transform: "translate(-50%, -50%)",
      objectFit: "cover",
    },
  },
  backgroundDescription: {
    position: "absolute",
    fontSize: "2rem",
    top: 20,
    right: 10,
    transform: "translateX(-50%)",
  },
}));
