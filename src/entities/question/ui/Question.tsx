import { ReactNode } from "react";
import { Typography, Flex, Form, Button, Space } from "antd";
import { ANSWER_VALUE, TQuestion } from "../model/types";
import { useQuestion } from "../model/useQuestion";

const { Title } = Typography;

type QuestionProps = Omit<TQuestion, "type" | "answerValue"> & {
  children: ReactNode;
  onSubmit?: (id: number, value: TQuestion["answerValue"]) => void;
};

export const Question = (props: QuestionProps) => {
  const { form, onFinish } = useQuestion(props.onSubmit, props.id);

  return (
    <Flex className="question" gap="middle" vertical>
      <Title level={5}>{props.questionLine}</Title>
      <Form form={form} onFinish={onFinish}>
        <Space direction="vertical">
          {props.children}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Ответить
            </Button>
          </Form.Item>
        </Space>
      </Form>
    </Flex>
  );
};
