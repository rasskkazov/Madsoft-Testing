import { questionStore } from "@/entities";
import { ANSWER_VALUE } from "@/entities/question/model/types";

export const finishTesting = () => {
  const score = questionStore
    .getQuestions()
    .map((question) => `${question.questionLine}  —  ${question[ANSWER_VALUE]}`)
    .join("\n");

  alert(`Результат: \n\n${score}`);
};
