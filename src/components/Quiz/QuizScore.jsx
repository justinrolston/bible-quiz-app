export default function QuizScore(props){

    return(
        <>
        <div className="score-section">
        You scored {props.score} out of {props.currentQuestionIndex + 1}
      </div>
        <button
        onClick={() => (window.location = window.location)}
        className="next-button"
    >
        Reset
    </button>
    </>
    )
}