import React, { useEffect, useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  CircularProgress,
  Grid,
  Card,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Button,
  MobileStepper,
} from "@material-ui/core";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { useStyles } from "./CardCarousel.styles";

const CardCarousel = ({ readingLevel, isTextToSpeech }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const url =
          readingLevel === "easy"
            ? "https://assets.astrosky.org/simplified-missions.json"
            : "https://assets.astrosky.org/missions.json";
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [readingLevel]);

  useEffect(() => {
    setActiveStep(0);
  }, [data]);

  useEffect(() => {
    const updateSpeech = () => {
      window.speechSynthesis.cancel();
      if (isTextToSpeech) {
        const textToRead = getTextToRead();
        const speech = new SpeechSynthesisUtterance(textToRead);
        window.speechSynthesis.speak(speech);
      }
    };

    updateSpeech();

    return () => {
      window.speechSynthesis.cancel();
    };
  }, [isTextToSpeech, activeStep, data]);

  const getTextToRead = () => {
    let cardsPerPage = isDesktop ? 4 : 2;
    const start = activeStep * cardsPerPage;
    const end = Math.min(start + cardsPerPage, data.length);
    return data
      .slice(start, end)
      .map((item) => `${item.missionTitle}. ${item.summary}`)
      .join(". ");
  };

  const handleNext = () => {
    let cardsPerPage = isDesktop ? 4 : 2;
    setActiveStep((prevActiveStep) =>
      Math.min(prevActiveStep + 1, Math.ceil(data.length / cardsPerPage) - 1)
    );
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
  };

  if (isLoading) {
    return (
      <div className={classes.loadingContainer}>
        <CircularProgress />
      </div>
    );
  }

  let cardsPerPage = isDesktop ? 4 : 2;
  const maxSteps = Math.ceil(data.length / cardsPerPage);

  const renderCards = () => {
    const content = [];
    const start = activeStep * cardsPerPage;
    const end = Math.min(start + cardsPerPage, data.length);
    for (let i = start; i < end; i++) {
      const item = data[i];
      content.push(
        <Grid item key={item.id || `card-${i}`} xs={12} sm={6}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={item.missionTitle}
                height="140"
                image={item.image_url}
                title={item.missionTitle}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.missionTitle}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.summary}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                className={classes.button}
                onClick={() => window.open(item.url, "_blank")}
              >
                Read more
              </Button>
            </CardActions>
          </Card>
        </Grid>
      );
    }
    return content;
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {renderCards()}
      </Grid>
      <MobileStepper
        className={classes.stepper}
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={
          <Button
            className={classes.button}
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button
            className={classes.button}
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </div>
  );
};

export default CardCarousel;
