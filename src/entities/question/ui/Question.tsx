import { ReactNode } from "react";
import { Typography, Flex, Form, Button, FormProps, Space } from "antd";
import { ANSWER_VALUE, TQuestion } from "../model/types";
import { questionStore } from "../model/QuestionStore";

const { Title } = Typography;

type QuestionProps = Omit<TQuestion, "type" | "answerValue"> & {
  children: ReactNode;
  onSubmit?: (id: number, value: TQuestion["answerValue"]) => void;
};

export const Question = (props: QuestionProps) => {
  const [form] = Form.useForm<Pick<TQuestion, "answerValue">>();

  const onFinish: FormProps<Pick<TQuestion, "answerValue">>["onFinish"] = (
    inp
  ) => {
    questionStore.updateQuestionAnswer(props.id, inp[ANSWER_VALUE]);
    props.onSubmit(props.id, inp[ANSWER_VALUE]);
  };

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
