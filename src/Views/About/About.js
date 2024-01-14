import React from "react";
import TeamPicture from "../../assets/TeamPicture.png";
import TeamPicture2 from "../../assets/TeamPicture2.png";
import { useAboutStyles } from './About.styles';
import { Container } from "@material-ui/core";

const About = () => {
  const classes = useAboutStyles();
  const aboutpagedata =
    "We are the ICJC Mavericks. We are a robotics team of middle schoolers competing in the First Lego League robotics competition. We have previously competed in the Razorback competition in Arkansas. This website is a part of our innovation project, and we made it to try and share our passion for astronomy with others. Our goal is to make astronomy an engaging and accessible experience for all. We hope you enjoy this website!";

  return (
    <Container>
      <div className={classes.container}>
        <div className={classes.imageContainer}>
          <img
            src={TeamPicture2}
            alt="Space ship"
            className={classes.teamPicture}
          />
        </div>
        <div className={classes.imageContainer}>
          <img
            src={TeamPicture}
            alt="Space ship"
            className={classes.teamPicture}
          />
        </div>
      </div>
      <div className={classes.textContainer}>{aboutpagedata}</div>
    </Container>
  );
};

export default About;
