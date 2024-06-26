import { Question } from "@/entities";
import { AnswerQuestion } from "@/features";

export const Test = () => {
  return (
    <div className="test">
      <Question
        questionLine="Вопрос 1"
        ansType="multipleVariants"
        ansTypeProps={{ variants: [{ label: "bogdan", value: "bogdan" }] }}
        submitBtn={<AnswerQuestion />}
      />
      <Question
        questionLine="Вопрос 2"
        ansType="shortAnswer"
        ansTypeProps={{ maxLength: 100 }}
        submitBtn={<AnswerQuestion />}
      />
      <Question
        questionLine="Вопрос 3"
        ansType="singleVar"
        ansTypeProps={{ variants: [{ label: "alo", value: "alo" }] }}
        submitBtn={<AnswerQuestion />}
      />
      <Question
        questionLine="Вопрос 4"
        ansType="longAnswer"
        ansTypeProps={{}}
        submitBtn={<AnswerQuestion />}
      />
    </div>
  );
};
