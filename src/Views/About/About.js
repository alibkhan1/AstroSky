import React, { useEffect } from "react";
import teamPhoto from "../../assets/teamPhoto.png";
import teamCelebration from "../../assets/teamCelebration.png";
import { useAboutStyles } from './About.styles';
import { Container } from "@material-ui/core";

const About = ({ isTextToSpeech }) => {
  const classes = useAboutStyles();
  const aboutpagedata =
    "We are the ICJC Mavericks. We are a robotics team of middle schoolers competing in the First Lego League robotics competition. We have previously competed in the Razorback competition in Arkansas. This website is a part of our innovation project, and we made it to try and share our passion for astronomy with others. Our goal is to make astronomy an engaging and accessible experience for all. We hope you enjoy this website!";

  useEffect(() => {
    if (isTextToSpeech) {
      // Start text-to-speech when isTextToSpeech prop is true
      const utterance = new SpeechSynthesisUtterance(aboutpagedata);
      window.speechSynthesis.speak(utterance);
    } else {
      // Stop text-to-speech when isTextToSpeech prop is false
      window.speechSynthesis.cancel();
    }
  }, [isTextToSpeech, aboutpagedata]);

  return (
    <Container>
      <div className={classes.container}>
        <div className={classes.imageContainer}>
          <img
            src={teamPhoto}
            alt="Space ship"
            className={classes.teamPhoto}
          />
        </div>
        <div className={classes.imageContainer}>
          <img
            src={teamCelebration}
            alt="Space ship"
            className={classes.teamCelebration}
          />
        </div>
      </div>
      <div className={classes.textContainer}>{aboutpagedata}</div>
    </Container>
  );
};

export default About;
