import { Progress, Typography } from "antd";
// import { useTesting } from "../model/useTesting";

import { Retry, getAnswerFormElement } from "@/features";
import { Question } from "@/entities";
import { TQuestion } from "@/entities/question/model/types";
import * as classes from "./Testing.module.scss";
import { useTesting } from "../model/useTesting";

const { Title } = Typography;

export const Testing = (props: { questions: TQuestion[] }) => {
  const { curQuestion, onAnswer, progressPercent } = useTesting();

  return (
    <div className={classes.testing}>
      <Title level={4}>Тестирование</Title>

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
      <br />
      <br />
      {!curQuestion && <Retry />}
    </div>
  );
};
