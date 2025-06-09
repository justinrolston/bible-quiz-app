import bibleBooks from "../../Data/bibleBooks";

export function generateQuestions(numberOfQuestions, numberOfOptions = 2, bookList = bibleBooks) {
  const questions = [];

  for (let index = 0; index < numberOfQuestions; index++) {
    const bookIndex = Math.floor(Math.random() * bookList.length);
    const book = bookList[bookIndex];
    const questionType =
      Math.random() > 0.5 && bookIndex > 0 ? "before" : "after";

    let question;
    let answer;

    if (questionType === "before" && bookIndex > 0) {
      question = `What book comes <u>before</u> ${book}?`;
      answer = bookList[bookIndex - 1];
    } else if (questionType === "after" && bookIndex < bookList.length - 1) {
      question = `What book comes <u>after</u> ${book}?`;
      answer = bookList[bookIndex + 1];
    } else {
      // If it's the first or last book, ask the opposite question
      question =
        questionType === "before"
          ? `What book comes after ${book}?`
          : `What book comes before ${book}?`;
      answer =
        questionType === "before"
          ? bookList[bookIndex + 1]
          : bookList[bookIndex - 1];
    }

    const optionsPool = bookList
      .filter((b) => b !== answer)
      .sort(() => 0.5 - Math.random());

    const options = [answer, ...optionsPool.slice(0, numberOfOptions)].sort(
      () => 0.5 - Math.random()
    );

    questions.push({ question, options, answer });
  }

  return questions;
}
