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
          "https://api.nasa.gov/planetary/apod?api_key=8oP0VlrZ7YoR5bcBVEGzywSGaz1zYjbPT2IqpVg1"
        );
        const data = await response.json();

        // Check if the media type is an image or video
        if (data.media_type === "image") {
          setBackgroundMedia(data.url);
        } else if (data.media_type === "video") {
          // For video, you might want to handle it differently (e.g., display a placeholder image)
          setBackgroundMedia("URL_TO_PLACEHOLDER_IMAGE");
        }

        setMediaType(data.media_type);
        setBackgroundDescription(data.explanation);
      } catch (error) {
        console.error("Error fetching NASA Image of the Day:", error);
      }
    };

    fetchNASAImageOfTheDay();
  }, []);

  useEffect(() => {
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
