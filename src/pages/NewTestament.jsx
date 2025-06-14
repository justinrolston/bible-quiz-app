import "../App.css";
import Quiz from "../components/Quiz/Quiz.jsx";
import Navbar from "../Navbar";
import { generateQuestions } from "../components/Quiz/utils/generateQuestions.js";
import ntBooks from "../components/Data/ntBooks.js";

function NewTestament() {
  const questions = generateQuestions(10, 2, ntBooks);

  return (
    <div className="App">
      <Navbar />
      <h1>New Testament Quiz</h1>
      <Quiz questions={questions} />
    </div>
  );
}

export default NewTestament;
