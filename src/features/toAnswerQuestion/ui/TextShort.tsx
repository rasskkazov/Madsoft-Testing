import { Input, Form } from "antd";

import { ANSWER_FORM_NAME } from "@/entities";
import { TQuestion } from "@/entities/question/model/types";

const { TextArea } = Input;

export const TextShort = (props: { maxLength?: TQuestion["maxLength"] }) => {
  return (
    <Form.Item
      name={ANSWER_FORM_NAME}
      rules={[{ required: true, message: "Введите ответ" }]}
    >
      <Input maxLength={props.maxLength || 20} placeholder="Ответ..." />
    </Form.Item>
  );
};
