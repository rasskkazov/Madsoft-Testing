import { ReactNode } from "react";
import { TQuestion } from "../model/types";

export type QuestionProps = TQuestion & {
  submitBtn: ReactNode;
  children: ReactNode;
};

export const Question = (props: QuestionProps) => {
  return (
    <div className="question">
      <h1 className="question__line">{props.questionLine}</h1>
      <div className="question__content">{props.children}</div>

      <div className="questionSubmitSlot">{props.submitBtn}</div>
    </div>
  );
};
