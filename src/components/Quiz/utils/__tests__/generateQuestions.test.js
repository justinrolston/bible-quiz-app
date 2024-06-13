import { describe, expect, test } from "vitest";
import { generateQuestions } from "../generateQuestions";

describe("Generate Questions", () => {
  test("Generate 3 questions", () => {
    const genQuestions = 3;
    const questions = generateQuestions(genQuestions);

    expect(questions.length).toBe(genQuestions);
  });
  test("Generate 4 questions and defaults to 2 answer options", () => {
    const genQuestions = 4;
    const answerOptions = 2;
    const questions = generateQuestions(genQuestions);

    expect(questions.length).toBe(genQuestions);
    expect(questions[0].options.length).toBe(answerOptions + 1);
  });

  test("Generate 2 questions and 4 answer options ", () => {
    const genQuestions = 2;
    const answerOptions = 4;
    const questions = generateQuestions(genQuestions, answerOptions);

    expect(questions.length).toBe(genQuestions);
    expect(questions[0].options.length).toBe(answerOptions + 1);
  });
});
