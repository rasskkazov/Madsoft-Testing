import { ReactNode } from "react";
import { Typography, Flex, Form, Button, FormProps, Space } from "antd";
import { TAnswer, TQuestion } from "../model/types";
import { ansStorage } from "../model/AnsStore";

const { Title } = Typography;

type QuestionProps = Omit<TQuestion, "type"> & {
  children: ReactNode;
};

export const Question = (props: QuestionProps) => {
  const [form] = Form.useForm<TAnswer>();

  const onFinish: FormProps<{ value: string | string[] }>["onFinish"] = (
    inp
  ) => {
    ansStorage.addAns({
      id: props.id,
      value: inp.value,
    });
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
