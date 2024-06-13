import "./App.css";
import Quiz from "./components/Quiz/Quiz.jsx";
import { generateQuestions } from "./components/Quiz/utils/generateQuestions.js";

function App() {
  const questions = generateQuestions(3);

  return (
    <div className="App">
      <h1>Bible Books Quiz</h1>
      <Quiz questions={questions} />
    </div>
  );
}

export default App;
