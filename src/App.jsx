import "./App.css";
import Quiz from "./components/Quiz/Quiz.jsx";
import Navbar from "./Navbar";
import { generateQuestions } from "./components/Quiz/utils/generateQuestions.js";

function App() {
  const questions = generateQuestions(10);

  return (
    <div className="App">
      <Navbar />
      <h1>Bible Quiz</h1>
      <Quiz questions={questions} />
    </div>
  );
}

export default App;
