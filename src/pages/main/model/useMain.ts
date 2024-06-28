import { questionStore } from "@/entities";
import { TQuestion } from "@/entities/question/model/types";

const questions: TQuestion[] = [
  {
    id: 1,
    questionLine: "Какое животное не умеет чихать?",
    type: "VARIANT_SINGLE",
    variants: [
      { label: "Собака", value: "dog" },
      { label: "Слон", value: "elefant" },
      { label: "Кошка", value: "cat" },
      { label: "Кролик", value: "rabbit" },
    ],
    answerValue: null,
  },
  {
    id: 2,
    questionLine: "Какие 2 страны побеждали на Евровидение больше 5 раз?",
    type: "VARIANTS_MULTIPLE",
    variants: [
      { label: "Ирландия", value: "ireland" },
      { label: "Испания", value: "spain" },
      { label: "Швеция", value: "sweden" },
      { label: "Австрия", value: "austria" },
    ],
    answerValue: null,
  },
  {
    id: 3,
    questionLine: "Перечислите через запятую все цвета радуги?",
    type: "TEXT_LONG",
    answerValue: null,
  },
  {
    id: 4,
    questionLine: "Самый легкий элемент в таблице Менделеева?",
    type: "TEXT_SHORT",
    answerValue: null,
  },
];

export const useMain = () => {
  if (!questionStore.getQuestions()) questionStore.setQuestions(questions);

  return { questions };
};
