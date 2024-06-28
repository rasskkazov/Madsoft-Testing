import { Progress, Typography } from "antd";
// import { useTesting } from "../model/useTesting";

import {
  TextShort,
  MultipleVars,
  TextLong,
  SingleVar,
  getAnswerFormElement,
} from "@/features";
import { Question, questionStore } from "@/entities";
import { ANSWER_VALUE, TQuestion } from "@/entities/question/model/types";
import * as classes from "./Testing.module.scss";
import { useEffect, useState } from "react";

const { Title } = Typography;

export const Testing = (props: { questions: TQuestion[] }) => {
  const [curQuestion, setCurQuestion] = useState<TQuestion>(null);
  const [progressPercent, setProgressPercent] = useState<number>(null);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [testingProgress, setTestingProgress] = useState(
    questionStore.getQuestions()
  );

  useEffect(() => {
    const index = testingProgress.findIndex(
      (question) => !question[ANSWER_VALUE]
    );
    if (index !== -1) {
      setCurQuestion(testingProgress[index]);
      setIsLastQuestion(index === testingProgress.length - 1);

      const numberOfUncompleted: number = testingProgress.reduce(
        (accumulator, question) => {
          return question[ANSWER_VALUE] ? accumulator + 1 : accumulator;
        },
        0
      );
      console.log("uncompl", numberOfUncompleted);

      setProgressPercent((numberOfUncompleted / testingProgress.length) * 100);
    }
  }, [testingProgress]);

  const onAnswer = (id: number, value: TQuestion["answerValue"]) => {
    setTestingProgress((questions) => {
      const questionToUpdate = questions.find((question) => question.id === id);
      questionToUpdate[ANSWER_VALUE] = value;
      const updatedQuestions = questions.map((question) => {
        if (question.id === questionToUpdate.id) return questionToUpdate;
        return question;
      });
      return updatedQuestions;
    });
  };

  return (
    <div className={classes.testing}>
      <Title level={4}>Тестирование</Title>

      <div className={classes.testing__progress}>
        <Progress
          steps={props.questions.length}
          // percent={50}
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
      {isLastQuestion && <div>Это последний вопрос</div>}
    </div>
  );
};
