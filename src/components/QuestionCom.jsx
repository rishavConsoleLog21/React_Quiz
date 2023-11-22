import React, { useState } from "react";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import Questions from "../questions";

const QuestionCom = ({ indexId, onSelectAnswer, onSkipAnswer }) => {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: Questions[indexId].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = "";
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "incorrect";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <>
      <div id="question">
        <QuestionTimer
          timeout={45000} // 45 seconds in milliseconds
          onTimeout={onSkipAnswer}
        />
        <h2>{Questions[indexId].text}</h2>
        <Answers
          answers={Questions[indexId].answers}
          selectedAnswer={answer.selectedAnswer}
          answerState={answerState}
          onSelect={handleSelectAnswer}
        />
      </div>
    </>
  );
};

export default QuestionCom;
