import { TextAnswerProps } from "../model/types";

export const ShortAns = (props: TextAnswerProps = { maxLength: 50 }) => {
  return <div>Short answer {props.maxLength}</div>;
};
