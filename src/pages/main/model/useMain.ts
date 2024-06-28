import { questionStore } from "@/entities";
import { TQuestion } from "@/entities/question/model/types";

const questions: TQuestion[] = [
  {
    id: 1,
    questionLine: "Bogdan Single?",
    type: "VARIANT_SINGLE",
    variants: [
      { label: "Богдан", value: "Bogdan" },
      { label: "Рассказов", value: "Rasskazov" },
    ],
    answerValue: null,
  },
  {
    id: 2,
    questionLine: "Bogdan Multiple?",
    type: "VARIANTS_MULTIPLE",
    variants: [
      { label: "Богдан", value: "Bogdan" },
      { label: "Рассказов", value: "Rasskazov" },
    ],
    answerValue: null,
  },
  {
    id: 3,
    questionLine: "Bogdan Long?",
    type: "TEXT_LONG",
    answerValue: null,
  },
  {
    id: 4,
    questionLine: "Bogdan SHort?",
    type: "TEXT_SHORT",
    answerValue: null,
  },
];

export const useMain = () => {
  if (!questionStore.getQuestions()) questionStore.setQuestions(questions);

  return { questions };
};
