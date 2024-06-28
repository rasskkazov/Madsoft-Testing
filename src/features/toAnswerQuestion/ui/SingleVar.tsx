import { Radio, Space, Form } from "antd";

import { ANSWER_FORM_NAME } from "@/entities";
import { TQuestion } from "@/entities/question/model/types";

export const SingleVar = (props: { variants: TQuestion["variants"] }) => {
  return (
    <Form.Item
      name={ANSWER_FORM_NAME}
      rules={[{ required: true, message: "Выберите вариант" }]}
    >
      <Radio.Group>
        <Space direction="vertical">
          {props.variants.map((ansVar) => (
            <Radio key={ansVar.value} value={ansVar.value}>
              {ansVar.label}
            </Radio>
          ))}
        </Space>
      </Radio.Group>
    </Form.Item>
  );
};
