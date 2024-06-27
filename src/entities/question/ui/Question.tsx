import { ReactNode } from "react";
import { TQuestion } from "../model/types";
import { Typography, Flex } from "antd";

export type QuestionProps = TQuestion & {
  submitBtn: ReactNode;
  children: ReactNode;
};

const { Title } = Typography;

export const Question = (props: QuestionProps) => {
  return (
    <Flex className="question" gap="middle" vertical>
      <Title level={5}>{props.questionLine}</Title>
      <div className="question__content">{props.children}</div>
      <div className="questionSubmitSlot">{props.submitBtn}</div>
    </Flex>
  );
};
