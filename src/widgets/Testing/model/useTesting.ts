import { questionStore } from "@/entities";
import { TQuestion, ANSWER_VALUE } from "@/entities/question/model/types";
import { useState, useEffect } from "react";

export const useTesting = () => {
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

      const numberOfCompleted: number = testingProgress.reduce(
        (accumulator, question) => {
          return question[ANSWER_VALUE] ? accumulator + 1 : accumulator;
        },
        0
      );

      setProgressPercent((numberOfCompleted / testingProgress.length) * 100);
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

  return { curQuestion, onAnswer, progressPercent, isLastQuestion };
};
