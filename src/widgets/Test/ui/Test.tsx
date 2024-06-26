import { Question } from "@/entities";
import { AnswerQuestion } from "@/features";

export const Test = () => {
  return (
    <div className="test">
      <Question
        questionLine="Вопрос 1"
        formType="singleVariant"
        submitBtn={<AnswerQuestion />}
      />
    </div>
  );
};
