export default function QuizQuestion(props) {
  return (
    <>
      <div className="question-section">
        <h2 dangerouslySetInnerHTML={{ __html: props.question }}></h2>
      </div>
      <div className="options-section">
        {props.options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${
              props.selectedOption === option ? "selected" : ""
            }`}
            onClick={() => props.onOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        onClick={props.onNextQuestion}
        className="next-button"
        disabled={!props.selectedOption}
      >
        {props.QuizQuestioncurrentQuestionIndex === 9 ? "Finish" : "Next"}
      </button>
    </>
  );
}
