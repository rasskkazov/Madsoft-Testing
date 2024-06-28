import { useState } from "react";
import { Radio, Space, Form } from "antd";
import type { RadioChangeEvent } from "antd";

import { ANSWER_FORM_NAME } from "@/entities";
import { TQuestion } from "@/entities/question/model/types";

export const SingleVar = (props: { variants: TQuestion["variants"] }) => {
  const [value, setValue] = useState<string>(null);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <Form.Item
      name={ANSWER_FORM_NAME}
      rules={[{ required: true, message: "Выберите вариант" }]}
    >
      <Radio.Group onChange={onChange} value={value}>
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
