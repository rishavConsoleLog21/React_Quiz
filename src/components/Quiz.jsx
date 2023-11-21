import React, { useState } from "react";
import Question from "../questions";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuizIndex = userAnswers.length;

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  }

  return (
    <div id="quiz">
      <div id="question">
        <h2>{Question[activeQuizIndex].text}</h2>
        <ul id="answers">
          {Question[activeQuizIndex].answers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
