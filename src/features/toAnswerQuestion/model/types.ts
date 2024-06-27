export type TextAnswerProps = {
  maxLength?: number;
};

export type VariantsAnswerProps = {
  variants: {
    label: string;
    value: string;
  }[];
};
