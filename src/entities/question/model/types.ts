type AnswerFieldType =
  | "TEXT_LONG"
  | "TEXT_SHORT"
  | "VARIANTS_MULTIPLE"
  | "VARIANT_SINGLE";

export type TQuestion = {
  id: number;
  questionLine: string;
  type: AnswerFieldType;
  variants?: {
    label: string;
    value: string;
  }[];
};

export type TAnswer = {
  value: string | string[];
};
