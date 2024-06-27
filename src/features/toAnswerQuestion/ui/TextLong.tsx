import { Input, Form } from "antd";
import { TextAnswerProps } from "../model/types";

const { TextArea } = Input;

export const TextLong = (props: TextAnswerProps) => {
  return (
    <Form.Item
      name={"value"}
      rules={[{ required: true, message: "Введите ответ" }]}
    >
      <TextArea
        rows={4}
        cols={40}
        placeholder="Развернутый ответ..."
        maxLength={props.maxLength}
      />
    </Form.Item>
  );
};
