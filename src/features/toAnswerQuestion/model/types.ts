export type TextAnswerProps = {
  maxLength?: number;
};

export type VariantsAnswerProps = {
  variants: {
    label: string;
    value: string;
  }[];
};

export const ANSWER_TYPES = {
  LONG_TEXT: "longAns",
  SHORT_TEXT: "shortAns",
  MUL_VARS: "multipleVars",
  SINGLE_VAR: "singleVar",
};
