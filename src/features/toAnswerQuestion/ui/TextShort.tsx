import { Input, Form } from "antd";
import { TextAnswerProps } from "../model/types";

const { TextArea } = Input;

export const TextShort = (props: TextAnswerProps) => {
  return (
    <Form.Item
      name={"value"}
      rules={[{ required: true, message: "Введите ответ" }]}
    >
      <Input maxLength={props.maxLength || 20} placeholder="Ответ..." />
    </Form.Item>
  );
};
