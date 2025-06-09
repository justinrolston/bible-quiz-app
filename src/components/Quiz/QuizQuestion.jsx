export default function QuizQuestion(props) {
  const handleOptionClick = (option) => {
    props.onOptionClick(option);
    setTimeout(() => {
      props.onNextQuestion(option);
    }, 500);
  };

  return (
    <div className="quiz-container">
      <div className="question-section">
        <h2
          dangerouslySetInnerHTML={{
            __html: `#${props.currentQuestionIndex + 1}. ${props.question}`,
          }}
        ></h2>
      </div>
      <div className="options-section">
        {props.options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${
              props.selectedOption === option ? "selected" : ""
            }`}
            onClick={() => handleOptionClick(option)}
            disabled={props.selectedOption !== null}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
