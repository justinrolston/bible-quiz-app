import React, { useState } from "react";
import QuizQuestion from "./QuizQuestion";
import QuizScore from "./QuizScore";

const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const numberOfQuestions = questions.length;
  const isLastQuestion = numberOfQuestions === currentQuestionIndex + 1;
  const { options, question, answer } = questions[currentQuestionIndex];

  const handleNextQuestion = () => {
    if (selectedOption === answer) {
      setScore(score + 1);
    }

    if (!isLastQuestion) {
      setCurrentQuestionIndex((nextQuestionIndex) => nextQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      setShowScore(true);
    }
  };

  if (showScore) {
    return <QuizScore score={score} numberOfQuestions={numberOfQuestions} />;
  } else {
    return (
      <QuizQuestion
        question={question}
        options={options}
        selectedOption={selectedOption}
        isLastQuestion={isLastQuestion}
        currentQuestionIndex={currentQuestionIndex}
        onOptionClick={setSelectedOption}
        onNextQuestion={handleNextQuestion}
      />
    );
  }
};

export default Quiz;
