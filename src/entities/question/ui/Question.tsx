import { ReactNode } from "react";
import { TQuestion } from "../model/type";
import { LongAnswer } from "./forms/LongAnswer";
import { MultipleVariants } from "./forms/MultipleVariants";
import { ShortAnswer } from "./forms/ShortAnswer";
import { SingleVariant } from "./forms/SingleVariant";

const formTypes = {
  longAnswer: <LongAnswer />,
  MultipleVariants: <MultipleVariants />,
  shortAnswer: <ShortAnswer />,
  singleVariant: <SingleVariant />,
};

type TFormTypes = keyof typeof formTypes;

export type TQuestionProps = TQuestion & {
  formType: TFormTypes;
  submitBtn: ReactNode;
};

export const Question = (props: TQuestionProps) => {
  return (
    <div className="question">
      <div className="questionLine">{props.questionLine}</div>
      <div className="questionAnswer">{formTypes[props.formType]}</div>
      <div className="questionSubmitSlot">{props.submitBtn}</div>
    </div>
  );
};
