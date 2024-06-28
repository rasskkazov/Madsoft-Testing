import { Form } from "antd";
import { ANSWER_VALUE, TQuestion } from "./types";

export const useQuestion = (onSubmit: Function, id: number) => {
  const [form] = Form.useForm<Pick<TQuestion, "answerValue">>();

  const onFinish = (inp: Pick<TQuestion, "answerValue">) =>
    onSubmit(id, inp[ANSWER_VALUE]);

  return { form, onFinish };
};
