import { describe, expect, test } from "vitest";
import { generateQuestions } from "../generateQuestions";

describe("Generate Questions", () => {
  test("Generate 3 questions", () => {
    const questions = generateQuestions(3);
    expect(questions.length).toBe(3);
  });
});
