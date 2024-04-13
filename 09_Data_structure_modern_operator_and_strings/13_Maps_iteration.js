"use strict";

const questions = new Map([
  ["question", "Which is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct🎉"],
  [false, "Wrong☹️"],
]);

console.log(questions.get("question"));
for (const [key, value] of questions) {
  if (typeof key === "number") {
    console.log(`Option ${key}: ${value}`);
  }
}

const userInput = 3;
console.log(questions.get(userInput === questions.get("correct")));
