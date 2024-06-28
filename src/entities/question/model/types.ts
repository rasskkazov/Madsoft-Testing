type AnswerFormType =
  | "TEXT_LONG"
  | "TEXT_SHORT"
  | "VARIANTS_MULTIPLE"
  | "VARIANT_SINGLE";

export const ANSWER_VALUE = "answerValue";

export type TQuestion = {
  id: number;
  questionLine: string;
  type: AnswerFormType;
  [ANSWER_VALUE]: string | string[];

  //optional answer form data
  variants?: {
    label: string;
    value: string;
  }[];

  maxLength?: number;
};
