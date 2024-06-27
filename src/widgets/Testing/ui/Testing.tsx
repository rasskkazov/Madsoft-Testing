import { useState } from "react";
import { Progress, Typography } from "antd";

import { TextShort, MultipleVars, TextLong, SingleVar } from "@/features";
import { Question } from "@/entities";
import { TQuestion } from "@/entities/question/model/types";
import * as classes from "./Testing.module.scss";

const { Title } = Typography;

export const Testing = (props: { questions: TQuestion[] }) => {
  const [progress, setProgress] = useState();
  const [curQuestionId, setCurQuestionId] = useState(4);

  const curQuestion = props.questions.find(
    (question) => question.id === curQuestionId
  );

  const questionElem = (function () {
    switch (curQuestion.type) {
      case "VARIANT_SINGLE":
        return <SingleVar variants={curQuestion.variants} />;
      case "VARIANTS_MULTIPLE":
        return <MultipleVars variants={curQuestion.variants} />;
      case "TEXT_LONG":
        return <TextLong />;
      case "TEXT_SHORT":
        return <TextShort />;
    }
  })();

  return (
    <div className={classes.testing}>
      <Title level={4}>Тестирование</Title>

      <div className={classes.testing__progress}>
        <Progress
          steps={props.questions.length}
          percent={50}
          size={[40, 10]}
          showInfo={false}
        />
      </div>

      <Question
        key={curQuestion.id}
        id={curQuestion.id}
        questionLine={curQuestion.questionLine}
      >
        {questionElem}
      </Question>
    </div>
  );
};
