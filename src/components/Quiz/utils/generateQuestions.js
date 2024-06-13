import bibleBooks from "../../Data/bibleBooks";

export function generateQuestions(numberOfQuestions) {
  const questions = [];

  for (let index = 0; index < numberOfQuestions; index++) {
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

    const optionsPool = bibleBooks
      .filter((b) => b !== answer)
      .sort(() => 0.5 - Math.random());

    const options = [answer, ...optionsPool.slice(0, 3)].sort(
      () => 0.5 - Math.random()
    );

    questions.push({ question, options, answer });
  }

  return questions;
}
