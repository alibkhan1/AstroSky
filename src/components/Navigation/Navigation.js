import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Fab,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import GpsFixedOutlinedIcon from "@mui/icons-material/GpsFixedOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import { Link } from "react-router-dom";
import { useStyles } from "./Navigation.styles.js";


const Navigation = ({ showFab = true }) => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    {
      text: "News",
      icon: <NewspaperOutlinedIcon />,
      path: "/tech-news",
    },
    {
      text: "Map",
      icon: <GpsFixedOutlinedIcon />,
      path: "/map",
    },
    {
      text: "Missions",
      icon: <RocketLaunchOutlinedIcon />,
      path: "/tech-missions",
    },
  ];

  const drawerList = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map(({ text, icon, path }) => (
          <ListItem button key={text} component={Link} to={path}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {showFab ? (
        <Fab
          aria-label="menu"
          onClick={toggleDrawer(true)}
          className={classes.fab}
        >
          <MenuIcon />
        </Fab>
      ) : (
        <MenuIcon aria-label="menu" onClick={toggleDrawer(true)} />
      )}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList()}
      </Drawer>
    </div>
  );
};

export default Navigation;
