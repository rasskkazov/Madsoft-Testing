import { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Radio, Space } from "antd";
import { VariantsAnswerProps } from "../model/types";

export const SingleVar = (props: VariantsAnswerProps) => {
  const [value, setValue] = useState<string>(null);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical">
        {props.variants.map((ansVar) => (
          <Radio value={ansVar.value}>{ansVar.label}</Radio>
        ))}
      </Space>
    </Radio.Group>
  );
};
