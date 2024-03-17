import { QuizData } from "./QuizData";
import { useState } from "react";
import { useQuizStyles } from "./quiz.styles";


const Quiz = () => {
  const classes = useQuizStyles();
  const [currentSelection, setCurrentSelection] = useState("");
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [endOfQuiz, setEndOfQuiz] = useState(false);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
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
            <div> Your Score: {score} </div>
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