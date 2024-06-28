import { Form, Checkbox } from "antd";

import { ANSWER_FORM_NAME } from "@/entities";
import { TQuestion } from "@/entities/question/model/types";

export const MultipleVars = (props: { variants: TQuestion["variants"] }) => {
  return (
    <Form.Item
      name={ANSWER_FORM_NAME}
      rules={[{ required: true, message: "Выберите вариант" }]}
    >
      <Checkbox.Group
        options={props.variants}
        style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}
      />
    </Form.Item>
  );
};
