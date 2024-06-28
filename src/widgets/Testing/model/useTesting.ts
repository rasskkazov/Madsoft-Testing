import { useState, useEffect } from "react";

import { finishTesting } from "@/features";
import { questionStore } from "@/entities";
import { TQuestion, ANSWER_VALUE } from "@/entities/question/model/types";

export const useTesting = () => {
  const [curQuestion, setCurQuestion] = useState<TQuestion>(null);
  const [progressPercent, setProgressPercent] = useState<number>(null);
  const [testingProgress, setTestingProgress] = useState(
    questionStore.getQuestions()
  );

  useEffect(() => {
    const index = testingProgress.findIndex(
      (question) => !question[ANSWER_VALUE]
    );

    if (index !== -1) setCurQuestion(testingProgress[index]);
    else {
      setCurQuestion(null);
      finishTesting();
    }

    const numberOfCompleted: number = testingProgress.reduce(
      (accumulator, question) => {
        return question[ANSWER_VALUE] ? accumulator + 1 : accumulator;
      },
      0
    );

    setProgressPercent((numberOfCompleted / testingProgress.length) * 100);
  }, [testingProgress]);

  const onAnswer = (id: number, value: TQuestion["answerValue"]) => {
    questionStore.updateQuestionAnswer(id, value);

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

  return { curQuestion, onAnswer, progressPercent };
};
