import { TextAnswerProps } from "../../model/types";

export const LongAns = (props: TextAnswerProps = { maxLength: 200 }) => {
  return <div>Long answer {props.maxLength}</div>;
};
