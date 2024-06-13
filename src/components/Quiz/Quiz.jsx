import React, { useState } from "react";
import bibleBooks from "../Data/bibleBooks";
import QuizQuestion from "./QuizQuestion";
import QuizScore from "./QuizScore";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const numberOfQuestions = 3;

  const generateQuestion = () => {
    const bookIndex = Math.floor(Math.random() * bibleBooks.length);
    const book = bibleBooks[bookIndex];
    const questionType =
      Math.random() > 0.5 && bookIndex > 0 ? "before" : "after";

    let question;
    let answer;

    if (questionType === "before" && bookIndex > 0) {
      question = `What book comes <u>before</u> ${book}?`;
      answer = bibleBooks[bookIndex - 1];
    } else if (questionType === "after" && bookIndex < bibleBooks.length - 1) {
      question = `What book comes <u>after</u> ${book}?`;
      answer = bibleBooks[bookIndex + 1];
    } else {
      // If it's the first or last book, ask the opposite question
      question =
        questionType === "before"
          ? `What book comes after ${book}?`
          : `What book comes before ${book}?`;
      answer =
        questionType === "before"
          ? bibleBooks[bookIndex + 1]
          : bibleBooks[bookIndex - 1];
    }

    console.log(answer);
    const optionsPool = bibleBooks
      .filter((b) => b !== answer)
      .sort(() => 0.5 - Math.random());

    const options = [answer, ...optionsPool.slice(0, 3)].sort(
      () => 0.5 - Math.random()
    );

    return { question, options, answer };
  };

  const [currentQuestion, setCurrentQuestion] = useState(generateQuestion);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex <= numberOfQuestions) {
      // Set a limit for the number of questions
      setCurrentQuestionIndex(nextQuestionIndex);
      setCurrentQuestion(generateQuestion);
      setSelectedOption(null);
    } else {
      setShowScore(true);
    }
  };

  const { options, question } = currentQuestion;

  if (showScore) {
    return (
      <QuizScore score={score} currentQuestionIndex={currentQuestionIndex} />
    );
  } else {
    return (
      <QuizQuestion
        question={question}
        options={options}
        selectedOption={selectedOption}
        numberOfQuestions={numberOfQuestions}
        onOptionClick={handleOptionClick}
        onNextQuestion={handleNextQuestion}
      />
    );
  }
};

export default Quiz;
