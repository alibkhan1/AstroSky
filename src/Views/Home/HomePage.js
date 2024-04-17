import React, { useState, useEffect } from "react";
import { useStyles } from "./HomePage.styles";
import Navigation from "../../components/Navigation/Navigation";
import Background from "../../components/Background/Background";

const HomePage = ({ captionsEnabled, isTextToSpeech }) => {
  const [backgroundMedia, setBackgroundMedia] = useState("");
  const [backgroundDescription, setBackgroundDescription] = useState("");
  const [mediaType, setMediaType] = useState("");
  const classes = useStyles();

  useEffect(() => {
    const fetchNASAImageOfTheDay = async () => {
      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_APOD_KEY}`
        );
        const data = await response.json();
        setBackgroundMedia(data.url);
        setMediaType(data.media_type);
        setBackgroundDescription(data.explanation);
      } catch (error) {
        console.error("Error fetching NASA Image of the Day:", error);
      }
    };

    fetchNASAImageOfTheDay();
  }, []);

  useEffect(() => {
    window.speechSynthesis.cancel();
    if (isTextToSpeech) {
      const speech = new SpeechSynthesisUtterance(backgroundDescription);
      speech.lang = "en-US";
      speech.volume = 1;
      speech.rate = 1;
      speech.pitch = 1;
      window.speechSynthesis.speak(speech);
    } else {
      window.speechSynthesis.cancel();
    }
    return () => {
      window.speechSynthesis.cancel();
    };
  }, [isTextToSpeech, backgroundDescription]);

  return (
    <>
      <Navigation />
      <Background
        mediaType={mediaType}
        backgroundMedia={backgroundMedia}
        backgroundDescription={backgroundDescription}
        captionsEnabled={captionsEnabled}
      />
    </>
  );
};

export default HomePage;
