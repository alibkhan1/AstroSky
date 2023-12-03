import React, { useEffect, useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import {
  Grid,
  Card,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
} from "@material-ui/core";
import carouselData from "./carouselData.json";
import carouselDataEasy from "./carouselDataEasy.json";
import carouselDataHard from "./carouselDataHard.json";
import { useStyles } from "./CardCarousel.styles";

const CardCarousel = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (props.readingLevel === "easy") {
      setData(carouselDataEasy);
    } else if (props.readingLevel === "hard") {
      setData(carouselDataHard);
    } else {
      setData(carouselData);
    }
  }, [props.readingLevel]);

  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const [activeStep, setActiveStep] = useState(0);
  const cardsPerPage = isDesktop ? 4 : 2;
  const maxSteps = Math.ceil(data.length / cardsPerPage);

  const getTextToRead = () => {
    const start = activeStep * cardsPerPage;
    const end = Math.min(start + cardsPerPage, data.length);
    return data
      .slice(start, end)
      .map((item) => `${item.missionTitle}. ${item.summary}`)
      .join(". ");
  };

  const updateSpeech = () => {
    window.speechSynthesis.cancel();
    if (props.isTextToSpeech) {
      const textToRead = getTextToRead();
      const speech = new SpeechSynthesisUtterance(textToRead);
      window.speechSynthesis.speak(speech);
    }
  };

  useEffect(() => {
    updateSpeech();
  }, [props.isTextToSpeech, activeStep, data]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
      Math.min(prevActiveStep + 1, maxSteps - 1)
    );
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
  };

  const renderCards = () => {
    const content = [];
    const start = activeStep * cardsPerPage;
    const end = Math.min(start + cardsPerPage, data.length);
    for (let i = start; i < end; i++) {
      const item = data[i];
      if (item) {
        content.push(
          <Grid item key={`card-${i}`} xs={12} sm={6}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={item.missionTitle}
                  height="140"
                  image={item.imageUrl}
                  title={item.missionTitle}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.missionTitle}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.summary}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  className={classes.readMore}
                  onClick={() => window.open(item.link, "_blank")}
                >
                  Read more
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      }
    }
    return content;
  };

  return (
    <div className={classes.root}>
      <Grid container className={classes.gridContainer} spacing={2}>
        {renderCards()}
      </Grid>
      <Button
        size="small"
        onClick={handleBack}
        disabled={activeStep === 0}
        className={`${classes.button} left`}
      >
        <KeyboardArrowLeft />
      </Button>
      <Button
        size="small"
        onClick={handleNext}
        disabled={activeStep === maxSteps - 1}
        className={`${classes.button} right`}
      >
        <KeyboardArrowRight />
      </Button>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        className={classes.stepper}
        classes={{
          dot: classes.dot,
          dotActive: classes.dotActive,
        }}
        backButton={<></>}
        nextButton={<></>}
      />
    </div>
  );
};

export default CardCarousel;
