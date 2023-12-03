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
    const exampleImage = {
      url: "https://images.pexels.com/photos/36753/flower-purple-lical-blosso.jpg",
      media_type: "image",
      explanation: "Example image description",
    };

    const exampleVideo = {
      url: "https://www.youtube.com/watch?v=RAnGpqrsSyc&ab_channel=ArtDeco",
      media_type: "video",
      explanation: "Example video description",
    };

    // Toggle between image and video for demonstration
    const useImage = false; // Change to false to use the video example

    if (useImage) {
      setBackgroundMedia(exampleImage.url);
      setMediaType(exampleImage.media_type);
      setBackgroundDescription(exampleImage.explanation);
    } else {
      setBackgroundMedia(exampleVideo.url);
      setMediaType(exampleVideo.media_type);
      setBackgroundDescription(exampleVideo.explanation);
    }
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
