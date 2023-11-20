import React from "react";
import quizLogo from "../assets/quiz-logo.png";

const Header = () => {
  return (
    <header>
      <img src={quizLogo} alt="quiz logo" />
      <h1>Play the quiz</h1>
      <h2>And learn ReactJS</h2>
    </header>
  );
};

export default Header;
