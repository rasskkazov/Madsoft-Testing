import { useState } from "react";
import { Radio, Space, Form } from "antd";
import type { RadioChangeEvent } from "antd";
import { VariantsAnswerProps } from "../model/types";

export const SingleVar = (props: VariantsAnswerProps) => {
  const [value, setValue] = useState<string>(null);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <Form.Item
      name={"value"}
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
