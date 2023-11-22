import React from "react";
import quizCompleteImg from "../assets/quiz-complete.png";
import Questions from "../questions";

const Summary = ({ userAnswers }) => {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === Questions[index].answers[0]
  );

  const skippedShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const inCorrectShare = 100 - skippedShare - correctShare;

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="quiz complete logo" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedShare}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctShare}%</span>
          <span className="text">Correct Answered</span>
        </p>
        <p>
          <span className="number">{inCorrectShare}%</span>
          <span className="text">In-Correct Answered</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === Questions[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " incorrect";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{Questions[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Summary;
