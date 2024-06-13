export default function QuizScore(props) {
  return (
    <div className="quiz-container">
      <div className="score-section">
        You scored {props.score} out of {props.numberOfQuestions}
      </div>
      <button
        onClick={() => (window.location = window.location)}
        className="next-button"
      >
        Reset
      </button>
    </div>
  );
}
