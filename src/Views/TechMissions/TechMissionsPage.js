import React from "react";
import CardCarousel from "../../components/CardCarousel/CardCarousel";
import { Container } from "@material-ui/core";
const TechMissionsPage = (props) => {
  return (
    <Container>
      <CardCarousel
        readingLevel={props.readingLevel}
        isTextToSpeech={props.isTextToSpeech}
      />
    </Container>
  );
};

export default TechMissionsPage;
