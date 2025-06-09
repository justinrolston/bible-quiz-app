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

  const handleNextQuestion = (selectedAnswer) => {
    if (selectedAnswer === answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (!isLastQuestion) {
        setCurrentQuestionIndex((nextQuestionIndex) => nextQuestionIndex + 1);
        setSelectedOption(null);
      } else {
        setShowScore(true);
      }
    }, 100);
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
