import { VariantsAnswerProps } from "../../model/types";

export const SingleVar = (props: VariantsAnswerProps) => {
  return <div>Single variants {props.variants[0].value}</div>;
};
