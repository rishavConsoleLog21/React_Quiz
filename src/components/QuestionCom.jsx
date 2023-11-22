import React from "react";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

const QuestionCom = ({
  questionText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answerState,
  onSkipAnswer,
}) => {
  return (
    <>
      <div id="question">
        <QuestionTimer
          timeout={45000} // 45 seconds in milliseconds
          onTimeout={onSkipAnswer}
        />
        <h2>{questionText}</h2>
        <Answers
          answers={answers}
          selectedAnswer={selectedAnswer}
          answerState={answerState}
          onSelect={onSelectAnswer}
        />
      </div>
    </>
  );
};

export default QuestionCom;
