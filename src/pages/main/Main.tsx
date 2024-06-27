import { Testing } from "@/widgets";

import * as classes from "./Main.module.scss";
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
  },
  {
    id: 2,
    questionLine: "Bogdan Multiple?",
    type: "VARIANTS_MULTIPLE",
    variants: [
      { label: "Богдан", value: "Bogdan" },
      { label: "Рассказов", value: "Rasskazov" },
    ],
  },
  {
    id: 3,
    questionLine: "Bogdan Long?",
    type: "TEXT_LONG",
  },
  {
    id: 4,
    questionLine: "Bogdan SHort?",
    type: "TEXT_SHORT",
  },
];

export const Main = () => {
  return (
    <div className={classes.container}>
      <Testing questions={questions} />
    </div>
  );
};
