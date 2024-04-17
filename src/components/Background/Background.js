import React, { useState } from "react";
import { useBackgroundStyles } from "./Background.styles";
import Clock from "../Clock/Clock";
import Tooltip from "@material-ui/core/Tooltip"; // Import Tooltip
import InfoIcon from "@material-ui/icons/Info"; // Import Info icon

const Background = ({
  mediaType,
  backgroundMedia,
  backgroundDescription,
  captionsEnabled,
}) => {
  const classes = useBackgroundStyles();
  const [open, setOpen] = useState(false);
  const handleTooltipToggle = () => {
    setOpen(!open);
  };

  const getYouTubeEmbedUrl = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;
    const match = url.match(regExp);

    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}?autoplay=1&loop=1&mute=1&controls=0&loop=1&modestbranding=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=${captionsEnabled}`;
    }
    return null;
  };

  const renderBackground = () => {
    if (mediaType === "video") {
      const embedUrl = getYouTubeEmbedUrl(backgroundMedia);
      if (!embedUrl) return null;
      return (
        <div>
          <iframe
            className={classes.videoBackground}
            src={embedUrl}
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Video Background"
          ></iframe>
        </div>
      );
    } else {
      return (
        <div
          className={classes.background}
          style={{ backgroundImage: `url(${backgroundMedia})` }}
        />
      );
    }
  };

  return (
    <>
      {renderBackground()}
      <Clock />
      <Tooltip
        title={backgroundDescription}
        className={classes.backgroundDescription}
        open={open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        onClick={handleTooltipToggle}
      >
        <InfoIcon style={{ color: "white", fontSize: 50, cursor: "pointer" }} />
      </Tooltip>
    </>
  );
};

export default Background;
