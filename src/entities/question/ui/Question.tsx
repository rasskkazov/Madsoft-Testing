import { ReactNode } from "react";
import {
  TQuestion,
  TextAnswerProps,
  VariantsAnswerProps,
} from "../model/types";
import { LongAns } from "./forms/LongAns";
import { MultipleVars } from "./forms/MultipleVars";
import { ShortAns } from "./forms/ShortAns";
import { SingleVar } from "./forms/SingleVar";

const answerTypes = {
  longAnswer: (props: TextAnswerProps) => <LongAns {...props} />,
  shortAnswer: (props: TextAnswerProps) => <ShortAns {...props} />,
  multipleVariants: (props: VariantsAnswerProps) => <MultipleVars {...props} />,
  singleVar: (props: VariantsAnswerProps) => <SingleVar {...props} />,
};
type TAnsTypeProps = TextAnswerProps & VariantsAnswerProps;

type TAns = keyof typeof answerTypes;
type TAnsProps = {
  [K in TAns]: Parameters<(typeof answerTypes)[K]>[0];
};

export type QuestionProps<T extends TAns> = TQuestion & {
  ansType: T;
  ansTypeProps: TAnsProps[T];
  submitBtn: ReactNode;
};

export const Question = <T extends TAns>(props: QuestionProps<T>) => {
  const answer = answerTypes[props.ansType](
    props.ansTypeProps as TAnsTypeProps
  );

  return (
    <div className="question">
      <div className="questionLine">{props.questionLine}</div>
      <div className="questionAnswer">{answer}</div>
      <div className="questionSubmitSlot">{props.submitBtn}</div>
    </div>
  );
};
