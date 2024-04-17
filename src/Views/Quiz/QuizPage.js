import React from "react";
import Quiz from "../../components/AstronomyQuiz/Quiz";
import { Container } from "@material-ui/core";
const QuizPage = (props ) => {
  return (
    <Container>
      <Quiz isTextToSpeech={props.isTextToSpeech} />
    </Container>
  );
};

export default QuizPage;
