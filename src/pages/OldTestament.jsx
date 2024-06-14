import "../App.css";
import Quiz from "../components/Quiz/Quiz.jsx";
import { generateQuestions } from "../components/Quiz/utils/generateQuestions.js";

function OldTestament() {
  const questions = generateQuestions(10);

  return (
    <div className="App">
      <h1>Old Testament Quiz</h1>
      <Quiz questions={questions} />
    </div>
  );
}

export default OldTestament;
