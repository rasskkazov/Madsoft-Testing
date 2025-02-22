import { Flex, Progress, Typography } from "antd";
import { useTesting } from "../model/useTesting";

import { Retry, TimeCountdown, getAnswerFormElement } from "@/features";
import { Question } from "@/entities";
import { TQuestion } from "@/entities/question/model/types";
import * as classes from "./Testing.module.scss";

const { Title } = Typography;

export const Testing = (props: { questions: TQuestion[] }) => {
  const { curQuestion, onAnswer, progressPercent, onFinish } = useTesting();

  return (
    <div className={classes.testing}>
      <Flex gap={20} justify="space-between" align="center">
        <Title level={4}>Тестирование</Title>
        <TimeCountdown onFinish={onFinish} />
      </Flex>

      <div className={classes.testing__progress}>
        <Progress
          steps={props.questions.length}
          percent={progressPercent}
          size={[40, 10]}
          showInfo={false}
        />
      </div>

      {curQuestion && (
        <Question
          key={curQuestion.id}
          id={curQuestion.id}
          questionLine={curQuestion.questionLine}
          onSubmit={onAnswer}
        >
          {getAnswerFormElement(curQuestion)}
        </Question>
      )}
      {!curQuestion && (
        <>
          <br />
          <br />
          <Retry />
        </>
      )}
    </div>
  );
};
