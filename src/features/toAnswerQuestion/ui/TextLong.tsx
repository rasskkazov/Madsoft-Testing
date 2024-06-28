import { Input, Form } from "antd";

import { ANSWER_FORM_NAME } from "@/entities";
import { TQuestion } from "@/entities/question/model/types";

const { TextArea } = Input;

export const TextLong = (props: { maxLength?: TQuestion["maxLength"] }) => {
  return (
    <Form.Item
      name={ANSWER_FORM_NAME}
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
