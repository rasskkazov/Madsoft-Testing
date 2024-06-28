import { questionStore } from "@/entities";
import { ANSWER_VALUE } from "@/entities/question/model/types";

export const finishTesting = () => {
  const score = questionStore
    .getQuestions()
    .map((question) => `${question.questionLine}  —  ${question[ANSWER_VALUE]}`)
    .join("\n");

  const correct = "Слон\nИрландия, Швеция\nКр,Ор,Жёл,Зел,Гол,Син,Фиол\nВодород";

  alert(`Результат: \n\n${score}\n\n${correct}`);
};
