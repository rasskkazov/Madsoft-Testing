import { VariantsAnswerProps } from "../../model/types";

export const MultipleVars = (props: VariantsAnswerProps) => {
  return <div>Multiple variants {props.variants[0].value}</div>;
};
