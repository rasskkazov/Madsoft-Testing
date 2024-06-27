import { Form, Checkbox } from "antd";
import { VariantsAnswerProps } from "../model/types";

export const MultipleVars = (props: VariantsAnswerProps) => {
  return (
    <Form.Item
      name={"value"}
      rules={[{ required: true, message: "Выберите вариант" }]}
    >
      <Checkbox.Group options={props.variants} />
    </Form.Item>
  );
};
