import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Fab,
  Switch,
} from "@material-ui/core";
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import HearingOutlinedIcon from "@mui/icons-material/HearingOutlined";
import RecordVoiceOverOutlinedIcon from "@mui/icons-material/RecordVoiceOverOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Link } from "react-router-dom";
import { useStyles } from "./Settings.styles.js";
import ReadingLevelsForm from "./ReadingLevelSettings/ReadingLevelsForm.js";

const SettingsMenu = ({
  isHighContrast,
  toggleIsHighContrast,
  captionsEnabled,
  toggleCaptionsEnabled,
  handleReadingLevels,
  readingLevel,
  isTextToSpeech,
  toggleIsTextToSpeech,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const classes = useStyles();

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
    {
      text: "Captions",
      icon: <HearingOutlinedIcon />,
      toggle: toggleCaptionsEnabled,
      checked: captionsEnabled === 1,
    },
    {
      text: "Text to Speech",
      icon: <RecordVoiceOverOutlinedIcon />,
      toggle: toggleIsTextToSpeech,
      checked: isTextToSpeech,
    },
    {
      text: "High Contrast",
      icon: <VisibilityOffOutlinedIcon />,
      toggle: toggleIsHighContrast,
      checked: isHighContrast,
    },
  ];

  const drawerList = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={item.text}
            component={Link}
            to={item.path || "#"}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
            {item.toggle && (
              <Switch
                id={index.toString()}
                checked={item.checked}
                onChange={item.toggle}
                classes={{
                  switchBase: classes.switchBase,
                  track: classes.track,
                }}
              />
            )}
          </ListItem>
        ))}
        <ReadingLevelsForm
          readingLevel={readingLevel}
          onFormSubmit={handleReadingLevels}
        />
      </List>
    </div>
  );

  return (
    <div>
      <Fab
        className={classes.settingsButton}
        aria-label="add"
        onClick={toggleDrawer(true)}
      >
        <AccessibilityNewIcon />
      </Fab>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList()}
      </Drawer>
    </div>
  );
};

export default SettingsMenu;
