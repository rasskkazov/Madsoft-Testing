export type TQuestion = {
  questionLine: string;
  variants?: string[];
};

export type TextAnswerProps = {
  maxLength?: number;
} | null;

export type VariantsAnswerProps = {
  variants: {
    label: string;
    value: string;
  }[];
};
