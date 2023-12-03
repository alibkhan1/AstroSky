import React from "react";
import Blog from "../../components/Blog/Blog";
import { Container } from "@material-ui/core";
const News = (props) => {
  return (
    <Container>
      <Blog
        readingLevel={props.readingLevel}
        isTextToSpeech={props.isTextToSpeech}
      />
    </Container>
  );
};

export default News;
