import "../App.css";
import Quiz from "../components/Quiz/Quiz.jsx";
import Navbar from "../Navbar";
import { generateQuestions } from "../components/Quiz/utils/generateQuestions.js";
import otBooks from "../components/Data/otBooks.js";

function OldTestament() {
  const questions = generateQuestions(10, 2, otBooks);

  return (
    <div className="App">
      <Navbar />
      <h1>Old Testament Quiz</h1>
      <Quiz questions={questions} />
    </div>
  );
}

export default OldTestament;
