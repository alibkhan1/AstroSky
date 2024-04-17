import { useState, useEffect } from "react";
import { useQuizStyles } from "./quiz.styles";
import { QuizData } from "./QuizData";

const Quiz = ({ isTextToSpeech }) => {
  const classes = useQuizStyles();
  const [currentSelection, setCurrentSelection] = useState("");
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [endOfQuiz, setEndOfQuiz] = useState(false);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  useEffect(() => {
    if (isTextToSpeech) {
      const question = QuizData[currentQuestion].question;
      const options = QuizData[currentQuestion].options.join(", ");
      const textToSpeak = `Question ${
        currentQuestion + 1
      }: ${question}. Options are: ${options}.`;

      const speechSynthesisUtterance = new SpeechSynthesisUtterance(
        textToSpeak
      );
      window.speechSynthesis.speak(speechSynthesisUtterance);
    }

    // Cleanup function to stop speech synthesis when navigating away or moving to the next question
    return () => {
      window.speechSynthesis.cancel();
    };
  }, [currentQuestion, isTextToSpeech]);

  const handleFormSelection = (event) => {
    setCurrentSelection(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    const isCorrect = currentSelection === QuizData[currentQuestion].answer;
    if (isCorrect) {
      setScore(score + 1);
    } else {
      setIncorrectAnswers([
        ...incorrectAnswers,
        {
          question: QuizData[currentQuestion].question,
          correctAnswer: QuizData[currentQuestion].answer,
        },
      ]);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < QuizData.length) {
      setCurrentQuestion(nextQuestion);
      setCurrentSelection("");
    } else {
      setEndOfQuiz(true);
    }
  };

  return (
    <>
      {endOfQuiz ? (
        <>
          <h1 className={classes.heading}>End of Quiz! </h1>
          <div className={classes.quizCard}>
            <h2> Your Score: {score} </h2>
            {incorrectAnswers.length > 0 ? (
              <div>
                <h2> Incorrect Answers</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Question</th>
                      <th>Correct Answer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {incorrectAnswers.map((item, index) => (
                      <tr key={index}>
                        <td>{item.question}</td>
                        <td>{item.correctAnswer}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <></>
            )}
          </div>
        </>
      ) : (
        <>
          <h1 className={classes.heading}>Welcome to Our Astronomy Quiz!</h1>
          <div className={classes.quizCard}>
            <div className={classes.containerCenter}>
              <h3>
                Question {currentQuestion + 1} :{" "}
                {QuizData[currentQuestion].question}
              </h3>
              <form onSubmit={submitForm}>
                <div className={classes.optionsContainer}>
                  <ul className={classes.answerOptions}>
                    {QuizData[currentQuestion].options.map((option, index) => (
                      <li key={index}>
                        <label>
                          <input
                            type="radio"
                            name="quizOption"
                            value={option}
                            onChange={handleFormSelection}
                            checked={currentSelection === option}
                          />
                          {option}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className={classes.submitButton} type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Quiz;